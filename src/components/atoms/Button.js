import React from "react";
import { Button } from "@mui/material";

const ButtonComponent = (props) => {
  const { text, ...restProps } = props;

  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ marginTop: 5, fontSize: "12px", fontWeight: 700 }}
      {...restProps}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
