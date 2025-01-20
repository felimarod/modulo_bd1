import {
  Alert,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Button from "@mui/material/Button";
import { useState } from "react";

import axios from "axios";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [showFirstName, setShowFirstName] = useState(false);
  const [showLastName, setShowLastName] = useState(false);
  const handleClickShowFirstName = () => setShowFirstName((show) => !show);
  const handleClickShowLastName = () => setShowLastName((show) => !show);
  const [loggedIn, setLoggedIn] = useState(false);
  const [triedToLogIn, setTriedToLogIn] = useState(false);

  const onClickLogIn = async () => {
    setTriedToLogIn(true);
    const res = await axios.put("/api/empleados/verificar/", {
      user_id: usuario,
      first_name,
      last_name,
    });

    if (res.status === 200) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
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
      <h1>Inicio de sesión</h1>
      <FormControl variant="standard">
        <InputLabel htmlFor="usuario">Usuario</InputLabel>
        <Input
          id="usuario"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          value={usuario}
          onChange={(val) => {
            setUsuario(val.target.value);
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

      {triedToLogIn && loggedIn && <Alert severity="success">Inicio de sesión exitoso</Alert>}
      {triedToLogIn && !loggedIn && <Alert severity="error">Inicio de sesión fallido</Alert>}
    </Container>
  );
}
