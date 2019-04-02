var countLetter = 1;
let createNewLetter = document.getElementById("new-letter-button");
let mailsPlaceholder = document.getElementById("mails-placeholder");


createNewLetter.addEventListener("click", addLetter);
document.addEventListener("DOMContentLoaded", addLetter);
mailsPlaceholder.addEventListener('click', deleteMessage);

function addLetter() {
    let items = mailsPlaceholder.getElementsByClassName("mail");
    let element = createLetter(countLetter);
    if (items.length === 0) {
        mailsPlaceholder.appendChild(element);
    } else {
        let before = mailsPlaceholder.getElementsByClassName("mail")[0];
        mailsPlaceholder.insertBefore(element, before);
    }
    element.offsetHeight;
    element.classList.add("create-animation");
    countLetter++;
}

function createLetter(id) {
    let template = document.querySelector("#mail-template");
    let innerDiv = document.importNode(template.content.querySelector("div"), true);
    let titleDiv = innerDiv.querySelector(".mail__title");
    innerDiv.setAttribute("id", "mail-" + id.toString());
    titleDiv.innerText += id.toString();
    return innerDiv;
}

function deleteMessage(event) {
    if (event.target === undefined || event.target.getAttribute("data-delete") === null) {
        return;
    }
    let mail = findMail(event.target);
    if (mail === null) {
        return;
    }
    mail.classList.add("delete-animation");
    mail.addEventListener('transitionend', (event) => {
        event.target.remove();
    });
}

function findMail(element) {
    let tmp = element;
    while (tmp !== null) {
        let classes = tmp.classList;
        if (classes.contains('mail') && tmp.getAttribute('id') !== null) {
            return tmp;
        }
        tmp = tmp.parentNode;
    }
    return null;
}
