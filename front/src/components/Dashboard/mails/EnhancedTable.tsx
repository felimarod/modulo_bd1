import { styled, TableRow } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";
import { ChangeEvent, MouseEvent, useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { crearMensaje, Mensaje } from "../../../entities/mail";
import EnhancedTableHead, { HeadCell, Order } from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof Mensaje>(
  order: Order,
  orderBy: Key
): (a: Mensaje, b: Mensaje) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

type MensajeDTO = {
  idMensaje: string;
  remitente: string;
  asunto: string;
  fecha: string;
};

export default function EnhancedTable({ carpeta }: { carpeta: string }) {
  const [order, setOrder] = useState<Order>("desc");
  const [orderBy, setOrderBy] = useState<keyof Mensaje>("fecha");
  const [selected, setSelected] = useState<readonly number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const headCells: HeadCell[] = [];

  const [rows, setRows] = useState<Mensaje[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    switch (carpeta) {
      case "recibido":
        axios
          .get(`/api/mensaje/recibido/${user?.usuario_}`)
          .then((res) => {
            if (res.status === 200) {
              const datosUsuario = res.data;
              setRows(
                datosUsuario.map((val: MensajeDTO) => {
                  return crearMensaje(
                    val.idMensaje,
                    val.remitente,
                    val.asunto,
                    val.fecha
                  );
                })
              );
            }
          })
          .catch((error) => {
            console.error(error);
          });
        break;
      case "borrador":
        console.log("Borradoooo");
        setRows([]);
        break;
      case "enviado":
        console.log("Enviadoooo");
        setRows([]);
        break;
    }
  }, [carpeta]);

  switch (carpeta.toLocaleLowerCase()) {
    case "enviado":
      headCells.push({
        id: "asunto",
        label: "Asunto",
      });
      headCells.push({
        id: "remitentesCO",
        label: "CO",
      });
      headCells.push({
        id: "remitentesCCO",
        label: "CCO",
      });
      break;
    case "borrador":
      headCells.push({
        id: "asunto",
        label: "Asunto",
      });
      headCells.push({
        id: "remitentesCO",
        label: "CO",
      });
      break;
    default:
      headCells.push({
        id: "remitentesCO",
        label: "Remitente",
      });
      headCells.push({
        id: "asunto",
        label: "Asunto",
      });
      headCells.push({
        id: "fecha",
        label: "Fecha",
      });
      break;
  }

  const handleRequestSort = (
    _: MouseEvent<unknown>,
    property: keyof Mensaje
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => parseInt(n.id.slice(1), 10));
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_: MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          title={carpeta.toLocaleUpperCase()}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(
                  parseInt(row.id.slice(1), 10)
                );
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <StyledTableRow
                    hover
                    onClick={(event) =>
                      handleClick(event, parseInt(row.id.slice(1), 10))
                    }
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    {carpeta.toLocaleLowerCase() === "enviado" && (
                      <TableCell component="th" id={labelId} scope="row">
                        {row.asunto}
                      </TableCell>
                    )}
                    {carpeta.toLocaleLowerCase() === "enviado" && (
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="right"
                      >
                        {row.remitentesCO}
                      </TableCell>
                    )}
                    {carpeta.toLocaleLowerCase() === "enviado" && (
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="left"
                      >
                        {row.remitentesCO}
                      </TableCell>
                    )}
                    {carpeta.toLocaleLowerCase() === "borrador" && (
                      <TableCell component="th" id={labelId} scope="row">
                        {row.asunto}
                      </TableCell>
                    )}
                    {carpeta.toLocaleLowerCase() === "borrador" && (
                      <TableCell component="th" id={labelId} scope="row">
                        {row.remitentesCO}
                      </TableCell>
                    )}
                    {carpeta.toLocaleLowerCase() !== "enviado" &&
                      carpeta.toLocaleLowerCase() !== "borrador" && (
                        <TableCell component="th" id={labelId} scope="row">
                          {row.remitentesCO}
                        </TableCell>
                      )}
                    {carpeta.toLocaleLowerCase() !== "enviado" &&
                      carpeta.toLocaleLowerCase() !== "borrador" && (
                        <TableCell align="left">{row.asunto}</TableCell>
                      )}
                    {carpeta.toLocaleLowerCase() !== "enviado" &&
                      carpeta.toLocaleLowerCase() !== "borrador" && (
                        <TableCell align="right">{row.fecha}</TableCell>
                      )}
                  </StyledTableRow>
                );
              })}
              {emptyRows > 0 && (
                <StyledTableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="Correos por pagina"
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
