import React from "react";
import { Typography } from "@mui/material";

const Text = (props) => {
  const { text, ...restProps } = props;

  return (
    <Typography variant="body1" color="primary" {...restProps}>
      {text}
    </Typography>
  );
};

export default Text;
