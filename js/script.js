function addNewLetter() {
    let letters = document.getElementById("content__letters");
    let newElemenet = document.createElement("li");
    newElemenet.className = "content__animated-add-line";
    newElemenet.innerHTML = "<label>\n" +
        "                    <input class=\"my-input content__my-checkbox\" type=\"checkbox\">\n" +
        "                </label>\n" +
        "                <a href=\"#\" class=\"content__letter-head content__letter_unread\">\n" +
        "                    <img class=\"content__author-image\" src=\"images/yandex.png\" alt=\"author logo\">\n" +
        "                    <div class=\"content__author-name\">\n" +
        "                        <p class=\"page__my-text\">Команда Яндекс.Почты</p>\n" +
        "                    </div>\n" +
        "                    <div class=\"content__read\"></div>\n" +
        "                    <div class=\"content__letter-head-text\">\n" +
        "                        <p class=\"page__my-text\">Доступ к аккаунту восстановлен</p>\n" +
        "                    </div>\n" +
        "                    <div class=\"content__date\">\n" +
        "                        <time datetime=\"2019-03-07 18:02\"><p>7 мар</p></time>\n" +
        "                    </div>\n" +
        "                </a>\n" +
        "                <div class=\"page__line\"></div>";
    console.log(newElemenet.outerHTML);
    newElemenet.addEventListener("webkitAnimationEnd", function (event) {
        newElemenet.className = "";
    });
    letters.insertBefore(newElemenet, letters.firstChild);

}

function deleteMessage() {
    let letters = document.getElementById("content__letters");
    let elements = Array.from(letters.children);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].children[0].children[0].checked) {
            elements[i].className += " content__animated-delete-line";
            elements[i].addEventListener("webkitAnimationEnd", function (event) {
                letters.removeChild(elements[i]);
            });
        }
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}