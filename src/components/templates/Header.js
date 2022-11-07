import React from "react";
import { Box, CardMedia } from "@mui/material";
import logo from "../../images/logoblue.png";

const Header = () => {
  const image = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Box
      sx={{
        height: "30px",
        padding: "10px 20px",
      }}
    >
      <CardMedia
        component="img"
        image={logo}
        alt={"Tappx logo"}
        sx={{ height: "35px", width: "119.81px" }}
        style={{ image }}
      />
    </Box>
  );
};

export default Header;
