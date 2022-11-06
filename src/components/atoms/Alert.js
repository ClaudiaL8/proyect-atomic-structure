import React from "react";
import { Alert } from "@mui/material";

const AlertComponent = (props) => {
  const { text, ...restProps } = props;

  return <Alert {...restProps}>{text}</Alert>;
};

export default AlertComponent;
