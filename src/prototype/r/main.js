"use strict";
exports.__esModule = true;
exports.main = exports.run = void 0;
var fetchVideoInfo = require("updated-youtube-info");
var store_ids_1 = require("./store-ids");
var scrape_recommended_ids_1 = require("./scrape-recommendations");
function run() {
    var newVideoIds = scrape_recommended_ids_1.extractAllRecommendations(scrape_recommended_ids_1.retrievePageHtml());
    var updatedAllIdSet = store_ids_1.appendToAllIdList(store_ids_1.retrieveAllIdList(), newVideoIds);
    store_ids_1.saveAllIdList(updatedAllIdSet);
    console.log('updatedAllIdSet', JSON.stringify(updatedAllIdSet));
}
exports.run = run;
window.onload = function () {
    console.log({ html: scrape_recommended_ids_1.retrievePageHtml() });
    run();
};
window['x'] = scrape_recommended_ids_1.retrievePageHtml;
window['extractAllRecommendations'] = scrape_recommended_ids_1.extractAllRecommendations;
window['run'] = run;
function main() {
    return fetchVideoInfo('AmuKdoe8MvI');
}
exports.main = main;
