import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { TechnicalTestContextProvider } from "./contexts/technicalTestContexts";
import Main from "./layout/TabsPage";

const theme = createTheme({
  typography: {
    fontFamily: ["Titillium Web", "Roboto", "Helvetica", "sans-serif"].join(
      ","
    ),
    fontWeightRegular: 600,
  },
  palette: {
    primary: {
      main: "#ef0c3d",
    },
    secondary: {
      main: "#1f383f",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack height="100%">
        <TechnicalTestContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </Router>
        </TechnicalTestContextProvider>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
