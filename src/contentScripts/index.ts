/* eslint-disable no-alert */
/* eslint-disable no-console */
// import { onMessage } from 'webext-bridge'

// console.info('[vitesse-webext] Hello world from content script')

// communication example: send previous tab title from background page
// onMessage('tab-prev', ({ data }) => {
//   console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
// })

import { findButtons, findLinks, Target } from './helpers';

const targets: Target[] = [];

const targetButtons = findButtons();
const targetLinks = findLinks();

targetButtons?.forEach((btn) => {
  targets.push(btn);
});

targetLinks?.forEach((lnk) => {
  targets.push(lnk);
});

targets.forEach((target): void => {
  target.innerText = 'Rufste lieber ma deinen Sohn an :)';
  console.log({ target });
  if (target instanceof HTMLAnchorElement)
    target.href = '';

  target.addEventListener('click', () => {
    if (window.confirm('Du willst was kaufen? Schreib deinem Sohn ne Mail'))
      window.location.href = 'mailto:yourTrustWorthyFamilyMember@gmail.de';
  });
});
