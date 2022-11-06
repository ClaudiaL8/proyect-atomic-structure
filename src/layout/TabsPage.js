import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import UsersList from "../components/UsersList";
import PostsList from "../components/PostsList";
import AlbumnsList from "../components//AlbumnsList";

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
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabSelected} onChange={handleChange} centered>
          <Tab label="Users" />
          <Tab label="Posts" />
          <Tab label="Albumns" />
        </Tabs>
      </Box>
      <TabPanel value={tabSelected} index={0}>
        <UsersList />
      </TabPanel>
      <TabPanel value={tabSelected} index={1}>
        <PostsList />
      </TabPanel>
      <TabPanel value={tabSelected} index={2}>
        <AlbumnsList />
      </TabPanel>
    </Box>
  );
};

export default TabsPage;
