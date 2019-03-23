let newMessageBody = ''+
'<input type="checkbox" class="message__message-select">\n'+
'<img class="message__author-avatar" width="30px" height="30px">\n'+
'<span class="message__author-name">Яндекс.Паспорт</span>\n'+
'<input type="checkbox" class="message__mark-as-read-tick">\n'+
'<span class="message__message-subject">Доступ к аккаунту восстановлен</span>\n'+
'<time class="message__message-receive-time">5 авг</time>';

function createMessage() {
    let list = document.getElementsByClassName('content-messages__message-list')[0];
    let newMessage = document.createElement('li');
    newMessage.className = 'message message_unread message-list__message';
    newMessage.innerHTML = newMessageBody;
    list.insertBefore(newMessage, list.children[0]);

    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 37) {
            clearInterval(id);
        } else {
            pos++; 
            newMessage.style.height = pos + "px";
        }
    }
}

function deleteSelected() {
    let checkboxes = document.getElementsByClassName('message__message-select');
    let list = document.getElementsByClassName('content-messages__message-list')[0];
    for (let i = 0; i < checkboxes.length; ++i) {
        if (checkboxes[i].checked) {
            let curMessage = checkboxes[i].parentElement;
            var pos = 37;
            var id = setInterval(frame, 5);
            function frame() {
                if (pos == 0) {
                    clearInterval(id);
                } else {
                    pos--;
                    curMessage.style.height = pos + "px";
                }
            }
        }
    }
    
    for (let i = 0; i < checkboxes.length; ++i) {
        if (checkboxes[i].checked) {
            let curMessage = checkboxes[i].parentElement;
            list.removeChild(curMessage);
            i--;
        }
    }
}