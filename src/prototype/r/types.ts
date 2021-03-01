//use typename to check type
export interface VideoInfo {
  __typename: 'VideoInfo';
  title: string;
  creator: string;
  viewCount: number;
  relativeCreationTime: string;
}

export interface LiveStreamInfo {
  __typename: 'LiveStreamInfo';
  title: string;
  creator: string;
  viewCount: number;
}

//NOTE: all live steams become completed videos
export type Recommendation = VideoInfo | LiveStreamInfo;

export function createVideoInfo({
  title,
  creator,
  viewCount,
  relativeCreationTime,
}: {
  title: string;
  creator: string;
  relativeCreationTime: string;
  viewCount: number;
}): VideoInfo {
  const videoInfo: VideoInfo = {
    __typename: 'VideoInfo',
    title: title,
    creator: creator,
    viewCount: viewCount,
    relativeCreationTime: relativeCreationTime,
  };
  return videoInfo;
}
export function createLiveSteamInfo({
  title,
  creator,
  viewCount,
}: {
  title: string;
  creator: string;
  viewCount: number;
}): LiveStreamInfo {
  const liveStreamInfo: LiveStreamInfo = {
    __typename: 'LiveStreamInfo',
    title: title,
    creator: creator,
    viewCount: viewCount,
  };
  return liveStreamInfo;
}
