/* eslint-disable no-alert */
/* eslint-disable no-console */
import { findButtons, findLinks, Target } from './helpers';

console.info('[vitesse-webext] Hello world from content script')

const targets: Target[] = [];


export const startFilter = async () => {
  const targetButtons = await findButtons();
  const targetLinks = await findLinks();

  targetButtons?.forEach((btn) => {
    targets.push(btn);
  });

  targetLinks?.forEach((lnk) => {
    targets.push(lnk);
  });

  targets.forEach((target): void => {
    target.innerText = 'HACKED';
    if (target instanceof HTMLAnchorElement)
      target.href = '';
    if (target instanceof HTMLButtonElement)
      target.disabled = true;

    target.addEventListener('click', () => {
      if (window.confirm('Du willst was kaufen? Schreib deinem Sohn ne Mail'))
        window.location.href = 'mailto:yourTrustWorthyFamilyMember@gmail.de';
    });
  });
}

window.addEventListener('load', (event) => {
  console.log("PAGE FULLY LOADED")
  startFilter()
});