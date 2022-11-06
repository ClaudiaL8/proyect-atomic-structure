import React from "react";
import { Container, Typography } from "@mui/material";
import ComponentCircularProgress from "./CircularProgress";
import GenericDataGrid from "./GenericDataGrid";

const ProviderGenericDataGrid = (props) => {
  const { isLoading, data, error, children, ...restProps } = props;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isLoading && <ComponentCircularProgress />}
      {!isLoading && data && (
        <>
          {children}
          <GenericDataGrid rows={data} {...restProps} />
        </>
      )}
      {error && <Typography>{error}</Typography>}
    </Container>
  );
};

export default ProviderGenericDataGrid;
