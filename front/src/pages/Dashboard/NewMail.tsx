import { Box, Button, Chip, Grid2, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import InputFileUpload from "../../components/Dashboard/new-mail/InputFileUpload";

const regexCorreo = "([\\w-+]+(?:\\.[\\w-+]+)*@(?:[\\w-]+\\.)+[a-zA-Z]{2,7}),";

const NewMail = () => {
  const [destinatariosCC, setDestinatariosCC] = useState("");
  const [destinatariosCCConfirmados, setDestinatariosCCConfirmados] = useState<
    [] | string[]
  >([]);
  const [destinatariosCCO, setDestinatariosCCO] = useState("");
  const [destinatariosCCOConfirmados, setDestinatariosCCOConfirmados] =
    useState<[] | string[]>([]);
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [nomArchivos, setNomArchivos] = useState("");
  const p = new RegExp(regexCorreo);
  useEffect(() => {
    if (p.exec(destinatariosCC)) {
      const correos = destinatariosCC.split(",");
      setDestinatariosCCConfirmados([
        ...destinatariosCCConfirmados,
        correos[0],
      ]);
      setDestinatariosCC(correos[1]);
    }
  }, [destinatariosCC]);

  useEffect(() => {
    if (p.exec(destinatariosCCO)) {
      const correos = destinatariosCCO.split(",");
      setDestinatariosCCOConfirmados([
        ...destinatariosCCOConfirmados,
        correos[0],
      ]);
      setDestinatariosCCO(correos[1]);
    }
  }, [destinatariosCCO]);

  const handleClickButton = () => {
    const objeto = {
      destinatariosCC,
      destinatariosCCO,
      asunto,
      mensaje,
      nomArchivos,
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
                    sx={{ marginBottom: "10px", marginRight: "4px" }}
                    label={val}
                    variant="filled"
                    onClick={() => {
                      setDestinatariosCC(val);
                      setDestinatariosCCConfirmados(
                        destinatariosCCConfirmados.filter(
                          (val2) => val2 !== val
                        )
                      );
                    }}
                  />
                ))}
              <TextField
                id="CC"
                sx={{ marginBottom: "20px" }}
                label="Lista de destinatarios"
                fullWidth
                value={destinatariosCC}
                onChange={(ev) => {
                  setDestinatariosCC(ev.currentTarget.value);
                }}
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
                    sx={{ marginBottom: "10px", marginRight: "4px" }}
                    label={val}
                    variant="filled"
                    onClick={() => {
                      setDestinatariosCCO(val);
                      setDestinatariosCCOConfirmados(
                        destinatariosCCOConfirmados.filter(
                          (val2) => val2 !== val
                        )
                      );
                    }}
                  />
                ))}
              <TextField
                id="CCO"
                label="Lista de destinatarios"
                fullWidth
                value={destinatariosCCO}
                onChange={(ev) => {
                  setDestinatariosCCO(ev.currentTarget.value);
                }}
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
        onChange={(ev) => {
          setAsunto(ev.currentTarget.value);
        }}
      />
      <TextField
        id="mensaje"
        label="Mensaje"
        variant="outlined"
        fullWidth
        rows={8}
        multiline
        value={mensaje}
        onChange={(ev) => {
          setMensaje(ev.currentTarget.value);
        }}
      />
      <InputFileUpload setDirArchivos={setNomArchivos} />
      {nomArchivos !== "" && (
        <Typography variant="body1" color="initial">
          {nomArchivos.split(",").length > 1
            ? "Se han cargado los archivos: "
            : "Se ha cargado el archivo: "}
          <strong>{nomArchivos}</strong>
        </Typography>
      )}
      <Button variant="contained" color="primary" onClick={handleClickButton}>
        Enviar
      </Button>
    </Box>
  );
};

export default NewMail;
