import { utils } from 'ethers'
import * as Yup from 'yup'

export const validationSchema = () => {
  return Yup.object().shape({
    recipientPublicKey: Yup.string()
      .test(
        'required',
        'Recipient Address is required',
        (value) => !!value)
      .test(
        'validDataHextString',
        'Please enter a valid public key',
        (value) => utils.isHexString(value, 64)
      ),
    name: Yup.string().required('Name is required'),
    resurrectionTime: Yup.number().required('Resurrection time is required'),
    bounty: Yup.number().required('Bounty is required'),
    diggingFee: Yup.number().required('Digging Fee is required'),
    days: Yup.number()
      .when("custom", {
        is: true,
        then: Yup.number().required("Please select Days")
      }),
    hours: Yup.number()
    .when("custom", {
      is: true,
      then: Yup.number().required("Please select Hours")
    }),
    minutes: Yup.number()
    .when("custom", {
      is: true,
      then: Yup.number().required("Please select minutes")
    }),
    custom: Yup.bool(),
    fileUploaded: Yup.mixed()
      .test(
        'required',
        'Please upload a file',
        (value) => !!value
      )
      .test(
      'filesize',
      'Files must not be larger than 2.9MB',
      (value) => value ? value.size <= 2999800 : true
    ),
    address: Yup.string().required('Please select an archaeologist')
  }).nullable()
}