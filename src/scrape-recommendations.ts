import cheerio from 'cheerio';
import {uniq} from 'lodash';
import {VideoInfo} from './types';

type VideoId = string;

export function extractAllRecommendations(
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
  const videoIdSet = linkPartArray.map((linkPart) =>
    linkPart.attribs.href
      .replace('https://www.youtube.com', '')
      .replace('/watch?v=', ''),
  );

  return uniq(
    videoIdSet.filter((linkPart: string) => {
      return getShouldNotBeRemoved(linkPart);
    }),
  );
}
function getShouldNotBeRemoved(linkPart: string): boolean {
  const isPartOfAPlaylist = linkPart.includes('&list');
  return !isPartOfAPlaylist;
}

export function retrievePageHtml(window_ = window): string {
  return window_.document.body.innerHTML;
}
