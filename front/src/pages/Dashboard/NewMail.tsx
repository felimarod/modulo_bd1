import {
  Autocomplete,
  Box,
  Button,
  Chip,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import InputFileUpload from "../../components/Dashboard/new-mail/InputFileUpload";
import { get } from "../../services/https";
import { Contacto } from "../../entities/contacto";
import { Usuario } from "../../entities/user";
import { useAuth } from "../../context/AuthContext";

const regexCorreo = "([\\w-+]+(?:\\.[\\w-+]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7})";

const NewMail = () => {
  const [destinatariosCC, setDestinatariosCC] = useState("");
  const [destinatariosCCConfirmados, setDestinatariosCCConfirmados] = useState<
    string[]
  >([]);
  const [destinatariosCCO, setDestinatariosCCO] = useState("");
  const [destinatariosCCOConfirmados, setDestinatariosCCOConfirmados] =
    useState<string[]>([]);
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [nomArchivos, setNomArchivos] = useState("");

  const p = new RegExp(regexCorreo);

  const [contactos, setContactos] = useState<Contacto[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const { user } = useAuth();

  // Obtener contactos y/o usuarios
  useEffect(() => {
    if (user) {
      get(`/contacto/usuario/${user?.usuario_}`).then((res) => {
        setContactos(res as Contacto[]);
      });
    }
  }, [user]);

  useEffect(() => {
    get("/usuario/").then((res) => {
      setUsuarios(res as Usuario[]);
    });
  }, []);

  const verificarCampo = (valorCampo: string, campo: "CC" | "CCO") => {
    if (
      p.exec(valorCampo) &&
      !destinatariosCCConfirmados.some(
        (correoConfirmado) => correoConfirmado === valorCampo
      ) &&
      !destinatariosCCOConfirmados.some(
        (correoConfirmado) => correoConfirmado === valorCampo
      )
    ) {
      const correo = valorCampo;
      if (campo === "CC") {
        setDestinatariosCCConfirmados([...destinatariosCCConfirmados, correo]);
        setDestinatariosCC("");
      } else if (campo === "CCO") {
        setDestinatariosCCOConfirmados([
          ...destinatariosCCOConfirmados,
          correo,
        ]);
        setDestinatariosCCO("");
      }
    }
  };

  const handleClickButton = () => {
    const objeto = {
      destinatariosCCConfirmados,
      destinatariosCCOConfirmados,
      asunto,
      mensaje,
      nomArchivos: nomArchivos.split(",").map((nomArchivo) => {
        const separar = nomArchivo.split(".");
        const nombre = separar.slice(0, -1).join(".");
        const extension = separar[separar.length - 1];
        return { nombre, extension };
      }),
    };
    alert(JSON.stringify(objeto));
  };

  return (
    <Box
      sx={{
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        padding: "20px",
      }}
    >
      <Grid2 container spacing={2}>
        <Chip label="Para" variant="filled" />
        <Grid2 size={"grow"}>
          <Grid2 container spacing={2}>
            <Grid2 size={1}>
              <Chip label="CC" variant="outlined" />
            </Grid2>
            <Grid2 size={"grow"}>
              {destinatariosCCConfirmados.length > 0 &&
                destinatariosCCConfirmados.map((val) => (
                  <Chip
                    key={`chip-${val}`}
                    sx={{ marginBottom: "10px", marginRight: "4px" }}
                    label={val}
                    variant="filled"
                    onClick={() => {
                      setDestinatariosCCConfirmados(
                        destinatariosCCConfirmados.filter(
                          (val2) => val2 !== val
                        )
                      );
                    }}
                  />
                ))}
              <Autocomplete
                options={[
                  ...contactos.map((contacto) => contacto.correoContacto),
                  ...usuarios.map((usuario) => usuario.correoAlterno),
                ].filter(
                  (correo) =>
                    !destinatariosCCConfirmados.some((val) => val === correo) &&
                    !destinatariosCCOConfirmados.some((val) => val === correo)
                )}
                onChange={(_, val) => {
                  if (val) verificarCampo(val, "CC");
                }}
                onInputChange={(_, nuevoDestinatario) => {
                  verificarCampo(nuevoDestinatario, "CC");
                }}
                value={destinatariosCC}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    // key={params.InputLabelProps}
                    sx={{ marginBottom: "20px" }}
                    label="Lista de destinatarios"
                  />
                )}
              />
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2}>
            <Grid2 size={1}>
              <Chip label="CCO" variant="outlined" />
            </Grid2>
            <Grid2 size={"grow"}>
              {destinatariosCCOConfirmados.length > 0 &&
                destinatariosCCOConfirmados.map((val) => (
                  <Chip
                    key={`chip-${val}`}
                    sx={{ marginBottom: "10px", marginRight: "4px" }}
                    label={val}
                    variant="filled"
                    onClick={() => {
                      setDestinatariosCCOConfirmados(
                        destinatariosCCOConfirmados.filter(
                          (val2) => val2 !== val
                        )
                      );
                    }}
                  />
                ))}
              <Autocomplete
                options={[
                  ...contactos.map((contacto) => contacto.correoContacto),
                  ...usuarios.map((usuario) => usuario.correoAlterno),
                ].filter(
                  (correo) =>
                    !destinatariosCCConfirmados.some((val) => val === correo) &&
                    !destinatariosCCOConfirmados.some((val) => val === correo)
                )}
                onChange={(_, val) => {
                  if (val) verificarCampo(val, "CCO");
                }}
                onInputChange={(_, nuevoDestinatario) => {
                  verificarCampo(nuevoDestinatario, "CCO");
                }}
                value={destinatariosCCO}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    // key={params.InputLabelProps}
                    sx={{ marginBottom: "20px" }}
                    label="Lista de destinatarios"
                  />
                )}
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <TextField
        id="asunto"
        label="Asunto"
        variant="outlined"
        fullWidth
        value={asunto}
        error={asunto.length === 255}
        helperText={asunto.length === 255 ? "Limite del texto alcanzado" : ""}
        onChange={(ev) => {
          if (ev.currentTarget.value.length <= 255) {
            setAsunto(ev.currentTarget.value);
          }
        }}
      />
      <TextField
        id="mensaje"
        label="Mensaje"
        variant="outlined"
        fullWidth
        rows={3}
        multiline
        value={mensaje}
        error={mensaje.length === 255}
        helperText={mensaje.length === 255 ? "Limite del texto alcanzado" : ""}
        onChange={(ev) => {
          if (ev.currentTarget.value.length <= 255) {
            setMensaje(ev.currentTarget.value);
          }
        }}
      />
      <InputFileUpload
        nombresArchivos={nomArchivos}
        setDirArchivos={setNomArchivos}
      />
      {nomArchivos !== "" && (
        <Typography variant="body1" color="initial">
          {nomArchivos.split(",").length > 1
            ? "Se han cargado los archivos: "
            : "Se ha cargado el archivo: "}
          {nomArchivos.split(",").map((archivo, index) => (
            <>
              <strong
                onClick={() => {
                  // Eliminar archivo de los cargados
                  setNomArchivos(
                    nomArchivos
                      .split(",")
                      .filter(
                        (archivoAComparar) => archivoAComparar !== archivo
                      )
                      .join(",")
                  );
                }}
                style={{ cursor: "pointer" }}
              >
                {archivo}
              </strong>
              {`${index !== nomArchivos.split(",").length - 1 ? ",  " : ""}`}
            </>
          ))}
        </Typography>
      )}
      <Button variant="contained" color="primary" onClick={handleClickButton}>
        Enviar
      </Button>
    </Box>
  );
};

export default NewMail;
