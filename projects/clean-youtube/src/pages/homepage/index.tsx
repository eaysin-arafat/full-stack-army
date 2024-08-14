import { Grid } from "@mui/material";
import PlayListCardItem from "./play-list-card-item";
import { useStoreState } from "../../store/hooks";

const HomePage = () => {
  const { data } = useStoreState((state) => state.playlists);
  const playListArray = Object.values(data);

  return (
    <>
      {playListArray?.length > 0 && (
        <Grid container alignItems={"stretch"}>
          {playListArray?.map((item) => (
            <Grid
              key={item?.playlistId}
              item
              xs={12}
              md={6}
              lg={4}
              sx={{ marginBottom: 2 }}
            >
              <PlayListCardItem
                playListId={item?.playlistId}
                playlistThumbnails={item?.playlistThumbnails}
                channelTitle={item?.channelTitle || ""}
                playlistTitle={item?.playlistTitle || ""}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default HomePage;
