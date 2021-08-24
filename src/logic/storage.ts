import { useLocalStorage } from '@vueuse/core'

export const storageParentControl = useLocalStorage('parent-control', 'Settings Store', { listenToStorageChanges: true })
