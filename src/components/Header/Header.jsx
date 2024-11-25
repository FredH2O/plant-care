import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Plant Care
        </Typography>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/plant-care">
            Plant Guide
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/about">
            About
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/contact">
            Contact
          </MenuItem>
        </Menu>

        <Button
          color={isActive("/") ? "secondary" : "inherit"}
          component={Link}
          to="/"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Home
        </Button>
        <Button
          color={isActive("/plant-care") ? "secondary" : "inherit"}
          component={Link}
          to="/plant-care"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Plant Care
        </Button>
        <Button
          color={isActive("/about") ? "secondary" : "inherit"}
          component={Link}
          to="/about"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          About
        </Button>
        <Button
          color={isActive("/contact") ? "secondary" : "inherit"}
          component={Link}
          to="/contact"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}