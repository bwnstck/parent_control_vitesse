/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/indent */
const regex = /Kasse/gi;

export type Target = HTMLButtonElement | HTMLAnchorElement;

const checkRegex = (element: HTMLCollectionOf<Target>) => {
    const foundItems = [];
    for (let i = 0; i < element.length; i++) {
        if (regex.test(element[i].innerText)) {
            console.log(element[i].innerText, regex.test(element[i].innerText));
            foundItems.push(element[i]);
        }
    }
    return foundItems;
};
export const findButtons = (): Target[] | undefined => {
    const buttons = document.getElementsByTagName('button');
    const foundButtons = checkRegex(buttons);
    console.log({ foundButtons });
    return foundButtons;
};

export const findLinks = (): Target[] | undefined => {
    const links = document.getElementsByTagName('a');
    const foundLinks = checkRegex(links);
    console.log({ foundLinks });
    return foundLinks;
};
