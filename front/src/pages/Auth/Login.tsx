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
import { crearUsuario } from "../../entities/user";

export default function Login() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mostrarNombre, setMostrarNombre] = useState(false);
  const [mostrarApellido, setMostrarApellido] = useState(false);
  const handleClickShowFirstName = () =>
    setMostrarNombre((mostrar) => !mostrar);
  const handleClickShowLastName = () =>
    setMostrarApellido((mostrar) => !mostrar);
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
      const res = await axios.put("/api/usuario/verificar/", {
        usuario: nombreUsuario,
        nombre,
        apellido,
      });
      if (res.status === 200) {
        const datosUsuario = res.data;
        console.log(datosUsuario);
        login(
          crearUsuario(
            datosUsuario["usuario_"] as string,
            datosUsuario["nombre"] as string,
            datosUsuario["apellido"] as string,
            datosUsuario["fechaNacimiento"] as string,
            datosUsuario["fechaCreacion"] as string,
            datosUsuario["correoAlterno"] as string,
            datosUsuario["celular"] as string,
            datosUsuario["idEstado"] as string,
            datosUsuario["idPais"] as string
          )
        );
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
          value={nombreUsuario}
          onChange={(val) => {
            setNombreUsuario(val.target.value);
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="first-name">Nombre</InputLabel>
        <Input
          id="first-name"
          type={mostrarNombre ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  mostrarNombre ? "ocultar el nombre" : "mostrar el nombre"
                }
                onClick={handleClickShowFirstName}
              >
                {mostrarNombre ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          value={nombre}
          onChange={(val) => {
            setNombre(val.target.value);
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="last-name">Apellido</InputLabel>
        <Input
          id="last-name"
          type={mostrarApellido ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  mostrarApellido ? "ocultar el nombre" : "mostrar el nombre"
                }
                onClick={handleClickShowLastName}
              >
                {mostrarApellido ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          value={apellido}
          onChange={(val) => {
            setApellido(val.target.value);
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
