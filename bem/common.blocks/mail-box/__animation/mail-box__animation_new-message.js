setNewMessageListener();

let myMessage = '<li class="message">\n    ' +
    '<label>\n' +
    '        <input class="checkbox message__checkbox" type="checkbox">\n    ' +
    '</label>\n    ' +
    '<img class="message__avatar" src="img/yandex-logo.png" alt="Я">\n    ' +
    '<div class="message__sender">\n' +
    '        <a href="" class="message__text">\n' +
    '            Яндекс.Паспорт\n' +
    '        </a>\n    ' +
    '</div>\n    ' +
    '<div class="message__unread-dot message__unread-dot_disable"></div>\n    ' +
    '<div class="message__topic">\n' +
    '        <a href="" class="message__text">\n' +
    '            Доступ к аккаунту восстановлен\n' +
    '        </a>\n    ' +
    '</div>\n    ' +
    '<div class="message__date">\n' +
    '        <a href="" class="message__text">\n' +
    '            6 авг\n' +
    '        </a>\n    ' +
    '</div>\n    ' +
    '</li>'

function setNewMessageListener() {
    let button = document.body
        .getElementsByClassName('actions__item')[1];
    button
        .addEventListener('click', () => addNewMessage());
}

function addNewMessage() {
    let newMessage = document.createElement('li');
    newMessage.className = 'message';
    newMessage.innerHTML = myMessage;

    let mailBox = document.getElementsByClassName('mail-box')[0];
    mailBox.appendChild(newMessage);
}

