import { onMessage } from 'webext-bridge';
import { startFilter } from '.';

/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/indent */
let regex = /mee/gi;
export type Target = HTMLButtonElement | HTMLAnchorElement;


onMessage('store', ({ data }) => {
    if (data.targetWords) {
        const str = data.targetWords.replace(/\s+/g, '');
        const separatedWords = str.split(',')
        const finalString = separatedWords.reduce((acc, word, i) => {
            switch (i) {
                case 0:
                    return word
                    break;
                case separatedWords.length:
                    return acc + word
                    break;
                default:
                    return acc + '|' + word
                    break;
            }
        }, "")

        regex = new RegExp(`(${finalString})`, "gi")
        console.log(regex)
    }
    startFilter()
})


const checkRegex = async (element: HTMLCollectionOf<Target>) => {
    const foundItems = [];
    for (let i = 0; i < element.length; i++) {
        if (regex.test(element[i].innerText)) {
            console.log(element[i].innerText, regex.test(element[i].innerText));
            foundItems.push(element[i]);
        }
    }
    return foundItems;
};
export const findButtons = async (): Promise<Target[] | undefined> => {
    console.log("REGEX: ", regex)
    const buttons = document.getElementsByTagName('button');
    const foundButtons = await checkRegex(buttons);
    if (foundButtons.length) {
        console.log("btn", foundButtons);
    } else {
        console.log("NO BUTTONS")
        return undefined
    }
    return foundButtons;
};

export const findLinks = async (): Promise<Target[] | undefined> => {
    console.log("REGEX: ", regex)
    const links = document.getElementsByTagName('a');
    const foundLinks = await checkRegex(links);
    // console.log("links", foundLinks);
    return foundLinks;
};
