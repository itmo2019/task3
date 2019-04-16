document.onkeypress = function(event) {
    if (event.key == 'n') {
        newMessage();
    }
    if (event.key == 'd') {
        deleteMessage();
    }
}

function newMessage() {
    var currentMessage = document.getElementsByClassName("mailbox__mail")[0];
    if (currentMessage.getAttribute("data-state") != "hidden") {
        return;
    }
    var newMessage = currentMessage.cloneNode(true);
    document.getElementsByClassName("mailbox__mail-list")[0].insertBefore(newMessage, currentMessage);
    currentMessage.setAttribute("data-state", "showing");
    currentMessage.addEventListener('transitionend', function() {
        currentMessage.removeAttribute("data-state");
    });
}

function deleteMessage() {
    deleteMessageByIndex(3);
}

function deleteMessageByIndex(index) {
    var messages = document.getElementsByClassName("mailbox__mail");

    if (index >= messages.length) {
        window.alert("Cannot delete message");
        return;
    }

    var currentMessage = messages[index];
    deleteMessageByElement(currentMessage);
}

function deleteMessageByElement(messageElement) {
    messageElement.setAttribute("data-state", "deleted");
    
    messageElement.addEventListener('animationend', function() {
        messageElement.remove();
    });
}

function deleteSelected() {
    var mailList = Array.from(document.getElementsByClassName("mailbox__mail"));
    var checkedMailList = mailList.filter(mail => mail.getElementsByClassName("checkbox__input")[0].checked);
    checkedMailList.forEach(deleteMessageByElement);
}