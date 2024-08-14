import { Action, action, persist } from "easy-peasy";

export type RecentsModalType = {
  items: string[];
  addToRecents: Action<RecentsModalType, string>;
  removeFromRecents: Action<RecentsModalType, string>;
};

const recentsModel: RecentsModalType = persist({
  items: [],
  addToRecents: action((state, playlistId) => {
    state.items.unshift(playlistId);
    state.items = state.items.slice(0, 5);
  }),
  removeFromRecents: action((state, playlistId) => {
    state.items = state.items.filter((id) => playlistId !== id);
  }),
});

export default recentsModel;
