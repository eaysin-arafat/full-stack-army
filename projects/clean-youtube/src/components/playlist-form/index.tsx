import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const PlayListForm = ({
  open,
  handleClose,
  getPlaylistId,
}: {
  open: boolean;
  handleClose: () => void;
  getPlaylistId: (id: string) => void;
}) => {
  const [state, setState] = useState<string>("");

  const handleSubmit = () => {
    //TODO: handle url later
    if (!state) alert("Invalid State");
    getPlaylistId(state);
    setState("");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new playlist please insert the playlist id or playlist line.
          Please make sure the link is correct. Otherwise we won't able to fetch
          the playlist information.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          name="email"
          label="Playlist id or link"
          fullWidth
          variant="standard"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setState(e.target.value)
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" onClick={handleSubmit}>
          Add Playlist
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlayListForm;
