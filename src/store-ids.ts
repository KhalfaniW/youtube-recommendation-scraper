import {ALL_VIDEO_ID_LOCAL_STORAGE_NAME} from './constants';

type AllVideoIds = Array<Array<string>>;
type MaybeAllVideoIds = Array<Array<string>> | null;
import {uniq} from 'lodash';
import {produce} from 'immer';

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
