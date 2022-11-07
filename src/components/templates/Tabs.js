import React, { useState } from "react";
import { Box, Tabs as MaterialTabs, Tab, Container } from "@mui/material";
import { PostsTable, AlbumnsTable, UsersTable } from "../organisms/tables";
import Text from "../atoms/Text";

const Tabs = () => {
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
      <Box
        sx={{
          marginBottom: "20px",
        }}
      >
        <Text variant="h1" text="Descubre los usuarios" />
        <Text
          variant="body1"
          text="Selecciona la tabla y encuentra toda la información"
        />
      </Box>
      <Box sx={{ borderBottom: 1 }}>
        <MaterialTabs value={tabSelected} onChange={handleChange} centered>
          <Tab label="Users" />
          <Tab label="Posts" />
          <Tab label="Albumns" />
        </MaterialTabs>
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

export default Tabs;
