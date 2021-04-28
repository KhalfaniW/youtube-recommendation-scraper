export interface VideoInfo {
  id: string;
  link: string;
  recommendationCount?: number;
  thumbnailUrl: string;
  title: string;
  creator: string;
  description: string;
  durationSeconds: number;
  views: number;
  datePublished: string;
}

export interface ScrapedVideoInfo {
  id: string;
  link: string;
  recommendationCount?: number;
  thumbnailUrl: string;
  title: string;
  creator: string;
  percentWatchedDecimal: number;
  durationSeconds: number;
  viewCount: number;
  //need both
  relateiveTimePublished: string;
  timeSinceEpochScraped: number;
}
export interface FailedVideoInfo {
  id: string;
  errorMessage: string;
}

export type MaybeVideoInfo = VideoInfo | FailedVideoInfo;
export function getOnlySuccessfulVideoInfoGroup(
  videoInfoGroup: MaybeVideoInfo[],
): VideoInfo[] {
  const onlySuccessfulVideoInfo: VideoInfo[] = videoInfoGroup.filter(
    (maybeVideo): maybeVideo is VideoInfo => {
      const hasFailedVideoInfoProperty = Object.keys(maybeVideo).includes(
        'errorMessage',
      );
      return !hasFailedVideoInfoProperty;
    },
  );
  return onlySuccessfulVideoInfo;
}
