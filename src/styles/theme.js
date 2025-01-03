import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#663187" },
    secondary: { main: "#11273d" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
  },
});

export default theme;
