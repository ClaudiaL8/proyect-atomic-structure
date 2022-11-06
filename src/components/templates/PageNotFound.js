import React from "react";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

const PageNotFound = () => {
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
      <Paragraph
        variant="h5"
        text="No se ha podido encontrar la página."
        color="primary"
      />
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        color="primary"
        sx={{ marginTop: 5, fontSize: "12px", fontWeight: 700 }}
        text="GO BACK TO HOME PAGE"
      />
    </Container>
  );
};

export default PageNotFound;
