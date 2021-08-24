import { useState, useEffect, useCallback } from "react";
import { encrypt } from "ecies-geth";
import { utils } from "ethers";
import { hexToBytes } from "../../utils/bytes";

const useFileEncryption = () => {
  const [file, setFile] = useState(false);
  const [recipientPublicKey, setRecipientPublicKey] = useState(false);
  const [fileByteArray, setFileByteArrayArray] = useState(false);
  const [fileEncryptedRecipient, setFileEncryptedRecipient] = useState(false);
  const [archaeologistPublicKey, setArchaeologistAddress] = useState(false);
  const [doubleEncryptedFile, setDoubleEncryptedFile] = useState(false);
  const [assetDoubleHash, setAssetDoubleHash] = useState(false);

  useEffect(() => {
    if (!file) return;
    try {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => {
        const result = e.target.result;
        setFileByteArrayArray(result);
      };
    } catch (e) {
      console.error(e);
    }
  }, [file]);

  const firstEncryption = useCallback(async () => {
    try {
      let formatedPublicKey;
      if (recipientPublicKey.substr(0, 4) !== "0x04")
        formatedPublicKey = "0x04" + recipientPublicKey;
      const recipPubKeyBytes = hexToBytes(
        formatedPublicKey || recipientPublicKey,
        true
      ).slice(1);
      const encrypted = await encrypt(recipPubKeyBytes, fileByteArray);
      setFileEncryptedRecipient(encrypted);

      const hashedOnce = utils.keccak256(encrypted);
      const hashedTwice = utils.keccak256(hashedOnce);
      setAssetDoubleHash(utils.arrayify(hashedTwice));
    } catch (e) {
      console.error(e);
    }
  }, [recipientPublicKey, fileByteArray]);

  useEffect(() => {
    if (!fileByteArray || !recipientPublicKey) return;
    firstEncryption();
  }, [fileByteArray, recipientPublicKey, firstEncryption]);

  const secondEncryption = useCallback(async () => {
    try {
      const archPubKeyBytes = hexToBytes(archaeologistPublicKey, true);
      const encrypted = await encrypt(archPubKeyBytes, fileEncryptedRecipient);
      setDoubleEncryptedFile(encrypted);
    } catch (e) {
      console.error(e);
    }
  }, [fileEncryptedRecipient, archaeologistPublicKey]);

  useEffect(() => {
    if (!fileEncryptedRecipient || !archaeologistPublicKey) return;
    secondEncryption();
  }, [fileEncryptedRecipient, archaeologistPublicKey, secondEncryption]);

  return {
    file,
    setFile,
    setRecipientPublicKey,
    setArchaeologistAddress,
    doubleEncryptedFile,
    assetDoubleHash,
  };
};

export default useFileEncryption;
