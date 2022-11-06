import React from "react";
import { Box, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const GenericDataGrid = (props) => {
  const { ...restProps } = props;

  return (
    <Box
      sx={{
        height: 350,
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
        <Box sx={{ flexGrow: 1, minHeight: 50 }}>
          <DataGrid
            {...restProps}
            rowHeight={25}
            pageSize={15}
            rowsPerPageOptions={[15]}
            disableColumnMenu
            components={{
              NoRowsOverlay: () => (
                <Stack
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  No users
                </Stack>
              ),
            }}
            sx={{ border: 0 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GenericDataGrid;
