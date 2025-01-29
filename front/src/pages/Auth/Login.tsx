import {
  Alert,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [showFirstName, setShowFirstName] = useState(false);
  const [showLastName, setShowLastName] = useState(false);
  const handleClickShowFirstName = () => setShowFirstName((show) => !show);
  const handleClickShowLastName = () => setShowLastName((show) => !show);
  const { isAuthenticated, login, logout } = useAuth();
  const [triedToLogIn, setTriedToLogIn] = useState(false);

  const navigate = useNavigate();
  const irALaPaginaPrincipal = () => {
    navigate("/dashboard/mails/recibidos");
  };

  useEffect(() => {
    if (isAuthenticated) {
      irALaPaginaPrincipal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const onClickLogIn = async () => {
    setTriedToLogIn(true);
    try {
      const res = await axios.put("/api/empleados/verificar/", {
        user_id: userName,
        first_name,
        last_name,
      });
      if (res.status === 200) {
        const datosUsuario = res.data;
        login({
          data: JSON.stringify(datosUsuario),
          name: `${datosUsuario.first_name} ${datosUsuario.last_name}`,
        });
        irALaPaginaPrincipal();
      } else {
        logout();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 4 }}
      component="form"
      autoComplete="off"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
        padding: "20px",
        borderRadius: "10px",
        gap: "10px",
      }}
    >
      <Typography variant="h4" component="h1">
        Inicio de sesión
      </Typography>
      <FormControl variant="standard">
        <InputLabel htmlFor="usuario">Usuario</InputLabel>
        <Input
          id="usuario"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          value={userName}
          onChange={(val) => {
            setUserName(val.target.value);
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="first-name">Nombre</InputLabel>
        <Input
          id="first-name"
          type={showFirstName ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showFirstName ? "ocultar el nombre" : "mostrar el nombre"
                }
                onClick={handleClickShowFirstName}
              >
                {showFirstName ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          value={first_name}
          onChange={(val) => {
            setFirstName(val.target.value);
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="last-name">Apellido</InputLabel>
        <Input
          id="last-name"
          type={showLastName ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showLastName ? "ocultar el nombre" : "mostrar el nombre"
                }
                onClick={handleClickShowLastName}
              >
                {showLastName ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          value={last_name}
          onChange={(val) => {
            setLastName(val.target.value);
          }}
        />
      </FormControl>

      <Button variant="contained" color="primary" onClick={onClickLogIn}>
        Iniciar sesión
      </Button>

      <Typography variant="subtitle1">
        ¿No tienes un usuario? <Link to="/auth/register">Registrate</Link>
      </Typography>

      {triedToLogIn && isAuthenticated && (
        <Alert severity="success">Inicio de sesión exitoso</Alert>
      )}
      {triedToLogIn && !isAuthenticated && (
        <Alert severity="error">Inicio de sesión fallido</Alert>
      )}
    </Container>
  );
}
