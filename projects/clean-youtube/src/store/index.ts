import { createStore } from "easy-peasy";
import favoritesModel, { FavoritesModelType } from "./favorites-model";
import playlistsModel, { PlaylistsModelType } from "./playlists-model";
import recentsModel, { RecentsModalType } from "./recents-model";

export type StoreModelType = {
  playlists: PlaylistsModelType;
  recents: RecentsModalType;
  favorites: FavoritesModelType;
};

const store = createStore<StoreModelType>({
  playlists: playlistsModel,
  recents: recentsModel,
  favorites: favoritesModel,
});

export default store;
