import { Box, Container, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <Box sx={{ my: 16 }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default RootLayout;
