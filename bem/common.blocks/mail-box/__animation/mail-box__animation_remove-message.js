setRemoveListener();

function setRemoveListener() {
    let remove_buton = document.body
        .getElementsByClassName('actions__item')[2];
    remove_buton
        .addEventListener('click', () => removeMessages());
}

function removeMessage(message) {
    message.classList.add("fade-out");
}

function removeMessages() {
    let messages = document.body.getElementsByClassName('message');
    let rem_messages = Array.prototype.filter.call(messages,
        elem => {
            return elem.getElementsByClassName('message__checkbox')[0].checked
        });
    rem_messages.forEach(message => {
        removeMessage(message);
        setTimeout(() => message.parentNode.removeChild(message), 1000);
    });
}

