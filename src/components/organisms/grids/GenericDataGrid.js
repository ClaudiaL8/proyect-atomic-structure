import React from "react";
import { Box, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import LabeledInput from "../../molecules/LabeledInput";

const GenericDataGrid = (props) => {
  const { input, dataTable } = props;

  return (
    <Box>
      {input && <LabeledInput input={input} />}
      <Box sx={{ height: 500, width: 1000, marginTop: !input && "39.71px" }}>
        <Box sx={{ display: "flex", height: "100%" }}>
          <Box sx={{ flexGrow: 1 }}>
            <DataGrid
              {...dataTable}
              rowHeight={30}
              pageSize={20}
              rowsPerPageOptions={[15]}
              disableColumnMenu
              components={{
                NoRowsOverlay: () => (
                  <Stack
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                  >
                    No rows
                  </Stack>
                ),
              }}
              sx={{ border: 0 }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GenericDataGrid;
