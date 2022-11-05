import React from "react";
import { Box, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useTechnicalTest } from "../contexts/technicalTestContexts";
import { columns } from "./listsColumns";

const UsersList = (props) => {
  const { listKey } = props;
  const { countPosts, countAlbumns } = useTechnicalTest();

  const renderColumns = columns[listKey];
  let renderRows = useTechnicalTest()[listKey].data;

  if (listKey === "postsList") {
    renderRows = renderRows?.slice(renderRows.length - countPosts);
  } else if (listKey === "albumnsList") {
    renderRows = renderRows?.slice(renderRows.length - countAlbumns);
  }

  return (
    <Box sx={{ height: 350, width: "100%" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ flexGrow: 1, minHeight: 50 }}>
          {renderRows && (
            <DataGrid
              rowHeight={25}
              rows={renderRows}
              columns={renderColumns}
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
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UsersList;
