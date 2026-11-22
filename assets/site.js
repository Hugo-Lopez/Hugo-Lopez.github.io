/* The page itself needs no script. This file only loads Google Analytics, and
   only on the live site, never in a local preview. */
(function () {
  'use strict';

  if (window.location.hostname !== 'hugo-lopez.github.io') return;

  var tag = document.createElement('script');
  tag.async = true;
  tag.src = 'https://www.googletagmanager.com/gtag/js?id=G-G5PNKLKZ4H';
  document.head.appendChild(tag);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', 'G-G5PNKLKZ4H');
})();
