import { Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { URLHome } from "../../routes/route-links";
import AddPlaylistBtn from "./add-playlist-btn";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link to={URLHome()}>
                <Typography variant="h4">Clean Youtube</Typography>
              </Link>

              <Typography variant="body1">by Stack Learner</Typography>
            </Stack>

            <AddPlaylistBtn />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
