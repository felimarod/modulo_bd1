import { Box, Button, Chip, Grid2, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { MensajeDTO } from "../../entities/DTO/MailDTO";
import { AccionMensaje } from "../../entities/AccionMensaje";
import { InfoMensajeLS } from "../../entities/InfoMensajeLS";

const Mail = () => {
  const { idMensaje } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [infoMensaje, setInfoMensaje] = useState<MensajeDTO | undefined>();

  useEffect(() => {
    if (idMensaje) {
      // Load and set info
      axios.get(`/api/mensaje/info/${idMensaje}`).then((res) => {
        setInfoMensaje(res.data as MensajeDTO);
      });
    }
  }, [idMensaje]);

  const guardarInfoMensajeEnMemoria = (accion: AccionMensaje) => {
    const infoAGuardar: InfoMensajeLS = {
      infoMensaje: infoMensaje!,
      accion,
    };
    localStorage.setItem("infomensaje", JSON.stringify(infoAGuardar));
    navigate("/dashboard/new-mail");
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
        <Chip label="De" variant="filled" />
        <Grid2 size={"grow"}>
          <Grid2 container spacing={2}>
            <Grid2 size={"grow"}>
              <Chip
                key={`chip-${infoMensaje?.remitente}`}
                sx={{ marginBottom: "10px", marginRight: "4px" }}
                label={infoMensaje?.remitente}
                variant="outlined"
              />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2}>
        <Chip label="Para" variant="filled" />
        <Grid2 size={"grow"}>
          <Grid2 container spacing={2}>
            <Grid2 size={1}>
              <Chip
                label="CC"
                variant="outlined"
                sx={{ marginBottom: "10px", marginRight: "4px" }}
              />
            </Grid2>
            <Grid2 size={"grow"}>
              {infoMensaje !== undefined &&
                infoMensaje?.destinatariosCC.length > 0 &&
                infoMensaje?.destinatariosCC.map((val) => (
                  <Chip key={`chip-${val}`} label={val} variant="outlined" />
                ))}
            </Grid2>
          </Grid2>
          {(infoMensaje?.remitente === `${user?.nombre} ${user?.apellido}` ||
            infoMensaje?.destinatariosCCO.some((val) => {
              return val === `${user?.nombre} ${user?.apellido}`;
            })) && (
            <Grid2 container spacing={2}>
              <Grid2 size={1}>
                <Chip label="CCO" variant="outlined" />
              </Grid2>
              <Grid2 size={"grow"}>
                {infoMensaje !== undefined &&
                infoMensaje?.destinatariosCCO.length > 0 &&
                infoMensaje?.remitente ===
                  `${user?.nombre} ${user?.apellido}` ? (
                  infoMensaje?.destinatariosCCO.map((val) => (
                    <Chip key={`chip-${val}`} label={val} variant="outlined" />
                  ))
                ) : (
                  <Chip
                    key={`chip-${user?.nombre} ${user?.apellido}`}
                    label={`${user?.nombre} ${user?.apellido}`}
                    variant="outlined"
                  />
                )}
              </Grid2>
            </Grid2>
          )}
        </Grid2>
      </Grid2>
      <TextField
        id="asunto"
        label="Asunto"
        variant="outlined"
        fullWidth
        disabled
        value={infoMensaje !== undefined ? infoMensaje.asunto : ""}
      />
      <TextField
        id="mensaje"
        label="Mensaje"
        variant="outlined"
        fullWidth
        disabled
        rows={3}
        multiline
        value={infoMensaje !== undefined ? infoMensaje.cuerpoMensaje : ""}
      />

      {infoMensaje !== undefined &&
        infoMensaje.archivos !== undefined &&
        infoMensaje.archivos.length > 0 && (
          <Typography variant="body1" color="initial">
            {infoMensaje.archivos.length > 1
              ? "Se han cargado los archivos: "
              : "Se ha cargado el archivo: "}
            <strong>
              {infoMensaje.archivos
                .map((val) => `${val.nombre}.${val.extension}`)
                .join(",")}
            </strong>
          </Typography>
        )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          guardarInfoMensajeEnMemoria("Reenviar");
        }}
      >
        Reenviar
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          guardarInfoMensajeEnMemoria("Responder");
        }}
      >
        Responder
      </Button>
    </Box>
  );
};

export default Mail;
