let children = [];
let ctx = undefined;

function sendLetter() {
    const mails = document.getElementById("letters");
    const letter = buildLetter();

    let before;
    if (mails.childNodes.length === 0) {
        before = null;
    } else {
        before = mails.childNodes.values().next().value;
    }
    setAnimation(letter, "create_animation 0.25s");
    mails.insertBefore(letter, before)
}


function removeLetters() {
    const checked = []
        .filter
        .call(document.getElementsByClassName("ya-checkbox"), (elem) => elem.checked)
        .filter((elem) => elem.id.localeCompare("select-all") !== 0 )
        .map((doc) => doc.parentElement);

    checked.forEach((parent) => {
        setAnimation(parent, "delete_animation 0.6s");
    });

    const mails = document.getElementById("letters");
    setTimeout(() => checked.forEach((elem) => mails.removeChild(elem)), 700)
}

function buildLetter() {
    return tg("div", "letters_mail unread", () => {
        createYaCheckbox();
        createUserAvatar();
        createSender();
        createTitle();
        createReceiveTime();
    });
}

function createTitle() {
    children.push(tg("input", "letters__mail_read-mark", () => {
        ctx.setAttribute("type", "checkbox");
    }));
    children.push(tg("span", "letters__mail_message-title", () => "Ваша выписка готова"));
}

function createSender() {
    children.push(tg("span", "letters__mail_sender", () => "Росреестр"));
}

function createReceiveTime() {
    children.push(tg("span", "letters__mail_receive-time", () => "18 мрт"));
}

function createYaCheckbox() {
    children.push(tg("input", "ya-checkbox", () => {
        ctx.setAttribute("type", "checkbox");
    }));
}

function createUserAvatar() {
    children.push(tg("img", "letters__mail_user-avatar", () => {
        ctx.setAttribute("src", "img/ya-default.svg");
    }));
}

function setAnimation(elem, animation) {
    elem.style.setProperty("animation", animation);
    elem.style.setProperty("animation-fill-mode", "forwards");
}

function tg(tag, style, builder) {
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