import { Action, action, persist } from "easy-peasy";

export type FavoritesModelType = {
  items: string[];
  addToFavorite: Action<FavoritesModelType, string>;
  removeFromFavorite: Action<FavoritesModelType, string>;
};

const favoritesModel: FavoritesModelType = persist({
  items: [],
  addToFavorite: action((state, playlistId) => {
    state.items.push(playlistId);
  }),
  removeFromFavorite: action((state, playlistId) => {
    state.items = state.items.filter((id) => playlistId !== id);
  }),
});

export default favoritesModel;
