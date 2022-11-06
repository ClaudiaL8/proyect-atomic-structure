import React from "react";
import { TextField } from "@mui/material";

const NumberInput = (props) => {
  const { ...restProps } = props;

  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      {...restProps}
    />
  );
};

export default NumberInput;
