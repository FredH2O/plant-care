import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Box,
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "space-between",
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/plantcarelogo.png`}
            alt="Plant Care Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Plant Care
          </Typography>
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{
            display: { xs: "block", sm: "none" },
            mx: "auto",
            alignItems: "center",
            justifyContent: "center",
          }}
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
            Guide
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
          color={isActive("/guide") ? "secondary" : "inherit"}
          component={Link}
          to="/guide"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Guide
        </Button>
        <Button
          color={isActive("/search") ? "secondary" : "inherit"}
          component={Link}
          to="/search"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Search Plant
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
