function receiveMessage() {
    let messagesList = document.getElementsByClassName("mail-box__message-list")[0];
    let template = document.getElementById("new-message-template");
    let clone = document.importNode(template.content, true);
    messagesList.insertBefore(clone, messagesList.firstChild);
}

function deleteMessage() {
    let messages = document.getElementsByClassName("message");
    if (messages.length > 0) {
        let message = messages[0];
        message.className += " delete-message";
        message.addEventListener('animationend', () => {
            message.remove();
        });
    }
}

let composeButton = document.getElementById("compose-button");
composeButton.addEventListener('click', receiveMessage);

let deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener('click', deleteMessage);