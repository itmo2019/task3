function onClickGetMessageButton() {
    var message = document.createElement("section");
    message.className = "messages__message insert-anim";
    message.innerHTML =
        '<label>' +
        '    <input type="checkbox" class="message__base-checkbox">' +
        '    <div class="checkbox message__checkbox"></div>' +
        '</label>' +
        '<a href="#" title="все письма с этого адреса">' +
        '    <div class="message__author-img">Я</div>' +
        '</a>' +
        '<a href="#" title="mail.news@yandex-team.ru" class="message__author message__author_unread">Команда Яндекс.Почты</a>' +
        '<a href="#" title="Отметить как прочитанное" class="message__read-marker" />' +
        '<a href="#" title="Как читать почту с мобильного" class="message__title message__title_unread">Новое письмо</a>' +
        '<a href="#" title="Получено 6 июл"><time datetime="2018-07-06" class="message__date">6 июл</time></a>';

    var messages = document.getElementById("messages");
    messages.insertBefore(message, messages.children[0]);
    setTimeout(() => {
        message.classList.remove("insert-anim");
    }, 500);
}

function onDeleteMessage() {
    delMessage = document.getElementsByClassName("del")[0];
    if (delMessage !== undefined && !delMessage.classList.contains("start-del-anim")) {
        delMessage.classList.add("start-del-anim");
        setTimeout(() => {
            delMessage.remove();
        }, 500);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("get-message-button").addEventListener("click", onClickGetMessageButton);
    document.getElementById("del-message-button").addEventListener("click", onDeleteMessage);
});