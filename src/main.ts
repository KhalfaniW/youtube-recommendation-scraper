import * as fetchVideoInfo from 'updated-youtube-info';
import {appendToAllIdList, retrieveAllIdList, saveAllIdList} from './store-ids';
import {
  extractAllRecommendations,
  retrievePageHtml,
} from './scrape-recommended-ids';

export function run() {
  const newVideoIds = extractAllRecommendations(retrievePageHtml());
  const updatedAllIdSet = appendToAllIdList(retrieveAllIdList(), newVideoIds);
  saveAllIdList(updatedAllIdSet);
  console.log('updatedAllIdSet', JSON.stringify(updatedAllIdSet));
}
window.onload = () => {
  console.log({html: retrievePageHtml()});
  run();
};

window['x'] = retrievePageHtml;
window['extractAllRecommendations'] = extractAllRecommendations;
window['run'] = run;
export function main(): any {
  return fetchVideoInfo('AmuKdoe8MvI');
}
