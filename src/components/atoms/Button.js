import React from "react";
import { Button } from "@mui/material";

const ButtonComponent = (props) => {
  const { text, ...restProps } = props;

  return <Button {...restProps}>{text}</Button>;
};

export default ButtonComponent;
