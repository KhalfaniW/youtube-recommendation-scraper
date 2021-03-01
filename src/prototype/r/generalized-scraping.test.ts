import {readFileSync} from 'fs';
import path from 'path';

import {Recommendation} from './types';
import * as main from '../../index';

function retrieveFileContents(relativeFilePath: string): string {
  const filePath = path.resolve(__dirname, relativeFilePath);
  return readFileSync(filePath, {encoding: 'utf8', flag: 'r'});
}

const mockVideoContentHTML = retrieveFileContents('./mock-video-content.html');
const mockVideoContentsGroupHtml = retrieveFileContents(
  './mock-video-contents-group.html',
);
function getHasRequiredProperties(videoInfo: Recommendation): boolean {
  //I know no way to check if the propeties is a titles genericaly; it could be anything
  //in unicode of any length
  let isTitleCorrect = videoInfo.title.length > 0;
  let isCreatorCorrect1 = videoInfo.creator.length > 0;
  let isViewCountCorrect = videoInfo.viewCount > 0;
  return isTitleCorrect && isCreatorCorrect1 && isViewCountCorrect;
}
function getRatioMatching(array: Array<any>, matcher: (any) => boolean) {
  let totalCount = array.length;
  let matchingCount = array.filter(matcher).length;
  return totalCount / matchingCount;
}

describe('Object Extraction', () => {
  // test("scrape one property", () => {
  // });

  test.only('100% of videos have titles', () => {
    const allVideoInfos = main.extractAllRecommendations(
      mockVideoContentsGroupHtml,
    );
    expect(allVideoInfos.length).toBe(50);
    // expect(
    //   getRatioMatching(allVideoInfos, (videoInfo: Recommendation) => {
    //     return getHasRequiredProperties(videoInfo);
    //   }),
    // ).toBe(1);
  });
  test('90% of videos are completed videos', () => {
    const allVideoInfos = main.extractAllRecommendations(
      mockVideoContentsGroupHtml,
    );
    expect(
      getRatioMatching(allVideoInfos, (videoInfo: Recommendation) => {
        return videoInfo.__typename === 'VideoInfo';
      }),
    ).toBe(0.9);
  });

  test('Extract all titles from html', () => {
    //there are alot of titles, so I took a random sample
    var first3Titles = [
      'SIDEMEN $10,000 VS $100 ROAD TRIP',
      'Impractical Jokers: The Best of Focus Groups - Mashup | truTV',
      'I went undercover as a Rocket League bot. Can I fool my opponents?',
    ];
    var expectedTitleAtIndex29 =
      'Police Brutality & Health Inequity With Caron Butler, Kareem Abdul-Jabbar & More #NBATogether';
    var expectedLastTitle = [
      "Zuko's Mom Explained: The Life of Ursa (Avatar the Last Airbender Breakdown)",
    ];

    const mockVideoContentsGroupHtml = '';
    const allVideoInfos = main.extractAllRecommendations(
      mockVideoContentsGroupHtml,
    );
    expect(allVideoInfos.length).toBeGreaterThan(0);

    const allTitles = Array.from(allVideoInfos).map(
      (videoInfo: any) => videoInfo.title,
    );

    expect(allTitles.slice(0, 3)).toEqual(first3Titles);
    expect(allTitles[29]).toEqual(expectedTitleAtIndex29);
    expect(allTitles.slice(-1)).toEqual(expectedLastTitle);
  });
});
