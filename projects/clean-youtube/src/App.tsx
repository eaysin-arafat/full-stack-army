import { useEffect } from "react";
import usePlaylists from "./hooks/usePlaylists";

function App() {
  const { getPlaylistById, playlists } = usePlaylists();

  useEffect(() => {
    getPlaylistById("PL_XxuZqN0xVASsjyqiNzgjUWHbDkN2Scy");
  }, []);

  console.log(playlists);

  return <h1>Hello World</h1>;
}

export default App;
