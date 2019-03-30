setTimeout(newMail, 3000);
//create30Letter();
//setInterval(newMail, 5000);

var nextLetterId = 3;

function createMail(from = "Яндекс.Почта", theme = "Тестовое письмо", text = "Содержание письма") {
    var mail = document.createElement("section");
    mail.setAttribute("class", "letter letter-creation-animation");
    mail.innerHTML =
        "            <input type=\"checkbox\" class=\"letter__checkbox hidden-checkbox\">\n" +
        "            <span class=\"decorative-checkbox letter__decorative-checkbox\"></span>\n" +
        "            <label class=\"letter__label\" for=\"check-label\" id=\"letter" + (nextLetterId++) + "\">" +
        "            <img class=\"letter__img\" src=\"images/ya.jpg\">\n" +
        "            <h2 class=\"letter__from bold hide-overflow\">" + from + "</h2>\n" +
        "            <div class=\"letter__read-status unchecked\"></div>\n" +
        "            <p class=\"letter__date hide-overflow\">6 июл.</p>\n" +
        "            <h3 class=\"letter__theme bold hide-overflow\">" + theme + "</h3>\n" +
        "            <div class=\"line letter__line\"></div>\n" +
        "            </label>";
    return mail;
}

function changeCheckboxesStatus() {
    let mainCheckbox = document.getElementById("main-checkbox");
    let newStatus = mainCheckbox.checked;
    let checkboxes = document.getElementsByClassName("letter__checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes.item(i).checked = newStatus;
    }
}

function newMail() {
    var mailsList = document.getElementById("letters-list");
    mailsList.insertBefore(createMail(), mailsList.firstChild.nextSibling.nextSibling);
}

function deleteCheckedLetters() {
    let checkboxes = document.getElementsByClassName("letter__checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
        let checkbox = checkboxes.item(i);
        if (checkbox.checked) {
            let letter = checkbox.parentElement;
            letter.addEventListener("animationend", function () {
                letter.remove();
            }, false);
            letter.classList.add("letter-deletion-animation");
        }
    }
    document.getElementById("main-checkbox").checked = false;
}

function create30Letter() {
    for (var i = 0; i < 30; i++) {
        var mailsList = document.getElementById("letters-list");
        mailsList.insertBefore(createMail(), mailsList.firstChild);
    }
}

function initMail() {
}
