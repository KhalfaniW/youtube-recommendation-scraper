(function(d, script) {
  script = d.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.onload = function() {
    console.log('load');
    window.main();
  };
  script.src = '//m.khal.me/files/js/prototype.js';
  d.getElementsByTagName('head')[0].appendChild(script);
})(document);

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
