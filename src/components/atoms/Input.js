import React from "react";
import { TextField } from "@mui/material";

const Input = (props) => {
  return (
    <TextField
      id="outlined"
      {...props}
      sx={{
        width: { sm: 200, md: 300 },
        "& .MuiInputBase-root": {
          height: 20,
          width: 100,
          fontSize: "12px",
        },
      }}
    />
  );
};

export default Input;
