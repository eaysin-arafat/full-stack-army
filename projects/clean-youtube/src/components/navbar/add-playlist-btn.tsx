import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { URLHome } from "../../routes/route-links";
import { useStoreActions } from "../../store/hooks";
import PlayListForm from "../playlist-form";

const AddPlaylistBtn = () => {
  const navigate = useNavigate();
  const { getPlaylist } = useStoreActions((action) => action.playlists);
  const [open, setOpen] = React.useState(false);

  const handleAddPlaylist = () => {
    setOpen(true);
    navigate(URLHome());
  };
  return (
    <>
      <Button color="inherit" onClick={handleAddPlaylist}>
        Add Playlist
      </Button>

      <PlayListForm
        open={open}
        handleClose={() => setOpen(false)}
        getPlaylistId={getPlaylist}
      />
    </>
  );
};

export default AddPlaylistBtn;
