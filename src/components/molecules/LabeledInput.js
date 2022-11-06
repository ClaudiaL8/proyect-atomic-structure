import React from "react";
import { Box } from "@mui/material";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

const LabeledInput = (props) => {
  const { input } = props;
  const { label, ...restProps } = input;

  return (
    <Box>
      <Label text={label} />
      <Input {...restProps} />
    </Box>
  );
};

export default LabeledInput;
