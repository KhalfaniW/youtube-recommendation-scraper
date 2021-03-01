import {insertYouTubeHTML} from '../youtube-tools';
import {fetchVideoInfoGroupFromHomePage} from '../../src/';
const youtubeThumbnailSelector = 'ytd-thumbnail';
import fs from 'fs';
import path from 'path';

export const retrieveMockVideoInfo = () => {
  const mockVideoInfoGroup = fs.readFileSync(
    path.resolve(__dirname, '../__mocks__/mock-youtube-scrape-values.json'),
  );
  document.body.innerHTML = mockVideoInfoGroup.toString();
  return mockVideoInfoGroup.toString();
};
test.only('extract recommendation', async () => {
  insertYouTubeHTML();

  const mockValues = JSON.parse(retrieveMockVideoInfo());

  const reccomendedVideoInfoGroup = mockValues.retrievedVideoInfoGroup;

  expect(reccomendedVideoInfoGroup.length).toBeGreaterThan(20);

  expect(reccomendedVideoInfoGroup[1].title).toBe('Fastest cat slaps');
  expect(reccomendedVideoInfoGroup[3].title).toBe(
    'Baby Yoda being ADORABLE with subtitles again',
  );

  expect(reccomendedVideoInfoGroup[21].title).toBe(
    "Kid Wins Talent Show Dancing to Michael Jackson's Billie Jean",
  );
});
//skiped becuase it doesn't mock
test.skip('extract recommendation real requests', async () => {
  insertYouTubeHTML();
  const reccomendedVideoInfoGroup = await fetchVideoInfoGroupFromHomePage();

  const mockValues = JSON.parse(retrieveMockVideoInfo());

  expect(reccomendedVideoInfoGroup.length).toBeGreaterThan(20);

  expect(
    reccomendedVideoInfoGroup.map((videoInfo) => videoInfo.title),
  ).toStrictEqual(
    mockValues.retrievedVideoInfoGroup.map((videoInfo) => videoInfo.title),
  );

  expect(reccomendedVideoInfoGroup[1].title).toBe('Fastest cat slaps');
  expect(reccomendedVideoInfoGroup[3].title).toBe(
    'Baby Yoda being ADORABLE with subtitles again',
  );

  expect(reccomendedVideoInfoGroup[21].title).toBe(
    "Kid Wins Talent Show Dancing to Michael Jackson's Billie Jean",
  );
});

//this should be skipped becuase fetched attributes are subject to change
test.skip('match fetched Videos to mock videos', async () => {
  insertYouTubeHTML();
  const reccomendedVideoInfoGroup = await fetchVideoInfoGroupFromHomePage();

  expect(reccomendedVideoInfoGroup.length).toBeGreaterThan(20);

  const mockValues = JSON.parse(retrieveMockVideoInfo());
  expect(reccomendedVideoInfoGroup.length).toStrictEqual(
    mockValues.retrievedVideoInfoGroup.length,
  );

  expect(
    reccomendedVideoInfoGroup.map((videoInfo) => videoInfo.title),
  ).toStrictEqual(
    mockValues.retrievedVideoInfoGroup.map((videoInfo) => videoInfo.title),
  );
});
