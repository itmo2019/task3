const letter =
    "<div class=\"mail-body__letters-window__body__letter\">\n" +
    "    <label class=\"check\">\n" +
    "        <input class=\"check__input\" type=\"checkbox\">\n" +
    "        <span class=\"check__box\"></span>\n" +
    "    </label>\n" +
    "    <div class=\"mail-body__letters-window__body__letter__photo\"></div>\n" +
    "    <div class=\"mail-body__letters-window__body__letter__author\">Гламозда Виталий</div>\n" +
    "    <div class=\"mail-body__letters-window__body__letter__readed\"></div>\n" +
    "    <div class=\"mail-body__letters-window__body__letter__theme\">Здравствуйте, отправил 1 задание</div>\n" +
    "    <div class=\"mail-body__letters-window__body__letter__data\">\n" +
    "        <time datetime=\"2019-03-01\">3 мар</time>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"line\"></div>";

let letterCounter = 0;

function addLetter() {
    let letters = document.getElementById("letters");
    let bodyLetters = letters.children[2];
    letterCounter++;
    bodyLetters.insertAdjacentHTML("beforeend", letter);
}

function mainCheckBoxClicked(event) {
    let letters = document.getElementById("letters");
    let bodyLetters = letters.children[2];
    let inputCheckbox = event.target.previousElementSibling;
    for (let i = 0; i < bodyLetters.childElementCount; i++) {
        if (i % 2 === 0) {
            bodyLetters.children[i].children[0].children[0].checked = !inputCheckbox.checked;
        }
    }
}

function removeCheckedLetters() {
    let letters = document.getElementById("letters");
    let bodyLetters = letters.children[2];
    for (let i = 0; i < bodyLetters.childElementCount; i++) {
        if (i % 2 === 0) {
            if (bodyLetters.children[i].children[0].children[0].checked) {
                bodyLetters.children[i + 1].classList.add('start-transition');
                bodyLetters.children[i].classList.add('start-transition');
                bodyLetters.children[i + 1].addEventListener('transitionend', function () {
                    bodyLetters.removeChild(this);
                });
                bodyLetters.children[i].addEventListener('transitionend', function () {
                    bodyLetters.removeChild(this);
                });
                letterCounter--;
            }
        }
    }

    if (letterCounter === 0) {
        console.log("sadas");
        let mainCheckbox = document.getElementById("mainCheckbox");
        if (mainCheckbox.checked) {
            mainCheckbox.checked = false;
        }
    }
}
