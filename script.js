let addMessageButton = document.querySelector(".new_message");
addMessageButton.addEventListener("click", addMessage);

let deleteMessageButton = document.querySelector(".delete_message");
deleteMessageButton.addEventListener("click", deleteMessage);

let checkCounter = 7;

function getNewMessage() {
    let newMessage = document.createElement("li");

    let sss = 1;

    newMessage.className = "emails-list__element emails-list__element_with-font-weight";
    newMessage.innerHTML =
        '<input type="checkbox" class="check emails-list__check" id="input' + checkCounter + '">\n' +
        '<label for="input' + checkCounter + '" class="check-style emails-list__check-style"></label>\n' +
        '<div class="emails-list__logo"></div>\n' +
        '<span class="emails-list__title">Команда Яндекс.Почты</span>\n' +
        '<div class="emails-list__read-circle-indicator"></div>\n' +
        '<span class="emails-list__preview">Как читать почту с мобильного</span>' +
        '<span class="emails-list__date">6 июл</span>';

    checkCounter++;

    return newMessage;
}

function addMessage() {
    let lst = document.querySelector('.emails-list');

    let newMessage = getNewMessage();
    newMessage.classList.add("emails-list__element_new-start");

    lst.insertBefore(newMessage, lst.firstChild);

    setTimeout(function () {
        newMessage.classList.add("emails-list__element_new-finish");
    }, 0);
}

function deleteMessage() {
    let checks = document.body.querySelectorAll('.check');

    for (let check of checks) {
        if (check.checked) {
            while (!check.classList.contains('emails-list__element')) {
                check = check.parentElement;
            }

            check.classList.add("emails-list__element_del");

            setTimeout(function () {
                check.remove();
            }, 1300);
        }
    }
}