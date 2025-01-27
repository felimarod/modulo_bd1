import {
  Alert,
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";

import Button from "@mui/material/Button";
import { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router";

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [fechaCrecimiento, setFechaCrecimiento] = useState("");
  const [correoAlterno, setCorreoAlterno] = useState("");
  const [celular, setCelular] = useState("0000000000");

  const [triedToRegister, setTriedToLogIn] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const navigate = useNavigate();

  const onClickRegister = async () => {
    setTriedToLogIn(true);
    const res = await axios.post("/api/usuarios/", {
      usuario,
      nombre,
      apellido,
      fechaNacimiento,
      fechaCrecimiento,
      correoAlterno,
      celular,
    });

    if (res.status === 201) {
      setUserCreated(true);
      navigate("/");
    } else {
      setUserCreated(false);
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
      <h1>Registrar usuario</h1>
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
        <InputLabel htmlFor="nombre">Nombre</InputLabel>
        <Input
          id="nombre"
          type="text"
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
          type="text"
          value={apellido}
          onChange={(val) => {
            setApellido(val.target.value);
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="fecha-nacimiento">Fecha de nacimiento</InputLabel>
        <Input
          id="fecha-nacimiento"
          type="date"
          value={fechaNacimiento}
          onChange={(val) => {
            setFechaNacimiento(val.target.value);
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="fecha-crecimiento">
          Fecha de crecimiento
        </InputLabel>
        <Input
          id="fecha-crecimiento"
          type="date"
          value={fechaCrecimiento}
          onChange={(val) => {
            setFechaCrecimiento(val.target.value);
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="correo-alterno">Correo alterno</InputLabel>
        <Input
          id="correo-alterno"
          type="email"
          value={correoAlterno}
          onChange={(val) => {
            setCorreoAlterno(val.target.value);
          }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <InputLabel htmlFor="celular">Celular</InputLabel>
        <Input
          id="celular"
          type="number"
          value={celular}
          onChange={(val) => {
            setCelular(val.target.value);
          }}
        />
      </FormControl>

      <Button variant="contained" color="primary" onClick={onClickRegister}>
        Registrar usuario
      </Button>

      <span>
        <Link to="/login">Ya tengo un usuario</Link>
      </span>

      {triedToRegister && userCreated && (
        <Alert severity="success">Usuario registrado exitosamente</Alert>
      )}
      {triedToRegister && !userCreated && (
        <Alert severity="error">
          El usuario ya esta registrado, ingrese otro
        </Alert>
      )}
    </Container>
  );
}
