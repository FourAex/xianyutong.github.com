(function (doc, win) {
  let docEl = win.document.documentElement;
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  let metaEl = doc.querySelector('meta[name="viewport"]');
  let dpr = 0;
  let scale = 0;

  if (!dpr && !scale) {
    let isIPhone = win.navigator.appVersion.match(/[iphone|ipad]/gi);
    let devicePixelRatio = win.devicePixelRatio;

    if(isIPhone) {
      dpr = devicePixelRatio;
    } else {
      dpr = 1;
    }

    scale = 1 / dpr;
  }

  docEl.setAttribute('data-dpr', dpr);

  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    document.documentElement.firstElementChild.appendChild(metaEl);
  } else {
    metaEl.setAttribute('content', 'width=device-width, initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
  }

  let refreshRem = function () {
    let clientWidth = win.innerWidth
        || doc.documentElement.clientWidth
        || doc.body.clientWidth;

    if (!clientWidth) return;
    let fz;
    let width = clientWidth;
    fz = 100 * width / 375;
    docEl.style.fontSize = fz + 'px';
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, refreshRem, false);
  doc.addEventListener('DOMContentLoaded', refreshRem, false);
  refreshRem();
})(document, window);