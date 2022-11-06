import React from "react";
import { Container } from "@mui/material";
import CircularProgress from "../../atoms/CircularProgress";
import Alert from "../../atoms/Alert";
import GenericDataGrid from "./GenericDataGrid";

const ProviderGenericDataGrid = (props) => {
  const {
    data: {
      dataTable: { isLoading, rows, error, ...dataTableRestProps },
      input,
    },
  } = props;

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isLoading && <CircularProgress />}
      {!isLoading && rows && (
        <GenericDataGrid
          input={input}
          dataTable={{ rows: rows, ...dataTableRestProps }}
        />
      )}
      {error && <Alert severity="error" text={error} />}
    </Container>
  );
};

export default ProviderGenericDataGrid;
