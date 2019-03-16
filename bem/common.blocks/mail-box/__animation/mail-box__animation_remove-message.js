setRemoveListener();

function setRemoveListener() {
    let remove_buton = document.body
        .getElementsByClassName('actions__item')[2];
    remove_buton
        .addEventListener('click', () => removeMessages());
}

function removeMessage(message) {
    let id = setInterval(disappearing, 5);
    let duration = 100.0;
    let k = 0;
    let stepOpacity = 1.0/duration;
    function disappearing() {
        if (k === duration) {
            clearInterval(id);
        } else {
            k++;
            message.style.opacity = (1.0 - k * stepOpacity).toString();
        }
    }
}

function removeMessages() {
    let messages = document.body.getElementsByClassName('message');
    let rem_messages = Array.prototype.filter.call(messages,
        elem => {
            return elem.getElementsByClassName('message__checkbox')[0].checked
        });
    rem_messages.forEach(message => {
        removeMessage(message);
        setTimeout(() => message.parentNode.removeChild(message), 500);
    });
}

