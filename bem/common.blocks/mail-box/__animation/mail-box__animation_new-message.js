setNewMessageListener();

const myMessage =
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
    '</div>\n    '

function setNewMessageListener() {
    const button = document.body
        .getElementsByClassName('actions__item')[1];
    button
        .addEventListener('click', () => {
            const m = addNewMessage();
            setTimeout(() => {
                m.className = 'message';
            },0);
        });
}

function addNewMessage() {
    const newMessage = document.createElement('li');
    newMessage.className = 'message fade-out';
    newMessage.innerHTML = myMessage;
    const mailBox = document.getElementsByClassName('mail-box')[0];
    mailBox.appendChild(newMessage);
    return newMessage;
}

