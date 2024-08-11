import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getPlayListItem = async (
  playlistId: string,
  pageToken: string = "",
  result: any[] = []
) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=contentDetails,snippet&playlistId=${playlistId}&maxResults=50&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);

  result = [...data.items, ...result];

  if (data.nextPageToken) {
    result = await getPlayListItem(playlistId, data.nextPageToken, result);
  }

  return result;
};

export const getPlayList = async (playlistId: string) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

  const { data } = await axios.get(URL);
  if (!data) return;

  let playlistItems = await getPlayListItem(playlistId);
  if (!playlistItems) return;

  const {
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelId,
    channelTitle,
  } = data?.items[0]?.snippet || {};

  playlistItems = playlistItems?.map((item) => {
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
  });

  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnails: thumbnails.default,
    channelId,
    channelTitle,
    playlistItems,
  };
};
