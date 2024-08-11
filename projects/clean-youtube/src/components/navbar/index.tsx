import { Button, Container, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import PlayListForm from "../playlist-form";

const Navbar = ({
  getPlaylistById,
}: {
  getPlaylistById: (id: string) => void;
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Typography variant="h4">Clean Youtube</Typography>

              <Typography variant="body1">by Stack Learner</Typography>
            </Stack>

            <Button color="inherit" onClick={handleClickOpen}>
              Add Playlist
            </Button>

            <PlayListForm
              open={open}
              handleClose={handleClose}
              getPlaylistId={getPlaylistById}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
