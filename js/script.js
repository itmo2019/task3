function addNewLetter() {
    let authorAbbr = 'Я';
    let author = 'Команда Яндекс.Почты';
    let subject = 'Как читать почту с мобильного';
    let date = '6 июля';
    let newLetterCode = `
                    <div class="letter__animated-add-letter letter">
                        <input class="letter__checkbox" type="checkbox">
                        <div class="letter__author-logo">
                            <div class="letter__author-abbr">${authorAbbr}</div>
                        </div>
                        <div class="letter__author bold-text letter__text">${author}</div>
                        <div class="letter__new-letter-flag letter__new-letter-flag_enabled"></div>
                        <div class="letter__subject bold-text letter__text">${subject}</div>
                        <div class="letter__time">${date}</div>
                    </div>
                    `;

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
