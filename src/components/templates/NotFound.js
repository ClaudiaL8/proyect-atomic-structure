import React from "react";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import Button from "../atoms/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        paddingTop: "26px",
        paddingBottom: "26px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Text
        variant="h5"
        text="No se ha podido encontrar la página."
        color="primary"
      />
      <Button onClick={() => navigate("/")} text="GO BACK TO HOME PAGE" />
    </Container>
  );
};

export default NotFound;
