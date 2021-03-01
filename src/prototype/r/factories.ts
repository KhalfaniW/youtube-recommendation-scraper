//Here is the shared format for what objects should look like
//exported so there is only one source of truth

export var videoInfoToShow = {
  title: '',
  creator: '',
  viewCount: -1,
  creationTime: undefined,
};

export function createScrapedInfo({
  creationTime = undefined,
  creator = '',
  creatorLink = '',
  howLongAgoCreated = '',
  length = '',
  shortendViewCount = '',
  thumbnailLink = '',
  title = '',
  videoLink = '',
  viewCount = -1,
}) {
  return {
    creationTime,
    creator,
    creatorLink,
    howLongAgoCreated,
    length,
    shortendViewCount,
    thumbnailLink,
    title,
    videoLink,
    viewCount,
  };
}
const videoInfo = {
  creationTime: undefined,
  creator: '',
  howLongAgoCreated: '',
  length: '',
  shortendViewCount: '',
  thumbnailLink: '',
  title: '',
  videoLink: '',
  viewCount: -1,
};
