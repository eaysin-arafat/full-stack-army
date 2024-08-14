export interface PlaylistItemType {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
}
interface ContentDetails {
  videoId: string;
  videoPublishedAt: string;
}
interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}
interface ResourceId {
  kind: string;
  videoId: string;
}
export interface Thumbnails {
  default: DefaultThumbnailsType;
  medium: DefaultThumbnailsType;
  high: DefaultThumbnailsType;
  standard: DefaultThumbnailsType;
  maxres: DefaultThumbnailsType;
}
export interface DefaultThumbnailsType {
  url: string;
  width: number;
  height: number;
}
