import { useParams } from "react-router-dom";
import VideoIframe from "../../components/video-iframe";
import { useStoreState } from "../../store/hooks";

const VideoPlayer = () => {
  const { videoId, playlistId } = useParams();
  const playlistItem = useStoreState((state) =>
    state.playlists.getPlaylistItemById(playlistId || "", videoId || "")
  );

  return (
    <VideoIframe
      videoId={videoId || ""}
      autoPlay={false}
      title={playlistItem?.title || ""}
    />
  );
};

export default VideoPlayer;
