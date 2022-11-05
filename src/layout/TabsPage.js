import React, { useState } from "react";
import { Box, Tabs, Tab, TextField } from "@mui/material";
import GenericDataGrid from "../components/GenericDataGrid";
import { useTechnicalTest } from "../contexts/technicalTestContexts";

const Main = () => {
  const { countPosts, setCountPosts, countAlbumns, setCountAlbumns } =
    useTechnicalTest();

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

  const handleChangeInput = ({ target }) => {
    const value = target.value;
    setCountPosts(value);
  };

  const handleChangeInput2 = ({ target }) => {
    const value = target.value;
    setCountAlbumns(value);
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
        <GenericDataGrid listKey={"usersList"} />
      </TabPanel>
      <TabPanel value={tabSelected} index={1}>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={countPosts}
          onChange={handleChangeInput}
        />
        <GenericDataGrid listKey={"postsList"} />
      </TabPanel>
      <TabPanel value={tabSelected} index={2}>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={countAlbumns}
          onChange={handleChangeInput2}
        />
        <GenericDataGrid listKey={"albumnsList"} />
      </TabPanel>
    </Box>
  );
};

export default Main;
