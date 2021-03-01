import {ALL_VIDEO_ID_LOCAL_STORAGE_NAME} from './constants';
import {VideoInfo} from './types';
import {uniq} from 'lodash';
import {produce} from 'immer';

const ALL_VIDEO_INFO_LOCAL_STORAGE_NAME =
  ALL_VIDEO_ID_LOCAL_STORAGE_NAME + 'VideoInfo';

type AllVideoInfo = Array<VideoInfo>;
type MaybeAllVideoInfo = AllVideoInfo | null;

type AllVideoIds = Array<Array<string>>;
type MaybeAllVideoIds = AllVideoIds | null;

export function retrieveAllIdList(): MaybeAllVideoIds {
  return JSON.parse(
    window.localStorage.getItem(ALL_VIDEO_ID_LOCAL_STORAGE_NAME),
  );
}
export function saveAllIdList(newAllVideIds: AllVideoIds) {
  window.localStorage.setItem(
    ALL_VIDEO_ID_LOCAL_STORAGE_NAME,
    JSON.stringify(newAllVideIds),
  );
}

export function retrieveAllVideoInfoList(): MaybeAllVideoInfo {
  return JSON.parse(
    window.localStorage.getItem(ALL_VIDEO_INFO_LOCAL_STORAGE_NAME),
  );
}

export function saveAllVideoInfoList(newAllVideoInfoList: AllVideoInfo) {
  window.localStorage.setItem(
    ALL_VIDEO_INFO_LOCAL_STORAGE_NAME,
    JSON.stringify(newAllVideoInfoList),
  );
}

export function appendToAllIdList(
  storage: MaybeAllVideoIds,
  newList: Array<string>,
): AllVideoIds {
  if (storage === null) {
    return [newList];
  }

  return produce<AllVideoIds>(storage, (newStorage) => {
    newStorage.push(newList);
    newStorage = uniq(newStorage);
  });
}
