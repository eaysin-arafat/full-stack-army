import {
  Action,
  action,
  computed,
  Computed,
  persist,
  Thunk,
  thunk,
} from "easy-peasy";
import {
  getPlayList,
  PlayListDataType,
  ProcessedPlaylistItem,
} from "../api/get-playlists";

type PlaylistsModelStateType = {
  data: Record<string, PlayListDataType>;
  error: string;
  isLoading: boolean;
};

type PlaylistsModelActionsType = {
  setLoading: Action<PlaylistsModelStateType, boolean>;
  setError: Action<PlaylistsModelStateType, string>;
  addPlaylist: Action<PlaylistsModelStateType, PlayListDataType>;
  getPlaylistItemById: Computed<
    PlaylistsModelStateType,
    (playlistId: string, videoId: string) => ProcessedPlaylistItem | undefined
  >;
};

type PlaylistsModelThunksType = {
  getPlaylist: Thunk<
    PlaylistsModelStateType & PlaylistsModelActionsType,
    string
  >;
};

export type PlaylistsModelType = PlaylistsModelStateType &
  PlaylistsModelActionsType &
  PlaylistsModelThunksType;

const playlistsModel: PlaylistsModelType = persist({
  data: {},
  error: "",
  isLoading: false,
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  addPlaylist: action((state, payload) => {
    state.data[payload.playlistId] = payload;
  }),
  getPlaylistItemById: computed((state) => {
    return (playlistId: string, videoId: string) =>
      state.data[playlistId]?.playlistItems?.find(
        (item) => item?.contentDetails?.videoId === videoId
      );
  }),
  getPlaylist: thunk(async (actions, playlistId, helpers) => {
    const { addPlaylist, setError, setLoading } = actions;
    const { data } = helpers.getState();

    if (data[playlistId]) return;
    setLoading(true);

    try {
      const playlist = await getPlayList(playlistId);
      addPlaylist(playlist);
    } catch (err: any) {
      const errorMsg =
        (err.response.data.error.message as string) || "Something Went Wrong";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  }),
});

export default playlistsModel;
