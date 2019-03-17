var counter = 1;
let messagesContainer = document.getElementById('messages-container');

function createMessage() {
    return '                <input class="message-selector" type="checkbox">\n' +
        '                <img class="ya-img" src="resources/ya-default.png">\n' +
        '                <div class="message-sender">Яндекс</div>\n' +
        '                <span class="unread-circle"></span>\n' +
        '                <div class="message-theme">Сообщение №' + counter++ + '</div>\n' +
        '                <div class="message-date">6 июл</div>';
}

function addMessage() {
    let newMessage = document.createElement('div');
    newMessage.className = 'message-container';
    newMessage.innerHTML = createMessage();
    messagesContainer.insertBefore(newMessage, messagesContainer.firstChild);

    let animationDuration = 1000;
    let fps = animationDuration / 30;
    animate(newMessage, fps, animationDuration, false);
}

function animate(el, fps, animationDuration, isRemove) {
    var startTime = performance.now();
    requestAnimationFrame(function animate(curTime) {
        var timePassed = curTime - startTime;
        if (timePassed > animationDuration) timePassed = animationDuration;

        function draw(timePassed) {
            var shift = (timePassed / fps);
            el.style.height = isRemove ? (30 - shift) + 'px' : shift + 'px';
            el.style.opacity = isRemove ? 1 - shift / 30 : shift / 30;
        }

        draw(timePassed);
        if (timePassed < animationDuration) {
            requestAnimationFrame(animate);
        }
    });
    if (isRemove) {
        el.style.paddingTop = '0px';
        el.style.paddingBottom = '0px';
        setTimeout(function () {
            el.parentNode.removeChild(el);
        }, animationDuration);
    }
}

function removeElement(el) {
    let animationDuration = 1000;
    let fps = animationDuration / 30;
    animate(el, fps, animationDuration, true);
}


function deleteMessages() {
    let checkboxes = document.body.querySelectorAll('.message-selector');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            let message = checkboxes[i].parentElement;
            removeElement(message);
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
