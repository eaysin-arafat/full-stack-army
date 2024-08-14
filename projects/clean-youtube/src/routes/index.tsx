import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root-layout";
import HomePage from "../pages/homepage";
import Playlist from "../pages/playlist";
import VideoPlayer from "../pages/video-player";
import { URLHome, URLPlaylist, URLVideoPlayer } from "./route-links";

const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: URLHome(), element: <HomePage /> },
      { path: URLPlaylist(), element: <Playlist /> },
      { path: URLVideoPlayer(), element: <VideoPlayer /> },
    ],
  },
]);

export default routes;
