import axios from "axios";

const key = "AIzaSyA_KxOg5U7qCXuijKV55gmheXVG3GaaISU";

export const getPlayList = async (
  playlistId: string,
  pageToken: string = "",
  result: any[] = []
): Promise<any[]> => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=contentDetails,snippet&playlistId=${playlistId}&maxResults=50&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);

  result = [...data.items, ...result];

  if (data.nextPageToken) {
    result = await getPlayList(playlistId, data.nextPageToken, result);
  }

  return result;
};
