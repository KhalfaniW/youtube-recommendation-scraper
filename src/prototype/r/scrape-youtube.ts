import cheerio from 'cheerio';

import {Recommendation, createVideoInfo} from './types';

/*
  [2020-06-18 Thu]
  Assume you are on the youtube homepage.

  This takes the html from the document and extracts the data using selectors like id and class name.


  An example youtube homepage is very large (3 mib), so I am test this manually

*/
// load the page source into cheerio

export function extractAllRecommendations(
  allVideoElementHtml: string,
): Array<Recommendation> {
  //this function takes the html from  document.getElementsByTagName("ytd-rich-grid-renderer")[0].innerHTML from the youtube.com homepage

  const $ = cheerio.load(allVideoElementHtml);
  const videoInfoSet = $('ytd-rich-item-renderer').map((element: any) => {
    return extractVideoInfoFromElement(element);
  });

  // console.log($("ytd-rich-item-renderer").length)
  // console.log(videoInfoSet.length)
  return videoInfoSet;
}

export function extractVideoInfoFromElement(
  videoElementHtml: any,
): ScrapedInfo {
  const $ = cheerio.load(videoElementHtml);

  var creatorElement = $('yt-formatted-string.ytd-channel-name');
  var _creator = creatorElement.text();
  var _creatorLink = parseIfDefined(
    creatorElement.find('a')[0],
    (element) => 'https://youtube.com' + element.attribs.href,
  );
  var _length = $('ytd-thumbnail-overlay-time-status-renderer')
    .text()
    .trim();
  var _howLongAgoCreated = parseIfDefined(
    $('#metadata-line').find('span'),
    (element) => $(element[1]).text(),
  );
  var _shortendViewCount = parseIfDefined(
    $('#metadata-line').find('span'),
    (element) => $(element[0]).text(),
  );
  var _title = parseIfDefined($('#video-title'), (element) => element.text());
  var _videoLink = parseIfDefined(
    $('a#thumbnail')[0],
    (element) => 'https://youtube.com' + element.attribs.href,
  );

  var extractedObject = {
    creator: _creator,
    creatorLink: _creatorLink,
    howLongAgoCreated: _howLongAgoCreated,
    length: _length,
    shortendViewCount: _shortendViewCount,
    title: _title,
    videoLink: _videoLink,
  };

  return createScrapedInfo(extractedObject);
}

function parseIfDefined(value, howToParseFromValue, defaultValue = '') {
  if (value) {
    return howToParseFromValue(value);
  }
  return defaultValue;
}
