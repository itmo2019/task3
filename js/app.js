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
    if (currentMessage.getAttribute("state") != "hidden") {
        return;
    }
    currentMessage.setAttribute("state", "showing");
    setTimeout(function() {
        currentMessage.removeAttribute("state");
    }, 400);
}

function deleteMessage() {
    var messages = document.getElementsByClassName("mailbox__mail");
    var index = 3;

    if (index >= messages.length) {
        window.alert("No spam messages to delete");
        return;
    }

    var currentMessage = messages[index];
    currentMessage.setAttribute("state", "deleted");
    var parent = currentMessage.parentNode;
    setTimeout(function() {
        currentMessage.remove();
    }, 400);
}