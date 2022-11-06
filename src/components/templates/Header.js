import React from "react";
import { Box, CardMedia } from "@mui/material";
import logo from "../../images/logoblue.png";

const Header = () => {
  const image = {
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const imageWrapper = {
    overflow: "hidden",
    paddingBottom: "90%",
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
      <Box style={{ imageWrapper }}>
        <CardMedia
          component="img"
          image={logo}
          alt={"Tappx logo"}
          sx={{ maxHeight: "30px", width: "119.81px" }}
          style={{ image }}
        />
      </Box>
    </Box>
  );
};

export default Header;
