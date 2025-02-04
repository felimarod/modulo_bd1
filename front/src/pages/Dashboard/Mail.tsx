import { Box, Button, Chip, Grid2, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MensajeDTO } from "../../entities/DTO/MailDTO";

const Mail = () => {
  const { idMensaje } = useParams();

  const [cuerpoData, setInfoMensaje] = useState<MensajeDTO | undefined>();

  useEffect(() => {
    if (idMensaje) {
      // Load and set info
      setInfoMensaje({
        destinatariosCC: ["Alejo.usuario@bd.edu.co"],
        destinatariosCCO: ["JLope.usuario@bd.edu.co"],
        asunto: "afad",
        cuerpoMensaje: "adfadfadfadadfadfadfad",
        archivos: [{ nombre: "Cuenta de Cobro Noviembre-2", extension: "pdf" }],
      });
    }
  }, []);

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
              {cuerpoData !== undefined &&
                cuerpoData?.destinatariosCC.length > 0 &&
                cuerpoData?.destinatariosCC.map((val) => (
                  <Chip
                    key={`chip-${val}`}
                    sx={{ marginBottom: "10px", marginRight: "4px" }}
                    label={val}
                    variant="filled"
                  />
                ))}
            </Grid2>
          </Grid2>
          <Grid2 container spacing={2}>
            <Grid2 size={1}>
              <Chip label="CCO" variant="outlined" />
            </Grid2>
            <Grid2 size={"grow"}>
              {cuerpoData !== undefined &&
                cuerpoData?.destinatariosCCO.length > 0 &&
                cuerpoData?.destinatariosCCO.map((val) => (
                  <Chip
                    key={`chip-${val}`}
                    sx={{ marginBottom: "10px", marginRight: "4px" }}
                    label={val}
                    variant="filled"
                  />
                ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <TextField
        id="asunto"
        label="Asunto"
        variant="outlined"
        fullWidth
        disabled
        value={cuerpoData !== undefined ? cuerpoData.asunto : ""}
      />
      <TextField
        id="mensaje"
        label="Mensaje"
        variant="outlined"
        fullWidth
        disabled
        rows={3}
        multiline
        value={cuerpoData !== undefined ? cuerpoData.cuerpoMensaje : ""}
      />

      {cuerpoData !== undefined && cuerpoData.archivos.length > 0 && (
        <Typography variant="body1" color="initial">
          {cuerpoData.archivos.length > 1
            ? "Se han cargado los archivos: "
            : "Se ha cargado el archivo: "}
          <strong>
            {cuerpoData.archivos
              .map((val) => `${val.nombre}.${val.extension}`)
              .join(",")}
          </strong>
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("hola mundo desde boton");
        }}
      >
        Reenviar
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log("hola mundo desde boton");
        }}
      >
        responder
      </Button>
    </Box>
  );
};

export default Mail;
