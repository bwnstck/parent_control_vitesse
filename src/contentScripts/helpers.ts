const regex = /Kasse/gi

export const findButtons = (): HTMLButtonElement[] | undefined => {
    const buttons = document.getElementsByTagName('button');
    const foundButtons = []
    for (let i = 0; i < buttons.length; i++) {
        if (regex.test(buttons[i].innerText)) {
            console.log(buttons[i].innerText, regex.test(buttons[i].innerText))
            foundButtons.push(buttons[i])
        }
    }
    console.log({ foundButtons })
    return foundButtons
};

export const findLinks = (): HTMLAnchorElement[] | undefined => {
    const links = document.getElementsByTagName('a');
    const foundLinks = []
    for (let i = 0; i < links.length; i++) {
        if (regex.test(links[i].innerText)) {
            console.log(links[i].innerText, regex.test(links[i].innerText))
            foundLinks.push(links[i])
        }
    }
    console.log({ foundLinks })
    return foundLinks
}