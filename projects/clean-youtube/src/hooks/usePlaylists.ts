import { useEffect, useState } from "react";
import { getPlayList } from "../api/get-playlists";
import storage from "../utils/Storage";

interface RootPlayListType {
  [key: string]: Playlist;
}

interface Playlist {
  playlistId: string;
  playlistTitle: string;
  playlistDescription: string;
  playlistThumbnails: PlaylistThumbnails;
  channelId: string;
  channelTitle: string;
  playlistItems: PlaylistItem[];
}

interface PlaylistItem {
  title: string;
  description: string;
  thumbnail: PlaylistThumbnails;
  contentDetails: ContentDetails;
}

interface ContentDetails {
  videoId: string;
  videoPublishedAt: string;
}

interface PlaylistThumbnails {
  url: string;
  width: number;
  height: number;
}

const INIT_STATE = {
  playlists: {},
  recentPlaylists: [],
  favorites: [],
};

const STORAGE_KEY = "cy__playlist__state";

const usePlaylists = () => {
  const [state, setState] = useState<any>(INIT_STATE);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getPlaylistById = async (
    playlistId: string,
    force: boolean = false
  ) => {
    if (state.playlists[playlistId] && !force) return;

    setLoading(true);

    try {
      const playlist = await getPlayList(playlistId);

      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist,
        },
      }));
      setError("");
    } catch (e: any) {
      setError(e.response.data.error.message || "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = (playlistId: string) => {
    setState((prev) => ({
      ...prev,
      favorites: [...prev.favorites, playlistId],
    }));
  };

  const addToRecent = (playlistId: string) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev.recentPlaylists, playlistId],
    }));
  };

  const getPlaylistsByIds = (ids: string[] = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  useEffect(() => {
    const state = storage.get(STORAGE_KEY);
    if (state) setState({ ...state });
  }, [state]);

  useEffect(() => {
    if (state !== INIT_STATE) storage.save(STORAGE_KEY, state);
  }, [state]);

  return {
    playlists: state.playlists,
    favorites: getPlaylistsByIds(state.favorites),
    recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
    error,
    loading,
    getPlaylistById,
    addToFavorites,
    addToRecent,
  };
};

export default usePlaylists;
