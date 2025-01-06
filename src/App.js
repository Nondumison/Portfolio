import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

import theme from "./styles/theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const themeMode = createTheme({
    ...theme,
    palette: {
      ...theme.palette,
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Router>
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
