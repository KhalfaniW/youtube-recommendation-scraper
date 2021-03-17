import {produce} from 'immer';

export type ItemCount = {[key: string]: number};

export function getItemCountForListGroup(listGroup: string[][]): ItemCount {
  return listGroup
    .map((idList: string[]) => getItemCountDictionary(idList))
    .reduce((allItemCountDictionary, currentItemCounts) => {
      return mergeDictionaryCounts(allItemCountDictionary, currentItemCounts);
    });
}

function mergeDictionaryCounts(
  accumulator_: ItemCount,
  newItemCountDictionary: ItemCount,
): ItemCount {
  return produce(accumulator_, (accumulator) => {
    Object.keys(newItemCountDictionary).forEach((key) => {
      if (Object.keys(accumulator).includes(key)) {
        accumulator[key] += newItemCountDictionary[key];
      } else {
        accumulator[key] = newItemCountDictionary[key];
      }
    });
  });
}

export function getItemCountDictionary(list: string[]): ItemCount {
  return list.reduce<ItemCount>((itemCountDictionary, item): ItemCount => {
    return increaseItemCount(itemCountDictionary, item);
  }, {});
}
function increaseItemCount(dictionary: ItemCount, item: string): ItemCount {
  return produce(dictionary, (newDictionary) => {
    const isItemInDictionary = Object.keys(newDictionary).includes(item);
    if (isItemInDictionary) {
      newDictionary[item] += 1;
    } else {
      newDictionary[item] = 1;
    }
  });
}
