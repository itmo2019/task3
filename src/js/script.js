let newLetterString = '<li class="message new-message">' +
    '<div class="checkbox message__checkbox">' +
    '<label>' +
    '<input type="checkbox" class="checkbox__input">' +
    '<span class="checkbox__custom"></span>' +
    '</label>' +
    '</div>' +
    '<span class="message__content">' +
    '<span class="message__sender">' +
    '<img class="message__sender-picture" src="images/yandex-logo.png" width="30">\n' +
    '<span class="message__sender-name">Яндекс</span>' +
    '</span>' +
    '<span class="is-read-mark is-read-mark message__is-read-mark is-read-mark_read"></span>' +
    '<span class="message__text">' +
    '<span class="message__text-inner">' +
    'Новое сообщение!' +
    '</span>' +
    '</span>' +
    '<span class="message__date"><time datetime="08-06">6 июл</time></span>' +
    '</span>' +
    '</li>';

function receiveMessage() {
    let messagesList = document.getElementsByClassName("mail-box__message-list")[0];
    let newLetterNode = new DOMParser().parseFromString(newLetterString, "text/html");
    console.log(newLetterNode.body.firstChild);
    messagesList.insertBefore(newLetterNode.body.firstChild, messagesList.firstChild);
}

function deleteMessage() {
    let messages = document.getElementsByClassName("message");
    let message = messages[0];
    message.className += " delete-message";
    setTimeout( function() {
        message.remove();
    }, 1000);
}

let composeButton = document.getElementById("compose-button");
composeButton.addEventListener('click', receiveMessage);

let deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener('click', deleteMessage);