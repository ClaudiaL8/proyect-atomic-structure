import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { TechnicalTestContextProvider } from "./contexts/technicalTestContexts";
import TabsPage from "./components/pages/TabsPages";
import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";
import PageNotFound from "./components/pages/NotFoundPage";

const theme = createTheme({
  typography: {
    fontFamily: ["Merriweather", "sans-serif"].join(","),
    fontWeightRegular: 400,
    fontSize: 16,
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
      <Stack justifyContent={"space-between"} height="100%">
        <TechnicalTestContextProvider>
          <Header />
          <Router>
            <Routes>
              <Route path="/" element={<TabsPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
          <Footer />
        </TechnicalTestContextProvider>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
