import { storageParentControl } from '~/logic';
/* eslint-disable no-console */

const words = storageParentControl.value

const formatWordsToRegex = (words: string): RegExp => {
    const formattedWords = words.split("")
    console.log({ formattedWords })
    const regexedWords = new RegExp(`${formattedWords}`, "gi")
    return regexedWords
}


const regex = /(Kasse|Registrieren|Sign up| Buy)/gi


export const findButtons = (): HTMLButtonElement[] => {
    const buttons = document.getElementsByTagName('button')
    formatWordsToRegex(words)
    console.log("BUTTONS")
    const foundButtons = []
    for (let i = 0; i < buttons.length; i++) {
        if (regex.test(buttons[i].innerText)) {
            console.log(buttons[i].innerText, buttons[i].innerHTML)
            foundButtons.push(buttons[i])
        }
    }
    return foundButtons
}

export const findLinks = (): HTMLAnchorElement[] => {
    console.log("LINKS")
    const links = document.getElementsByTagName('a')
    const foundLinks = []
    for (let i = 0; i < links.length; i++) {
        if (regex.test(links[i].innerText)) {
            console.log(links[i].innerText, links[i].innerHTML)
            foundLinks.push(links[i])
        }
    }
    return foundLinks
}
