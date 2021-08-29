import { sendMessage } from 'webext-bridge'
import browser from 'webextension-polyfill'
import { storageParentControl } from '~/logic'


if (import.meta.hot)
  // @ts-expect-error for background HMR on dev
  import('/@vite/client')

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log('Extension installed')
})


// see shim.d.ts for type declaration
browser.tabs.onActivated.addListener(async ({ tabId }) => {
  sendMessage('store', { targetWords: `${storageParentControl.value}` }, { context: 'content-script', tabId })

})


