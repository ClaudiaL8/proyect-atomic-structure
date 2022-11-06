import React from "react";
import { Typography } from "@mui/material";

const Paragraph = (props) => {
  const { text, ...restProps } = props;

  return <Typography {...restProps}>{text}</Typography>;
};

export default Paragraph;
