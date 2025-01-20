import { Container } from "@mui/material";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <Container
      maxWidth="sm"
      sx={{ mt: 4 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Outlet />
    </Container>
  );
}
