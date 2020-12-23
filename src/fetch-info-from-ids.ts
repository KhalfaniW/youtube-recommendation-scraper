import * as fetchVideoInfo from 'updated-youtube-info';

import {VideoInfo} from './types';
import {getItemCountForListGroup} from './count-items';
import produce from 'immer';

export async function fetchAndSetVideoInfoGroup(
  videoIds: string[],
  allVideoIds: string[][],
): Promise<VideoInfo[]> {
  const fetchedVideoInfoGroup = await fetchInfoFromIds(videoIds);
  return setRecommendationCounts(fetchedVideoInfoGroup, allVideoIds);
}
export async function fetchInfoFromIds(
  videoIds: string[],
): Promise<VideoInfo[]> {
  const fetchVideoInfoPromises = videoIds.map(async (videoId) => {
    const allInfo = await fetchVideoInfo(videoId);
    return {
      link: allInfo.url,
      id: videoId,
      recommendationCount: null,
      thumbnailUrl: allInfo.thumbnailUrl,
      title: allInfo.title,
      creator: allInfo.owner,
      datePublished: allInfo.datePublished,
      views: allInfo.views,
      description: allInfo.description,
      durationSeconds: allInfo.durationSeconds,
    };
  });
  return Promise.all(fetchVideoInfoPromises);
}
export function setRecommendationCounts(
  videoInfoGroup_: VideoInfo[],
  allVideoIds: string[][],
): VideoInfo[] {
  return produce(videoInfoGroup_, (videoInfoGroup) => {
    const recommendationCounts = getItemCountForListGroup(allVideoIds);
    const updatedVideoInfoGroup = videoInfoGroup.map((videoInfo) => {
      videoInfo.recommendationCount = recommendationCounts[videoInfo.id];
      return videoInfo;
    });
    videoInfoGroup = updatedVideoInfoGroup;
  });
}
