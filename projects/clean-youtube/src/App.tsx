import { Container, CssBaseline, Grid } from "@mui/material";
import Navbar from "./components/navbar";
import PlayListCardItem from "./components/playlist-card-item";
import usePlaylists from "./hooks/usePlaylists";

function App() {
  const { getPlaylistById, playlists } = usePlaylists();
  const playListArray = Object.values(playlists);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ my: 16 }}>
        <Navbar getPlaylistById={getPlaylistById} />
        {playListArray?.length > 0 && (
          <Grid container>
            {playListArray?.map((item) => (
              <Grid item xs={12} md={6} lg={4} sx={{ marginBottom: 2 }}>
                <PlayListCardItem
                  key={item?.id}
                  playlistThumbnails={item?.playlistThumbnails}
                  channelTitle={item?.channelTitle}
                  playlistTitle={item?.playlistTitle}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default App;
