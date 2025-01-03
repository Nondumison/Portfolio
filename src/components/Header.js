import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ toggleTheme }) => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Nondumiso Nkosi
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/projects">
        Projects
      </Button>
      <Button color="inherit" component={Link} to="/skills">
        Skills
      </Button>
      <Box sx={{ ml: 2 }}>
        <DarkModeToggle toggleTheme={toggleTheme} />
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
