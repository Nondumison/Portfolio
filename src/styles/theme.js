import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#101361" },
    secondary: { main: "#1B1F3B" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700, color: "#E4E4E4" },
    h2: { fontSize: "2rem", fontWeight: 600, color: "#E4E4E4" },
    h4: { fontSize: "1.5rem", fontWeight: 500, color: "#E4E4E4" },
    body1: { fontSize: "1rem", color: "#AFAFAF" },
  },
});

export default theme;
