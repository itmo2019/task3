function addNew() {
    let newLetter = "<div class=\"main-title\">\n" +
        "                        <label>\n" +
        "                            <input class=\"main-title__checkbox\" type=\"checkbox\">\n" +
        "                        </label>\n" +
        "                        <a class=\"main-part_del-line\" href=\"#\">\n" +
        "                            <img class=\"main-title__y-logo\" src=\"images/logo.jpg\">\n" +
        "                            <span class=\"main-title__text-sender-letter main-title_is-bold\">Яндекс.Паспорт</span>\n" +
        "                            <div class=\"main-title__mark-new-letter\"></div>\n" +
        "                            <span class=\"main-title__text-letter main-title_is-bold\">Доступ к аккаунту восстановлен</span>\n" +
        "                            <span class=\"main-title__data\">6 авг</span>\n" +
        "                        </a>\n" +
        "                    </div>";
    let letters = document.querySelector("#mem");
    let newNode = new DOMParser().parseFromString(newLetter, "text/html");
    letters.insertBefore(newNode.body.firstChild, letters.firstChild);
}

function delOld() {
    let checkBoxLetter = document.getElementsByClassName("main-title");
    let k = 1;
    let elem;
    while (k < checkBoxLetter.length) {
        elem = checkBoxLetter[k];
        let check = elem.firstChild.nextSibling.childNodes.item(1);
        if (check.checked) {
            elem.remove();
        } else k++;
    }
}

function selectAll() {
    let checkBoxLetter = document.getElementsByClassName("main-title");
    let elem = checkBoxLetter[0].childNodes.item(1).childNodes.item(1);
    if (elem.checked) {
        for (let k in Array.from(checkBoxLetter)) {
            elem = checkBoxLetter[k];
            elem.children.item(0).children.item(0).checked = true;
        }
    } else {
        for (let k in Array.from(checkBoxLetter)) {
            elem = checkBoxLetter[k];
            elem.children.item(0).children.item(0).checked = false;
        }
    }
}

let useButtonAdd = document.getElementsByClassName("left-menu__button")[0];
useButtonAdd.addEventListener('click', addNew);

let useButtonDel = document.getElementsByClassName("main-title__text-title")[1];
useButtonDel.addEventListener('click', delOld);