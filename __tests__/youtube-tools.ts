import fs from "fs";
import path from "path";

export const insertYouTubeHTML = () => {
  const youtubeHtml = fs.readFileSync(
    path.resolve(__dirname, "./__mocks__/youtube/youtube-snapshot.html"),
  );
  document.body.innerHTML = youtubeHtml.toString();
  return youtubeHtml.toString();
};
