import React, { useEffect } from "react";
import useCollapse from "../../customHooks/useCollapse";
import CollapsedContainer from "../CollapsedContainer";
import { FILE_UPLOAD_HEADER } from "../../../constants";
import icon from "../../../assets/images/bxUpload.svg";
import FileDrop from "./FileDrop";

const UploadContainer = ({ values, errors, ...rest }) => {
  const { collapsed, toggle, open } = useCollapse();

  useEffect(() => {
    if (values.name && values.recipientPublicKey) {
      if (!errors.name && !errors.recipientPublicKey) {
        open();
      }
    }
  }, [open, errors, values]);
  if (!collapsed) {
    return (
      <FileDrop
        values={values}
        title={FILE_UPLOAD_HEADER}
        icon={icon}
        toggle={toggle}
        errors={errors}
        {...rest}
      />
    );
  } else {
    return (
      <CollapsedContainer
        title={FILE_UPLOAD_HEADER}
        icon={icon}
        toggle={toggle}
      />
    );
  }
};

export default UploadContainer;
