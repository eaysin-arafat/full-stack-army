import {
  Avatar,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { URLVideoPlayer } from "../../routes/route-links";
import { useStoreState } from "../../store/hooks";

const Playlist = () => {
  const { playlistId } = useParams();
  const { data } = useStoreState((state) => state.playlists);
  const playlist = data[playlistId || ""];

  return (
    <Container maxWidth="lg">
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {playlist?.playlistItems?.map((item) => (
          <Link
            to={URLVideoPlayer(playlistId, item?.contentDetails?.videoId)}
            key={item?.contentDetails?.videoId}
          >
            <ListItem alignItems="flex-start" sx={{ cursor: "pointer" }}>
              <ListItemAvatar>
                <Avatar alt={item?.title} src={item?.thumbnail?.url} />
              </ListItemAvatar>
              <ListItemText
                primary={playlist.playlistTitle}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item?.title}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default Playlist;
