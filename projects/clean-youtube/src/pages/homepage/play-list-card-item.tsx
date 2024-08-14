import { PlayCircleFilledOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { DefaultThumbnailsType } from "../../constant/playlist-item";
import { URLPlaylist } from "../../routes/route-links";

type Props = {
  playlistThumbnails: DefaultThumbnailsType;
  playlistTitle: string;
  channelTitle: string;
  playListId: string;
};
export default function PlayListCardItem({
  playlistThumbnails,
  playlistTitle,
  channelTitle,
  playListId,
}: Props) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 1,
      }}
    >
      <CardMedia
        component={"img"}
        image={playlistThumbnails?.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary">
          {playlistTitle}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {channelTitle}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}></Box>
      <CardActions disableSpacing>
        <Button>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <PlayCircleFilledOutlined />
            <Link to={URLPlaylist(playListId)}>Start Tutorial</Link>
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
}
