import { useLocalStorage } from '@vueuse/core'

export const storageParentControl = useLocalStorage('parent-control', 'warenkorb, kasse, registrieren', { listenToStorageChanges: true })
