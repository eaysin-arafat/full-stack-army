import { useState } from "react";
import { getPlayList } from "../api/get-playlists";

// Define types for playlist items and state
interface PlaylistItem {
  title: string;
  description: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  contentDetails: {
    videoId: string;
  };
}

interface Playlist {
  playlistId: string;
  channelTitle: string;
  channelId: string;
  items: PlaylistItem[];
}

interface PlaylistsState {
  playlists: { [key: string]: Playlist };
  recentPlaylists: string[];
  favorites: string[];
}

const usePlaylists = () => {
  const [state, setState] = useState<PlaylistsState>({
    playlists: {},
    recentPlaylists: [],
    favorites: [],
  });

  const getPlaylistById = async (
    playlistId: string,
    force: boolean = false
  ) => {
    if (state.playlists[playlistId] && !force) return;

    let result = await getPlayList(playlistId);
    let cid: string, ct: string;

    result = result.map((item) => {
      const {
        channelId,
        title,
        description,
        thumbnails: { medium },
        channelTitle,
      } = item.snippet;

      if (!cid) cid = channelId;
      if (!ct) ct = channelTitle;

      return {
        title,
        description,
        thumbnail: medium,
        contentDetails: item.contentDetails,
      };
    });

    setState((prev) => ({
      ...prev,
      playlists: {
        ...prev.playlists,
        [playlistId]: {
          playlistId,
          channelTitle: ct,
          channelId: cid,
          items: result,
        },
      },
    }));
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

  return {
    playlists: state.playlists,
    favorites: getPlaylistsByIds(state.favorites),
    recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
    getPlaylistById,
    addToFavorites,
    addToRecent,
  };
};

export default usePlaylists;
