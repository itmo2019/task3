function addNewLetter() {
    let letters = Array.from(document.getElementsByClassName("letters"))[0];
    let newElement = document.createElement("li");
    newElement.className = "letters__animated-add-line";
    newElement.innerHTML = "<label>\n" +
        "                    <input class=\"page__my-input letters__my-checkbox\" type=\"checkbox\">\n" +
        "                </label>\n" +
        "                <a href=\"#\" class=\"letter-head letter-head_unread\">\n" +
        "                    <img class=\"letter-head__author-image\" src=\"images/yandex.png\" alt=\"author logo\">\n" +
        "                    <div class=\"letter-head__author-name\">\n" +
        "                        <p class=\"page__my-text\">Команда Яндекс.Почты</p>\n" +
        "                    </div>\n" +
        "                    <div class=\"letter-head__read\"></div>\n" +
        "                    <div class=\"letter-head__text\">\n" +
        "                        <p class=\"page__my-text\">Доступ к аккаунту восстановлен</p>\n" +
        "                    </div>\n" +
        "                    <div class=\"letter-head__date\">\n" +
        "                        <time datetime=\"2019-03-09 18:02\"><p>9 мар</p></time>\n" +
        "                    </div>\n" +
        "                </a>\n" +
        "                <div class=\"page__line\"></div>";
    newElement.addEventListener("webkitAnimationEnd", function () {
        newElement.className = "";
    });
    letters.insertBefore(newElement, letters.firstChild);
}

function deleteMessage() {
    let letters = Array.from(document.getElementsByClassName("letters"))[0];
    let elements = Array.from(letters.children);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].children[0].children[0].checked) {
            elements[i].className += " letters__animated-delete-line";
            elements[i].addEventListener("webkitAnimationEnd", function () {
                letters.removeChild(elements[i]);
            });
        }
    }
}