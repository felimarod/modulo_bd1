import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import NestedList from "./NestedList";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { TipoCarpeta } from "../../entities/tipoCarpeta";

export default function Menu() {
  const navigate = useNavigate();

  const [carpetas, setCarpetas] = useState<string[]>([]);
  const categorias = [
    "Principal",
    "Promoción",
    "Social",
    "Notificación",
    "Foro",
    "Importante",
    "Spam",
    "Papelera",
  ];

  useEffect(() => {
    try {
      axios.get("/api/tipoCarpeta/").then((res) => {
        if (res.status === 200) {
          setCarpetas(
            (res.data as TipoCarpeta[]).map(
              (tipoCarpeta) => tipoCarpeta.descTipoCarpeta
            )
          );
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Box
      sx={{
        p: 0,
        width: "100%",
        maxWidth: 360,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Button
        sx={{
          display: "flex",
          margin: "auto",
          marginTop: 2,
          marginBottom: 2,
        }}
        size="small"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {
          navigate(`/dashboard/new-mail`);
        }}
      >
        Nuevo Correo
      </Button>
      <Divider />
      <NestedList title="Carpetas" items={carpetas} />
      <Divider />
      <NestedList title="Categorias" items={categorias} />
    </Box>
  );
}
