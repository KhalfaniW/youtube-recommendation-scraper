import fetchVideoInfo from 'updated-youtube-info';
import produce from 'immer';

import {
  MaybeVideoInfo,
  VideoInfo,
  getOnlySuccessfulVideoInfoGroup,
} from './types';

import {extractAllRecommendations} from './scrape-recommendations';
import {getItemCountForListGroup} from './count-items';

export async function fetchVideoInfoGroupFromHomePage(
  youtubeHomePageDocument: Document = document,
): Promise<VideoInfo[]> {
  return getOnlySuccessfulVideoInfoGroup(
    await fetchAllVideoInfoGroupsFromHomePage(youtubeHomePageDocument),
  );
}
export async function fetchAllVideoInfoGroupsFromHomePage(
  youtubeHomePageDocument: Document = document,
): Promise<MaybeVideoInfo[]> {
  const newVideoIds = extractAllRecommendations(
    youtubeHomePageDocument.body.innerHTML,
  );
  return await fetchInfoFromIds(newVideoIds);
}

export async function fetchAndSetVideoInfoGroup(
  videoIds: string[],
  allVideoIds: string[][],
): Promise<VideoInfo[]> {
  const fetchedVideoInfoGroup = await fetchInfoFromIds(videoIds);
  return setRecommendationCounts(
    getOnlySuccessfulVideoInfoGroup(fetchedVideoInfoGroup),
    allVideoIds,
  );
}

async function fetchInfoFromIds(videoIds: string[]): Promise<MaybeVideoInfo[]> {
  const fetchVideoInfoPromises = videoIds.map(
    async (videoId): Promise<MaybeVideoInfo> => {
      try {
        const allInfo = await fetchVideoInfo(videoId);
        return {
          link: allInfo.url,
          id: videoId,
          recommendationCount: null,
          thumbnailUrl: allInfo.thumbnailUrl,
          title: allInfo.title,
          creator: allInfo.owner,
          // datePublished: allInfo.datePublished,
          views: allInfo.views,
          description: allInfo.description,
          durationSeconds: allInfo.durationSeconds,
        };
      } catch (err) {
        if (err.message === 'Video does not exist') {
          return {id: videoId, errorMessage: err.message};
        }
        throw Error(err.message + `on fetching info for videoId=${videoId}`);
      }
    },
  );
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
