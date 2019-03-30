let messagesContainer = document.getElementsByClassName('messages-box');

function createMessage() {
    return  `            <input class="message__checkbox" type="checkbox">
            <img class="message__ya-img" src="resources/ya-default.png">
            <div class="message__sender">Яндекс</div>
            <span class="message__unread-circle"></span>
            <div class="message__theme">Соберите всю почту в ящик</div>
            <div class="message__date">6 июл</div>`;
}

function addMessage() {
    let newMessage = document.createElement('div');
    newMessage.className = 'message';
    newMessage.innerHTML = createMessage();
    newMessage.classList.add("add-message-animation");
    messagesContainer[0].insertBefore(newMessage, messagesContainer[0].firstChild);
    newMessage.addEventListener("animationend", () => {
        newMessage.classList.remove("add-message-animation");
    });
}

function removeElement(el) {
    el.classList.add("delete-message-animation");
    el.addEventListener("animationend", () => {
        el.remove();
    });
}

function deleteMessages() {
    let checkboxes = document.body.querySelectorAll('.message__checkbox');
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
    let checkboxes = document.body.querySelectorAll('.message__checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
        console.log(checkboxes[i].id);
        if (checkboxes[i].id === "show-page-checkbox") continue;
        checkboxes[i].checked = isCheckedAll;
    }
}

document.getElementById('button-add-message').addEventListener("click", addMessage);
document.getElementById('button-remove-message').addEventListener("click", deleteMessages);
document.getElementById('select-all-checkbox').addEventListener("click", selectAllMessages);
