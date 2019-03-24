let children = [];

let ctx = undefined;
const senders = ["Полиция мемов", "Яндекс.Такси", "ГоСуслуги"];
const themes = ["Запощен недопустимый мем", "До Краснодара за 55000P", "Ваша справка готова"];
const dates = ["31 тра", "29 сич", "15 лис"];

function addLetter(sender, unread, theme, date) {
    let before;
    const inbox = document.getElementById("inbox");
    const letter =
        x("div", "letters_letter", () => {
            if (unread) {
                ctx.className += " letters_letter_unread";
            }
            //ctx.style.setProperty("display", "none");
            children.push(x("label", "checkbox", () => {
                children.push(x("input", "checkbox-input", () => {
                    ctx.setAttribute("type", "checkbox");
                }));
            }));
            children.push(x("a", "link_unset_style", () => {
                ctx.attributes["href"] = "#";
                children.push(x("div", "letters_sender_icon", () => {
                    children.push(x("span", "single-letter", () => sender[0]));
                }));
                children.push(x("p", "letters_sender_name single-line", () => sender));
                children.push(x("div", "letters_read_box"));
                children.push(x("p", "single-line letters_preview", () => theme));
                children.push(x("div", "letters_date gray-text", () => {
                    children.push(x("p", "single-line", () => date));
                }));
            }))
        });
    if (inbox.childNodes.length === 0) {
        before = null;
    } else {
        before = inbox.childNodes.values().next().value;
    }
    letter.style.setProperty("animation", "add_animation 0.5s");
    letter.style.setProperty("animation-fill-mode", "forwards");
    inbox.insertBefore(letter, before)
}

function deleteSelectedLetters() {
    const checked = [].filter
        .call(document.getElementsByClassName("checkbox__input"), (elem) => elem.checked)
        .map((doc) => parentWithClass(doc, "letters_letter"));
    checked.forEach((parent) => {
        parent.style.setProperty("animation", "delete_animation 0.5s");
        parent.style.setProperty("animation-fill-mode", "forwards");
    });
    const inbox = document.getElementById("inbox");
    setTimeout(() => checked.forEach((elem) => inbox.removeChild(elem)), 2000)
}

function parentWithClass(element, className) {
    if (element.className.startsWith(className)) {
        return element
    } else {
        return parentWithClass(element.parentElement, className)
    }
}

function addRandomLetter() {
    const date = new Date();
    const senderIndex = date.getMilliseconds() % 3;
    addLetter(senders[senderIndex], date.getSeconds() % 2 === 0, themes[senderIndex], dates[senderIndex])
}

function x(tag, style, builder) {
    const element = document.createElement(tag);
    const oldCtx = ctx;
    const oldChildren = children;
    children = [];
    ctx = element;
    element.className = style;
    if (builder !== undefined) {
        const ret = builder();
        if (ret !== undefined) {
            element.innerText = ret
        }
    }
    children.forEach((child) => element.appendChild(child));
    ctx = oldCtx;
    children = oldChildren;
    return element
}