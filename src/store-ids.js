"use strict";
exports.__esModule = true;
exports.appendToAllIdList = exports.saveAllIdList = exports.retrieveAllIdList = void 0;
var constants_1 = require("./constants");
var lodash_1 = require("lodash");
var immer_1 = require("immer");
function retrieveAllIdList() {
    return JSON.parse(window.localStorage.getItem(constants_1.ALL_VIDEO_ID_LOCAL_STORAGE_NAME));
}
exports.retrieveAllIdList = retrieveAllIdList;
function saveAllIdList(newAllVideIds) {
    window.localStorage.setItem(constants_1.ALL_VIDEO_ID_LOCAL_STORAGE_NAME, JSON.stringify(newAllVideIds));
}
exports.saveAllIdList = saveAllIdList;
function appendToAllIdList(storage, newList) {
    if (storage === null) {
        return [newList];
    }
    return immer_1.produce(storage, function (newStorage) {
        newStorage.push(newList);
        newStorage = lodash_1.uniq(newStorage);
    });
}
exports.appendToAllIdList = appendToAllIdList;
