export const URLHome = (): string => "/";
export const URLPlaylist = (playlistId: string = ":playlistId"): string =>
  `/playlist/${playlistId}`;
export const URLVideoPlayer = (
  playlistId: string = ":playlistId",
  videoId: string = ":videoId"
): string => `/playlist/${playlistId}/${videoId}`;
