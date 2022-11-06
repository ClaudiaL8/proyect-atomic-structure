import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { TechnicalTestContextProvider } from "./contexts/technicalTestContexts";
import Main from "./layout/TabsPage";

const theme = createTheme({
  typography: {
    fontFamily: ["Merriweather", "sans-serif"].join(","),
    fontWeightRegular: 400,
  },
  palette: {
    primary: {
      main: "#423df4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box height="100%">
        <TechnicalTestContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </Router>
        </TechnicalTestContextProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
