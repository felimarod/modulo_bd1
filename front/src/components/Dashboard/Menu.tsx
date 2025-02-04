import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { TipoCarpeta } from "../../entities/tipoCarpeta";
import { get } from "../../services/https";
import NestedList from "./NestedList";
import { Categoria } from "../../entities/categoria";

export default function Menu() {
  const navigate = useNavigate();

  const [carpetas, setCarpetas] = useState<string[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);

  useEffect(() => {
    get("/tipoCarpeta/")
      .then((res) => {
        setCarpetas(
          (res as TipoCarpeta[]).map(
            (tipoCarpeta) => tipoCarpeta.descTipoCarpeta
          )
        );
      })
      .catch((reason) => {
        console.error(reason);
      });
    get("/categoria/")
      .then((res) => {
        setCategorias(
          (res as Categoria[]).map((categoria) => categoria.desCategoria)
        );
      })
      .catch((reason) => {
        console.error(reason);
      });
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
