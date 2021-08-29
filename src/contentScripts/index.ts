/* eslint-disable no-alert */
/* eslint-disable no-console */
// import { onMessage } from 'webext-bridge'

// console.info('[vitesse-webext] Hello world from content script')

// communication example: send previous tab title from background page
// onMessage('tab-prev', ({ data }) => {
//   console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
// })

import { findButtons, findLinks } from './helpers'

// const targetButton = findButtonbyTextContent('\nZahlungspflichtig bestellen\n');
const targetButtons = findButtons()
const targetLinks = findLinks()

// const msg = {
//   subject: 'Parental%20Control%',
//   content: 'Hier%20kommt%20noch%20Text%20rein',
// }
// const mailtoMsg = `mailto:yourTrustWorthyFamilyMember@gmail.de?subject=${msg.subject}&body=${msg.content}`
// const altMsg = `hierkommtsan@web.de?BCC=empfänger@gmx.de&Subject=${msg.subject}&Body=Und%20hier%20der%20Body`
const longMsg = 'mailto:yourTrustWorthyFamilyMember@gmail.de?subject=Partental%20Control%3A%20Es%20wird%20bestellt!&body=Ich%20habe%20vor%20hier%3A%20URL%20etwas%20zu%20bestellen!%0D%0A%0D%0ASchaut%20euch%20das%20doch%20bitte%20kurz%20an%20%3A)%0D%0A%0D%0ALiebe%20Gr%C3%BCsse%2C%0D%0AVadder'


targetButtons?.forEach((btn) => {
  btn.innerText = 'Rufste lieber mal deinen Sohn an :)'
  // btn.disabled = true
  btn.onclick = () => { }
  btn.onsubmit = () => { }
  btn.onfocus = () => { }
  btn.click = () => { }
  btn.addEventListener('click', () => {
    console.log('Buttonclick')
    if (window.confirm('Du willst was kaufen? Schreib deinem Sohn ne Mail'))
      window.location.href = `mailto:${longMsg}`
  })
})
targetLinks?.forEach((lnk) => {
  lnk.innerText = 'Rufste lieber mein deinen Sohn an :)'
  // lnk.style.pointerEvents = 'none'
  lnk.href = ''
  lnk.onclick = () => {
    if (window.confirm('Du willst was kaufen? Schreib deinem Sohn ne Mail'))
      window.location.href = `mailto:${longMsg}`;
  }
})
