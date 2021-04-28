import cheerio from 'cheerio';

import {parse} from 'node-html-parser';
import {uniq} from 'lodash';

import {ScrapedVideoInfo} from './types';

type VideoId = string;

export function extractAllRecommendationIds(
  allVideoElementHtml: string = retrievePageHtml(),
): Array<VideoId> {
  //this function takes the html from  document.getElementsByTagName("ytd-rich-grid-renderer")[0].innerHTML from the youtube.com homepage

  const $1 = cheerio.load(allVideoElementHtml);
  const linkPartArray = $1('a#thumbnail')
    .toArray()
    .filter((linkPart) => {
      return (
        Object.keys(linkPart).includes('attribs') &&
        Object.keys(linkPart.attribs).includes('href')
      );
    });
  const videoIdSet = linkPartArray.map((linkPart: any) =>
    linkPart.attribs.href
      .replace('https://www.youtube.com', '')
      .replace('/watch?v=', ''),
  );
  const finalRecommendationIds = uniq(
    videoIdSet.filter((linkPart: string) => {
      return getShouldLinkBeKept(linkPart);
    }),
  );

  return finalRecommendationIds;
}
//use window.ytInitialData to get movingThumbnailDetails
// contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents[3].richItemRenderer.content.videoRenderer.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0].url
// exact view count :
//contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents[3].richItemRenderer.content.videoRenderer.viewCountText.simpleText

export function extractAllRecommendationVideoInfos(
  allVideoElementHtml: string = retrievePageHtml(),
): Array<ScrapedVideoInfo> {
  const parsedDocument = parse(allVideoElementHtml);

  const allRecommendations = Array.from(
    parsedDocument
      .querySelector('ytd-rich-grid-renderer')
      .querySelector('#contents')
      .querySelectorAll('ytd-rich-item-renderer'),
  )
    .filter(getIsNotAnAdvertisement)
    .filter((recommendation) => {
      const isFinishedLoading =
        recommendation.querySelector('#metadata-line').innerText.trim() !== '';
      return isFinishedLoading;
    })
    .filter((recommendation) => {
      const isNotALiveStream =
        recommendation.querySelectorAll('.badge-style-type-live-now').length ===
        0;
      return isNotALiveStream;
    });

  const allScrapedInfo = allRecommendations.map(getScrapedVideoInfo);
  return allScrapedInfo;
}

function getScrapedVideoInfo(recommendationElement: any): ScrapedVideoInfo {
  const scrape = ({
    selector,
    attribute,
  }: {
    selector: string;
    attribute: string;
  }) => {
    const element = recommendationElement.querySelector(selector);
    return attribute === 'innerText'
      ? element.innerText
      : element.getAttribute(attribute);
  };
  const id = scrape({selector: '#thumbnail', attribute: 'href'}).slice(-11);
  return {
    thumbnailUrl: scrape({selector: '#img', attribute: 'src'}),
    title: scrape({selector: '#video-title-link', attribute: 'title'}),

    creator: scrape({selector: '#avatar-link', attribute: 'title'}),
    relateiveTimePublished: scrape({
      selector: '#metadata-line>span+span',
      attribute: 'innerText',
    }),

    percentWatchedDecimal: getVideoCompletedPercentDecimal(
      recommendationElement,
    ),
    durationSeconds: getSecondsFromColonTimeStamp(
      scrape({
        selector: 'ytd-thumbnail-overlay-time-status-renderer',
        attribute: 'innerText',
      }),
    ),
    viewCount: getViewCountFromAriaLabel(
      scrape({
        selector: 'yt-formatted-string#video-title',
        attribute: 'aria-label',
      }),
    ),

    timeSinceEpochScraped: Date.now(),
    id,
    link: `https://www.youtube.com/watch?v=${id}`,
    recommendationCount: null,
  };
}

function getViewCountFromAriaLabel(youTubeAriaLabel: string): number {
  const secondToLastWord = youTubeAriaLabel.split(' ').slice(-2)[0];
  const viewCount = Number(secondToLastWord.replace(/,/g, ''));
  return viewCount;
}

function getVideoCompletedPercentDecimal(videoElement: any): number {
  const progressBarElement = videoElement.querySelector(
    'ytd-thumbnail-overlay-resume-playback-renderer>#progress',
  );
  if (progressBarElement === null) {
    return 0;
  }
  const progressBarWidthPercentInteger = Number(
    progressBarElement.getAttribute('style').match(/[0-9]+/)[0],
  );
  return progressBarWidthPercentInteger / 100;
}

function getSecondsFromColonTimeStamp(
  timeWithColonsSeparating: string,
): number {
  const secondsMinutesHoursGroup = timeWithColonsSeparating
    .split(':')
    .reverse();
  return secondsMinutesHoursGroup.reduce(
    (allSeconds, timePartString, index) => {
      const timePart = Number(timePartString);
      const timePartSeconds = timePart * Math.pow(60, index);
      return allSeconds + timePartSeconds;
    },
    0,
  );
}

function getIsNotAnAdvertisement(recommendationElement: any) {
  return (
    recommendationElement.querySelectorAll('ytd-display-ad-renderer').length ===
    0
  );
}
function getShouldLinkBeKept(linkPart: string): boolean {
  const isPartOfAPlaylist = linkPart.includes('&list');
  return !isPartOfAPlaylist;
}

export function retrievePageHtml(window_ = window): string {
  return window_.document.body.innerHTML;
}
