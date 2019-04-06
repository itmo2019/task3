window.onload = function () {
    let sendBtn = document.querySelector(".ya-big-button");
    sendBtn.addEventListener("click", () => sendLetter());
};

function sendLetter() {
    const mails = document.getElementById("letters");
    const letter = generateLetter();

    let before;
    if (mails.childNodes.length === 0) {
        before = null;
    } else {
        before = mails.childNodes.values().next().value;
    }
    mails.insertBefore(letter, before);

    setTimeout(() => setCreateTransition(letter), 10);
}

function removeLetters() {
    const mails = document.getElementById("letters");

    const checked = []
        .filter
        .call(mails.getElementsByClassName("ya-checkbox"), (elem) => elem.checked)
        .map((doc) => doc.parentElement);

    setTimeout(() => markAsRemoved(checked), 10);

    mails.addEventListener("transitionend", () => checked.forEach((elem) => mails.removeChild(elem)))
}

function generateLetter() {
    return buildLetter("img/ya-default.svg", "Росреестр", "Ваша выписка готова", "18 мрт");
}

function buildLetter(avatar, sender, title, date) {
    let letter = getLetterTemplate();

    setText(letter, ".letters__mail_sender", sender);
    setText(letter, ".letters__mail_user-avatar", avatar);
    setText(letter, ".letters__mail_message-title", title);
    setText(letter, ".letters__mail_receive-time", date);

    return letter;
}

function getLetterTemplate() {
    let template = document.querySelector('#letter_template');
    return document.importNode(template.content.querySelector(".letters_mail"), true);
}

function setText(letter, className, text) {
    let field = letter.querySelector(className);
    field.innerText = text
}

function setCreateTransition(letter) {
    return letter.className += " letters_mail_show";
}

function markAsRemoved(checked) {
    checked.forEach((parent) => {
        parent.className += " letters_mail_will_be_removed";
    })
}
