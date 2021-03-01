import {
  appendToAllIdList,
  retrieveAllIdList,
  saveAllIdList,
} from '../store-ids';
import {extractAllRecommendations} from '../scrape-recommendations';
import {fetchAndSetVideoInfoGroup} from '../fetch-info-from-ids';

export async function main() {
  const newVideoIds = extractAllRecommendations();

  const oldRecommendations = retrieveAllIdList();
  window['oldRecommendations'] = oldRecommendations;
  window['fetchVideoInfo'] = fetchAndSetVideoInfoGroup;
  window['newVideoIds'] = newVideoIds;

  const videoInfoGroup = await fetchAndSetVideoInfoGroup(
    newVideoIds,
    oldRecommendations,
  );
  console.log('FINISHED');
  window['videoInfoGroup'] = videoInfoGroup;
  const updatedAllIdSet = appendToAllIdList(oldRecommendations, newVideoIds);
  window['videoInfoGroup']
    .map((x) => {
      return {
        t: x.title,
        c: x.recommendationCount ? x.recommendationCount : 0,
        creator: x.creator,
      };
    })
    .filter((x) => x.c == 0)
    .forEach((x) => console.log(x));

  saveAllIdList(updatedAllIdSet);
}

window.onload = () => {
  main();
};
window['main'] = main;
/*

(function(d, script) {
    script = d.createElement('script');
        script.type = 'text/javascript'
            script.async = true;
                script.onload = function(){
                      console.log("load"); window.main()

                };
                    script.src = '//m.khal.me/files/js/prototype.js'
                        d.getElementsByTagName('head')[0].appendChild(script);

}(document));

  window.videoInfoGroup
  .map((x) => {
    return {
      t: x.title,
      c: x.recommendationCount ? x.recommendationCount : 0,
      creator: x.creator,
    };
  })
  .filter((x) => x)
  .forEach((x) => console.log(x));

*/
