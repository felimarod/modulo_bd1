import { Box, Grid2 } from "@mui/material";
import { Outlet } from "react-router";
import Bar from "../components/Dashboard/Bar";
import Menu from "../components/Dashboard/Menu";

const DashBoardLayout = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Bar />
      <Grid2 sx={{ width: "100%", padding: "16px" }} container spacing={2}>
        <Grid2 size={3}>
          <Menu />
        </Grid2>
        <Grid2 size={9}>
          <Outlet />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default DashBoardLayout;
