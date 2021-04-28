import {ALL_VIDEO_ID_LOCAL_STORAGE_NAME} from '../../src/constants';
import {
  appendToAllIdList,
  retrieveAllIdList,
  saveAllIdList,
} from '../../src/store-ids';
import {
  extractAllRecommendationIds,
  retrievePageHtml,
} from '../../src/scrape-recommendations';

function resetStorage() {
  window.localStorage.setItem(ALL_VIDEO_ID_LOCAL_STORAGE_NAME, null);
}
function retrieveAndUpdateAllVideoIds(html: string = retrievePageHtml()) {
  const newVideoIds = extractAllRecommendationIds(html);
  const updatedAllIdSet = appendToAllIdList(retrieveAllIdList(), newVideoIds);
  saveAllIdList(updatedAllIdSet);
}
function goToYoutubeAndRun(actions: (contentWindow: any) => void) {
  //readablity is #1 priority
  cy.visit('https://youtube.com', {
    onLoad: actions,
  });
}
it('get 1 lists of ids', () => {
  resetStorage();
  let done = false;
  let firstVideoIdCount: number;
  //first storage is correct

  const checkIfFirstIsCorrect = (window: any) => {
    const html = window.document.body.innerHTML;
    retrieveAndUpdateAllVideoIds(html);
    const newVideoIds = extractAllRecommendationIds(html);
    expect(newVideoIds.length).to.equal(50);

    expect(JSON.stringify(retrieveAllIdList())).to.equal(
      JSON.stringify([newVideoIds]),
    );
    firstVideoIdCount = extractAllRecommendationIds.length;

    /*
      expect(firstVideoIdCount).to.greaterThan(20);
      expect(firstVideoIdCount).to.greaterThan(20);
      expect(firstVideoIdCount).to.lessThan(100);
    */

    done = true;
  };
  goToYoutubeAndRun(checkIfFirstIsCorrect);
  cy.waitUntil(() => done);

  /*  //check after reloading
  cy.visit('https://youtube.com', {
    onLoad: (contentWindow) => {
      const html = contentWindow.document.body.innerHTML;
      const secondVideoIds = extractAllRecommendationIds(html);
      const secondVideoIdCount = secondVideoIdCount;
      retrieveAndUpdateAllVideoIds(html);
      const currentVideoIdCount = retrieveAllIdList().length;

      expect(currentVideoIdCount).to.equal(
        firstVideoIdCount + secondVideoCount,
      );
      const videoCountDiffernce = Math.abs(
        firstVideoIdCount - secondVideoIdCount,
      );
      expect(videoCountDiffernce).to.be.lessThan(10);
      // console.log(JSON.stringify(currentVideoIdCount))
      // expect(currentVideoIdCount).to.greaterThan(firstVideoIdCount);
    },
  });
*/
});
