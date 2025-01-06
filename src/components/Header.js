import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ toggleTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          🌸 NN
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={handleMenuClose}
                  component="a"
                  href={item.href}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            {menuItems.map((item) => (
              <Button key={item.label} color="inherit" href={item.href}>
                {item.label}
              </Button>
            ))}
            <Box sx={{ ml: 2 }}>
              <DarkModeToggle toggleTheme={toggleTheme} />
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
