let defaultMessage = '                <input class="message-selector" type="checkbox">\n' +
    '                <img class="ya-img" src="resources/ya-default.png">\n' +
    '                <div class="message-sender">Яндекс</div>\n' +
    '                <span class="unread-circle"></span>\n' +
    '                <div class="message-theme">Соберите всю почту в ящик</div>\n' +
    '                <div class="message-date">6 июл</div>';



let messagesContainer = document.getElementById('messages-container');

function addMessage() {
    let newMessage = document.createElement('div');
    newMessage.className = 'message-container';
    newMessage.innerHTML = defaultMessage;
    messagesContainer.insertBefore(newMessage, messagesContainer.firstChild);
    let animationDuration = 500;
    let height = 30;
    let durationPerPixel = animationDuration / height;

    var startTime = performance.now();
    requestAnimationFrame(function animate(curTime) {
        var timePassed = curTime - startTime;
        if (timePassed > animationDuration) timePassed = animationDuration;
        function draw(timePassed) {
            var shift = (timePassed / durationPerPixel);
            newMessage.style.height = shift + 'px';
        }
        draw(timePassed);
        if (timePassed < animationDuration) {
            requestAnimationFrame(animate);
        }
    });
    console.log("Hey");
}

function deleteMessages() {
    let checkboxes = document.body.querySelectorAll('.message-selector');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            let message = checkboxes[i].parentElement;
            messagesContainer.removeChild(message);
        }
    }
}

function selectAllMessages() {
    let isCheckedAll = document.querySelector('#select-all-checkbox').checked;
    console.log(isCheckedAll);
    let checkboxes = document.body.querySelectorAll('.message-selector');
    for (let i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i].id);
        if (checkboxes[i].id === "show-page-checkbox") continue;
        checkboxes[i].checked = isCheckedAll;
    }
}

document.getElementById('button-add-message').addEventListener("click", addMessage);
document.getElementById('remove-message').addEventListener("click", deleteMessages);
document.getElementById('select-all-checkbox').addEventListener("click", selectAllMessages);
