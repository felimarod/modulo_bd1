import Logout from "@mui/icons-material/Logout";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
import { Divider, ListItemIcon } from "@mui/material";
import NavBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import DateTimeDisplay from "./DateTimeDisplay";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Bar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElUser);
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogoutOption = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <NavBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/dashboard/emails"
            sx={{
              mr: 2,
              flexGrow: 1,
              // display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BD.edu.co
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <DateTimeDisplay />
            {user !== undefined && (
              <Tooltip title="Opciones de usuario">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar>{user?.nombre.slice(0, 1).toUpperCase()}</Avatar>
                </IconButton>
              </Tooltip>
            )}
            <Menu
              anchorEl={anchorElUser}
              id="account-menu"
              open={open}
              onClose={handleCloseUserMenu}
              onClick={handleCloseUserMenu}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Avatar /> {`${user?.nombre} ${user?.apellido}`}
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogoutOption}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Cerrar Sesión
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </NavBar>
  );
}
export default Bar;
