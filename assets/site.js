(function () {
  'use strict';

  /* ---------- Abstracts ---------- */

  function setOpen(button, open) {
    var panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) return;
    panel.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  var toggles = document.querySelectorAll('.toggle');
  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', function () {
      setOpen(this, this.getAttribute('aria-expanded') !== 'true');
    });
  }

  // A link that ends in a paper's id, such as /#klr, arrives with that abstract open.
  function openFromAddress() {
    var id = window.location.hash.slice(1);
    if (!id) return;
    var paper = document.getElementById(id);
    var button = paper && paper.querySelector('.toggle');
    if (button) setOpen(button, true);
  }

  openFromAddress();
  window.addEventListener('hashchange', openFromAddress);

  /* ---------- Analytics: only on the live site, never in local preview ---------- */

  if (window.location.hostname === 'hugo-lopez.github.io') {
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
  }
})();
