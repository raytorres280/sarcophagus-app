import { BigNumber } from "@ethersproject/bignumber";

const truncate = (fullStr, strLen, separator, sepLength) => {
  if (fullStr.length <= strLen) return fullStr;

  separator = separator || '...'

  const sepLen = separator.length
  const charsToShow = strLen - sepLen
  const frontChars = Math.ceil(sepLength || charsToShow / 2 + 1) // accounts for the "0x"
  const backChars = Math.floor(charsToShow / 2 - 1) // accounts for the "0x"

  return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
}

const createLocationNumberObject = (length, day = false) => {
  const numArray = Array.from({ length: length + 1 }, (_, k) => {
    if (k === 0) return 0;
    return k;
  });
  if (day) numArray.shift();
  const object = {};
  numArray.forEach((number) => (object[`number_${number}`] = number));
  return object;
};

const checkReceivedStatus = (resurrectionTime, resurrectionWindow, privateKey, SarcophagusState) => {
  const resurrectionTimePlusWindow = resurrectionTime.add(resurrectionWindow)
  const isUnwrapped = SarcophagusState === 2 && privateKey !== "0x0000000000000000000000000000000000000000000000000000000000000000"
  const isActive = SarcophagusState === 1 && resurrectionTimePlusWindow.gte(BigNumber.from(Number(Date.now().valueOf() / 1000).toFixed(0)))
  const isVisible = isUnwrapped || isActive
  return { isUnwrapped, isActive, isVisible }
}

export {
  truncate,
  createLocationNumberObject,
  checkReceivedStatus
}