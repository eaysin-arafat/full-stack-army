import { PlayCircleFilledOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function PlayListCardItem({
  playlistThumbnails,
  playlistTitle,
  channelTitle,
}) {
  console.log({ playlistThumbnails, playlistTitle, channelTitle });

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
            <Typography variant="body2" fontWeight={600}>
              Start Tutorial
            </Typography>
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
}
