/* eslint-disable no-console */
// import { onMessage } from 'webext-bridge'

// console.info('[vitesse-webext] Hello world from content script')

// communication example: send previous tab title from background page
// onMessage('tab-prev', ({ data }) => {
//   console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
// })

import { findButtons, findLinks } from './helpers';

// const targetButton = findButtonbyTextContent('\nZahlungspflichtig bestellen\n');
const targetButtons = findButtons();
const targetLinks = findLinks();

targetButtons?.forEach(btn => {
  btn.innerText = 'Rufste lieber mein deinen Sohn an :)';

  btn.addEventListener('click', () => {
    if (window.confirm('Du willst was kaufen? Schreib deinem Sohn ne Mail')) {
      window.location.href = 'mailto:yourTrustWorthyFamilyMember@gmail.de';
    } else {
      return
    }
  })

})
targetLinks?.forEach(lnk => {
  lnk.innerText = 'Rufste lieber mein deinen Sohn an :)';

  lnk.addEventListener('click', () => {
    if (window.confirm('Du willst was kaufen? Schreib deinem Sohn ne Mail')) {
      window.location.href = 'mailto:yourTrustWorthyFamilyMember@gmail.de';
    } else {
      return
    }
  })

})
