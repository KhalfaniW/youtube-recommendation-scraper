"use strict";
exports.__esModule = true;
exports.retrievePageHtml = exports.extractAllRecommendationVideoInfos = exports.extractAllRecommendationIds = void 0;
var cheerio_1 = require("cheerio");
var node_html_parser_1 = require("node-html-parser");
var lodash_1 = require("lodash");
function extractAllRecommendationIds(allVideoElementHtml) {
    //this function takes the html from  document.getElementsByTagName("ytd-rich-grid-renderer")[0].innerHTML from the youtube.com homepage
    if (allVideoElementHtml === void 0) { allVideoElementHtml = retrievePageHtml(); }
    var $1 = cheerio_1["default"].load(allVideoElementHtml);
    var linkPartArray = $1('a#thumbnail')
        .toArray()
        .filter(function (linkPart) {
        return (Object.keys(linkPart).includes('attribs') &&
            Object.keys(linkPart.attribs).includes('href'));
    });
    var videoIdSet = linkPartArray.map(function (linkPart) {
        return linkPart.attribs.href
            .replace('https://www.youtube.com', '')
            .replace('/watch?v=', '');
    });
    var finalRecommendationIds = lodash_1.uniq(videoIdSet.filter(function (linkPart) {
        return getShouldLinkBeKept(linkPart);
    }));
    return finalRecommendationIds;
}
exports.extractAllRecommendationIds = extractAllRecommendationIds;
//use window.ytInitialData to get movingThumbnailDetails
// contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents[3].richItemRenderer.content.videoRenderer.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0].url
// exact view count :
//contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents[3].richItemRenderer.content.videoRenderer.viewCountText.simpleText
function extractAllRecommendationVideoInfos(allVideoElementHtml) {
    if (allVideoElementHtml === void 0) { allVideoElementHtml = retrievePageHtml(); }
    var parsedDocument = node_html_parser_1.parse(allVideoElementHtml);
    var allRecommendations = Array.from(parsedDocument
        .querySelector('ytd-rich-grid-renderer')
        .querySelector('#contents')
        .querySelectorAll('ytd-rich-item-renderer'))
        .filter(getIsNotAnAdvertisement)
        .filter(function (recommendation) {
        var isFinishedLoading = recommendation.querySelector('#metadata-line').innerText.trim() !== '';
        return isFinishedLoading;
    })
        .filter(function (recommendation) {
        var isNotALiveStream = recommendation.querySelectorAll('.badge-style-type-live-now').length ===
            0;
        return isNotALiveStream;
    });
    var allScrapedInfo = allRecommendations.map(getScrapedVideoInfo);
    return allScrapedInfo;
}
exports.extractAllRecommendationVideoInfos = extractAllRecommendationVideoInfos;
function getScrapedVideoInfo(recommendationElement) {
    var scrape = function (_a) {
        var selector = _a.selector, attribute = _a.attribute;
        var element = recommendationElement.querySelector(selector);
        return attribute === 'innerText'
            ? element.innerText
            : element.getAttribute(attribute);
    };
    var id = scrape({ selector: '#thumbnail', attribute: 'href' }).slice(-11);
    return {
        thumbnailUrl: scrape({ selector: '#img', attribute: 'src' }),
        title: scrape({ selector: '#video-title-link', attribute: 'title' }),
        creator: scrape({ selector: '#avatar-link', attribute: 'title' }),
        relateiveTimePublished: scrape({
            selector: '#metadata-line>span+span',
            attribute: 'innerText'
        }),
        percentWatchedDecimal: getVideoCompletedPercentDecimal(recommendationElement),
        durationSeconds: getSecondsFromColonTimeStamp(scrape({
            selector: 'ytd-thumbnail-overlay-time-status-renderer',
            attribute: 'innerText'
        })),
        viewCount: getViewCountFromAriaLabel(scrape({
            selector: 'yt-formatted-string#video-title',
            attribute: 'aria-label'
        })),
        timeSinceEpochScraped: Date.now(),
        id: id,
        link: "https://www.youtube.com/watch?v=" + id,
        recommendationCount: null
    };
}
function getViewCountFromAriaLabel(youTubeAriaLabel) {
    var secondToLastWord = youTubeAriaLabel.split(' ').slice(-2)[0];
    var viewCount = Number(secondToLastWord.replace(/,/g, ''));
    return viewCount;
}
function getVideoCompletedPercentDecimal(videoElement) {
    var progressBarElement = videoElement.querySelector('ytd-thumbnail-overlay-resume-playback-renderer>#progress');
    if (progressBarElement === null) {
        return 0;
    }
    var progressBarWidthPercentInteger = Number(progressBarElement.getAttribute('style').match(/[0-9]+/)[0]);
    return progressBarWidthPercentInteger / 100;
}
function getSecondsFromColonTimeStamp(timeWithColonsSeparating) {
    var secondsMinutesHoursGroup = timeWithColonsSeparating
        .split(':')
        .reverse();
    return secondsMinutesHoursGroup.reduce(function (allSeconds, timePartString, index) {
        var timePart = Number(timePartString);
        var timePartSeconds = timePart * Math.pow(60, index);
        return allSeconds + timePartSeconds;
    }, 0);
}
function getIsNotAnAdvertisement(recommendationElement) {
    return (recommendationElement.querySelectorAll('ytd-display-ad-renderer').length ===
        0);
}
function getShouldLinkBeKept(linkPart) {
    var isPartOfAPlaylist = linkPart.includes('&list');
    return !isPartOfAPlaylist;
}
function retrievePageHtml(window_) {
    if (window_ === void 0) { window_ = window; }
    return window_.document.body.innerHTML;
}
exports.retrievePageHtml = retrievePageHtml;
