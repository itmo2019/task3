function addNewLetter() {
    let newLetterCode = '<div class="content__animated-add-letter letter">\n' +
        '                <input class="letter__checkbox" type="checkbox">\n' +
        '                <div class="letter__author-logo">\n' +
        '                    <div class="letter__author_abbr">Я</div>\n' +
        '                </div>\n' +
        '                <div class="letter__author bold-text letter__text">Команда\n' +
        '                    Яндекс.Почты\n' +
        '                </div>\n' +
        '                <div class="letter__new-letter-flag letter_new-letter-flag-enabled"></div>\n' +
        '                <div class="letter__subject bold-text letter__text">Как\n' +
        '                    читать почту с мобильного\n' +
        '                </div>\n' +
        '                <div class="letter__time">6 июля</div>\n' +
        '            </div>';

    let newLetterNode = new DOMParser().parseFromString(newLetterCode, "text/html");
    let letters = document.querySelector(".letters");
    letters.insertBefore(newLetterNode.body.firstChild, letters.firstChild);
}

let newLetterButton = document.querySelector(".menu__new-letter-button");
newLetterButton.addEventListener('click', addNewLetter);

function deleteLetter() {
    let letters = document.querySelector(".letters").querySelectorAll(".letter");
    letters.forEach(letter => {
        if (letter.querySelector(".letter__checkbox").checked) {
            letter.className += " letter__animated-delete-letter";
            letter.addEventListener("webkitAnimationEnd", function () {
                letter.remove()
            });
        }
    });
    document.querySelector(".content-header__checkbox").checked = false;
}

let deleteButton = document.querySelector("#delete-letter-button");
deleteButton.addEventListener('click', deleteLetter);

function selectAll() {
    let checked = document.querySelector(".content-header__checkbox").checked;
    let letters = document.querySelector(".letters").querySelectorAll(".letter");
    letters.forEach(letter => {
        letter.querySelector(".letter__checkbox").checked = checked;
    });
}

let selectAllCheckbox = document.querySelector(".content-header__checkbox");
selectAllCheckbox.addEventListener('click', selectAll);
