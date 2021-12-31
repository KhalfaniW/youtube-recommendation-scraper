# What is this

This is a micro-library that scrapes the recommended ids off of youtube.

It is a compoentn of a larger project to redesign the youtube homepage
to minimize its distracting power

Most functionality is is in the `scrape-recommendations.ts` library

-   uses cypress for e2e tests
-   uses jest for unit and integreation tests

Here are all the exports from index.tsx

``` example
export {VideoInfo, MaybeVideoInfo, ScrapedVideoInfo, FailedVideoInfo} from './types';
export {ALL_VIDEO_ID_LOCAL_STORAGE_NAME} from './constants';

export {
  retrieveAllIdList,
  saveAllIdList,
  appendToAllIdList,
  saveAllVideoInfoList,
  retrieveAllVideoInfoList,
} from './store-ids';

export {
  extractAllRecommendationIds,
  retrievePageHtml,
} from './scrape-recommendations';

export {
  fetchVideoInfoGroupFromHomePage,
  fetchAllVideoInfoGroupsFromHomePage,
  fetchAndSetVideoInfoGroup,
  fetchInfoFromIds,
} from './fetch-info-from-ids';

```

notes

-   Built on top of using boilerplate Licensed under the APLv2. from
    this link
    <https://github.com/jsynowiec/node-typescript-boilerplate/> See the
    LICENSE file for details.
