import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "40px",
        backgroundColor: theme.palette.primary.main,
      }}
    />
  );
};

export default Header;
