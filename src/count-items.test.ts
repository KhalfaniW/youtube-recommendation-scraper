import {getItemCountForListGroup} from "./count-items.ts";
import {readFileSync} from "fs";

// Calling the readFileSync() method
// to read 'input.txt' file
import * as path from "path";
function retrieveFileContents(relativeFilePath) {
  const filePath = path.resolve(__dirname, relativeFilePath);
  return readFileSync(filePath, {encoding: "utf8", flag: "r"});
}
const reccomendationListGroup = JSON.parse(
  retrieveFileContents("../../data/recommendations.json"),
);

test("should count each item", () => {
  const a = "3_counts";
  const b = "2_counts";
  const c = "1_counts";

  const allItems = [
    [a, b, a],
    [a, b, c],
  ];

  const countDictionary = getItemCountForListGroup(allItems);
  expect(countDictionary).toStrictEqual({
    "3_counts": 3,
    "2_counts": 2,
    "1_counts": 1,
  });
});
