import axios from "axios";
import { PlaylistType } from "../constant/playlist";
import {
  DefaultThumbnailsType,
  PlaylistItemType,
} from "../constant/playlist-item";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;
type PlaylistItemsResponse = {
  items: PlaylistItemType[];
  nextPageToken?: string;
};

export type ProcessedPlaylistItem = {
  title: string;
  description: string;
  thumbnail: DefaultThumbnailsType;
  contentDetails: PlaylistItemType["contentDetails"];
};

// Define the return type for getPlayList function
export type PlayListDataType = {
  playlistId: string;
  playlistTitle?: string;
  playlistDescription?: string;
  playlistThumbnails: DefaultThumbnailsType;
  channelId?: string;
  channelTitle?: string;
  playlistItems: ProcessedPlaylistItem[];
};

export const getPlayListItem = async (
  playlistId: string,
  pageToken: string = "",
  result: PlaylistItemType[] = []
): Promise<PlaylistItemType[]> => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=contentDetails,snippet&playlistId=${playlistId}&maxResults=50&pageToken=${pageToken}`;

  const { data }: { data: PlaylistItemsResponse } = await axios.get(URL);
  result = [...data.items, ...result];

  if (data.nextPageToken) {
    result = await getPlayListItem(playlistId, data.nextPageToken, result);
  }

  return result;
};

export const getPlayList = async (
  playlistId: string
): Promise<PlayListDataType> => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

  const { data }: { data: PlaylistType } = await axios.get(URL);

  let playlistItems = await getPlayListItem(playlistId);

  const {
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelId,
    channelTitle,
  } = data?.items[0]?.snippet || {};

  const processedPlaylistItems: ProcessedPlaylistItem[] = playlistItems?.map(
    (item) => {
      const {
        title,
        description,
        thumbnails: { medium },
      } = item.snippet;

      return {
        title,
        description,
        thumbnail: medium,
        contentDetails: item.contentDetails,
      };
    }
  );

  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnails: thumbnails.default as DefaultThumbnailsType,
    channelId,
    channelTitle,
    playlistItems: processedPlaylistItems,
  };
};
