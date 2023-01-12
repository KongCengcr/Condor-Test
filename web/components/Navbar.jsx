import React, { useState, useContext } from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";

import logo from "../logo.png";

import { AuthContext } from "../context/AuthContext";

const pages = ["Search", "Profile"];

const Logo = styled.img`
  height: 30px;
`;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { currentUser, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/Login");
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Button component={Link} to="/">
              <Logo src={logo} alt="Logo!" />
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={`/${page}`}
                    style={{ textTransform: "none" }}
                    sx={{ color: "grey", display: "block" }}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Logo src={logo} alt="Logo!" />
          </Box>
          {currentUser ? (
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                key="Search"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/Search"
                style={{ textTransform: "none" }}
                sx={{ my: 2, color: "grey", display: "block" }}
              >
                Search
              </Button>
              <Button
                key="Profile"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/Profile"
                style={{ textTransform: "none" }}
                sx={{ my: 2, color: "grey", display: "block" }}
              >
                Profile
              </Button>
              <Button
                onClick={handleLogout}
                style={{ textTransform: "none" }}
                sx={{ my: 2, color: "grey", display: "block" }}
              >
                Logout
              </Button>
              <Button
                style={{ textTransform: "none" }}
                sx={{ my: 2, color: "grey", display: "block" }}
              >
                {currentUser.name}
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                key="Search"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/Search"
                style={{ textTransform: "none" }}
                sx={{ my: 2, color: "grey", display: "block" }}
              >
                Search
              </Button>
              <Button
                key="Login"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/Login"
                style={{ textTransform: "none" }}
                sx={{ my: 2, color: "grey", display: "block" }}
              >
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
