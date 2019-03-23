const template = '<div class="message-list__box">\n' +
    '<label>\n' +
    '<input class="message__check" type="checkbox">\n' +
    '</label>\n' +
    '<label for="message-list__cutter">\n' +
    '<img class="message__logo" src="images/message__logo.svg">\n' +
    '<div class="message__contact message__not-read">Яндекс.Почта</div>\n' +
    '<div class="message__read-icon"></div>\n' +
    '<div class="message__subject message__not-read">Ваша почта не активирована</div>\n' +
    '<div class="message__date">' + randomizeDate() + '</div>\n' +
    '</label>\n' +
    '</div>\n' +
    '<hr class="hr">';


function randomizeArrayNumber(text) {
    return Math.floor(Math.random() * text.length);
}

function randomizeDate() {
    let monthArray = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
    let mailDate = Math.floor(Math.random() * 27) + 1;
    let mailMonth = monthArray[randomizeArrayNumber(monthArray)];
    return mailDate + " " + mailMonth;
}