import { sendMessage } from 'webext-bridge'
import browser from 'webextension-polyfill'
import { storageParentControl } from '~/logic'


if (import.meta.hot)
  // @ts-expect-error for background HMR on dev
  import('/@vite/client')

let lastTabId = 0

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.log('Extension installed',)
})

browser.tabs.onUpdated.addListener(async (tabId) => {
  console.log("update", tabId)
  if (tabId === lastTabId) {
    return
  }
  console.log("Update", tabId)
  sendMessage('store', {
    targetWords: `${storageParentControl.value}`
  }, {
    context: 'content-script', tabId
  })
  lastTabId = tabId
})

// see shim.d.ts for type declaration
browser.tabs.onCreated.addListener(async ({ id }) => {
  console.log("onCreate", id)
  if (id) {
    sendMessage('store', {
      targetWords: `${storageParentControl.value}`
    }, {
      context: 'content-script', tabId: id
    })
  }

})



