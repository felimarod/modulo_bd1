import { Outlet } from "react-router";
import Bar from "../components/Dashboard/Bar";
import { Box, Grid2 } from "@mui/material";
import Menu from "../components/Dashboard/Menu";
import { Fragment } from "react/jsx-runtime";

const DashBoardLayout = () => {
  return (
    <Fragment key="dashboard">
      <Box sx={{ height: "100vh" }}>
        <Bar />
        <Grid2 sx={{ width: "100%", height: "100vh", padding: "16px" }} container spacing={2}>
          <Grid2 size={3}>
            <Menu />
          </Grid2>
          <Grid2 size={9}>
            <Outlet />
          </Grid2>
        </Grid2>
      </Box>
    </Fragment>
  );
};

export default DashBoardLayout;
