function insertLetterToTop() {
    let insertedLetter = document.createElement('li');
    insertedLetter.innerHTML =
        `
        <ul class="letter__line">
            <li class="check letter__element_first">
                <label>
                    <input class="check__input" type="checkbox" onclick="unsellectCheckOne(this)">
                    <span class="check__box"></span>
                </label>
            </li>
            <li class="letter__sender-logo-wrapper letter__element">
                <img class="letter__sender-pic" src="../resources/sender-pic.png" alt="Yandex logo">
            </li>
            <li class="letter__sender-name letter__line_not-read letter__element">Яндекс.Летов</li>
            <li class="letter__read-mark read-mark_not-read letter__element"></li>
            <li class="letter__text letter__line_not-read letter__element">Пластмассовый мир победил, макет оказался сильней. Последний  фонарик остыл. Последний кораблик устал.</li>
            <li class="letter__date letter__element">31 фев</li>
        </ul>
        <hr class="letter-box__hr">`;
    let allLetters = document.getElementById('letter-box__letters');
    if (allLetters.firstChild != null) {
        allLetters.insertBefore(insertedLetter, allLetters.firstChild);
    } else {
        allLetters.appendChild(insertedLetter);
    }
    insertedLetter.classList.add("add-letter", "letter");
    insertedLetter.addEventListener(
        "webkitAnimationEnd",
        function () {
            insertedLetter.classList.remove("add-letter");
        }
    );
}

function markAll() {
    let allCheckbox = document.getElementById('letter-box__all-chooser-input');
    let mailCheckboxes = document.body.querySelectorAll('.check__input');
    mailCheckboxes.forEach(
        (value, index, array) => {
            value.checked = allCheckbox.checked;
        }
    );
}

function unsellectCheckOne(checkbox) {
    if (!checkbox.checked) {
        document.getElementById('letter-box__all-chooser-input').checked = false;
    }
}

function findLetter(elem) {
    if (elem.className !== 'letter') {
        return findLetter(elem.parentElement)
    } else {
        return elem;
    }
}

function removeCheckboxes() {
    let checkboxesAfterDelete = document.body.querySelectorAll('.check__input');
    document.getElementById('letter-box__all-chooser-input').checked = false;
    checkboxesAfterDelete.forEach(
        (value, index, array) => {
            value.checked = false;
        }
    );
}

function removeLetters() {
    document.body.querySelectorAll('.check__input')
        .forEach (
            (checkbox, index, array) => {
                if (checkbox.checked) {
                    let letter = findLetter(checkbox);
                    letter.style.zIndex = 0;

                    letter.classList.add("remove-letter");
                    letter.addEventListener(
                        "webkitAnimationEnd",
                        function () {
                            letter.parentNode.removeChild(letter);
                        }
                    );
                }
            }
        );
    removeCheckboxes()
}