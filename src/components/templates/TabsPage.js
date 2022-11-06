import React, { useState } from "react";
import { Box, Tabs, Tab, Container } from "@mui/material";
import { PostsTable, AlbumnsTable, UsersTable } from "../organisms";

const TabsPage = () => {
  const [tabSelected, setTabSelected] = useState(0);

  const TabPanel = (props) => {
    const { children, value, index } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  const handleChange = (event, newValue) => {
    setTabSelected(newValue);
  };

  return (
    <Container
      sx={{
        paddingLeft: 20,
        paddingRigth: 20,
        height: "100%",
      }}
    >
      <Box sx={{ borderBottom: 1 }}>
        <Tabs value={tabSelected} onChange={handleChange} centered>
          <Tab label="Users" />
          <Tab label="Posts" />
          <Tab label="Albumns" />
        </Tabs>
      </Box>
      <TabPanel value={tabSelected} index={0}>
        <UsersTable />
      </TabPanel>
      <TabPanel value={tabSelected} index={1}>
        <PostsTable />
      </TabPanel>
      <TabPanel value={tabSelected} index={2}>
        <AlbumnsTable />
      </TabPanel>
    </Container>
  );
};

export default TabsPage;
