let newMessageBody = ''+
'<input type="checkbox" class="message__elem message__message-select page_checkbox">\n'+
'<img class="message__elem message__author-avatar" src="images/ya-message-logo.svg" width="30px" height="30px">\n'+
'<span class="message__elem message__author-name page_text-overflow_hide">Яндекс.Паспорт</span>\n'+
'<div class="message__elem message__mark-as-read-tick"></div>\n'+
'<span class="message__elem message__message-subject page_text-overflow_hide">Доступ к аккаунту восстановлен</span>\n'+
'<time class="message__elem message__message-receive-time page_text-overflow_hide">5 авг</time>';

function createMessage() {
    let list = document.getElementsByClassName('content-messages__message-list')[0];
    let newMessage = document.createElement('li');
    newMessage.className = 'message message_unread content-messages__message create_animation';
    newMessage.innerHTML = newMessageBody;
    list.insertBefore(newMessage, list.children[0]);
    setTimeout(() => {
        newMessage.classList.remove('create_animation');
    }, 1000);
}

function deleteSelected() {
    let checkboxes = document.getElementsByClassName('message__message-select');
    let list = document.getElementsByClassName('content-messages__message-list')[0];
    for (let i = 0; i < checkboxes.length; ++i) {
        if (checkboxes[i].checked) {
            let curMessage = checkboxes[i].parentElement;
            curMessage.classList.add('delete_animation');
            setTimeout(() => {
                list.removeChild(curMessage);
            }, 2000);
        }
    }
}