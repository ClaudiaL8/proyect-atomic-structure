import React from "react";
import { InputLabel } from "@mui/material";

const Label = (props) => {
  const { text } = props;

  return <InputLabel>{text}</InputLabel>;
};

export default Label;
