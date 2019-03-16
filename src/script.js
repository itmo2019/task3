const baseTiming = 500;
const letterSize = 45;

function drawNewLetterTick(currentTime, drawnLetter) {
    let delta = (currentTime * letterSize) / baseTiming;
    drawnLetter.style.height = delta + 'px';
    drawnLetter.style.top = (delta - letterSize) + 'px';
}

function drawNewLetter(drawnLetter) {
    drawnLetter.style.height = 0;
    drawnLetter.style.top = -letterSize + 'px';

    let now = performance.now();

    function animateImpl(time) {
        let timeElapsed = time - now;
        if (timeElapsed >= baseTiming) {
            drawNewLetterTick(baseTiming, drawnLetter);
        } else {
            drawNewLetterTick(timeElapsed, drawnLetter);
            requestAnimationFrame(animateImpl);
        }
    }
    requestAnimationFrame(animateImpl);
}

function insertLetterToTop() {
    let insertedLetter = document.createElement('li');
    insertedLetter.className = 'letter';
    insertedLetter.innerHTML =
        '<ul class="letter__line">\n' +
            '<li class="check letter__element_first">\n' +
                '<label>\n' +
                    '<input class="check__input" type="checkbox" onclick="unsellectCheckOne(this)">\n' +
                    '<span class="check__box"></span>\n' +
                '</label>\n' +
            '</li>\n' +
            '<li class="letter__sender-logo-wrapper letter__element">' +
                '<img class="letter__sender-pic" src="../resources/sender-pic.png" alt="Yandex logo">\n' +
            '</li>\n' +
            '<li class="letter__sender-name letter__line_not-read letter__element">Яндекс.Летов</li>\n' +
            '<li class="letter__read-mark read-mark_not-read letter__element"></li>\n' +
            '<li class="letter__text letter__line_not-read letter__element">Пластмассовый мир победил, макет оказался сильней. Последний  фонарик остыл. Последний кораблик устал.</li>\n' +
            '<li class="letter__date letter__element">31 фев</li>' +
        '</ul>' +
        '<hr class="letter-box__hr">';
    let allLetters = document.getElementById('letter-box__letters');
    if (allLetters.firstChild != null) {
        allLetters.insertBefore(insertedLetter, allLetters.firstChild);
    } else {
        allLetters.appendChild(insertedLetter);
    }
    drawNewLetter(insertedLetter)
}

function markAll() {
    let allCheckbox = document.getElementById('all-mails-chooser__input');
    let mailCheckboxes = document.body.querySelectorAll('.check__input');
    mailCheckboxes.forEach(
        (value, index, array) => {
            value.checked = allCheckbox.checked;
        }
    );
}

function unsellectCheckOne(checkbox) {
    if (!checkbox.checked) {
        document.getElementById('all-mails-chooser__input').checked = false;
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
    document.getElementById('all-mails-chooser__input').checked = false;
    checkboxesAfterDelete.forEach(
        (value, index, array) => {
            value.checked = false;
        }
    );
}

function removeLetterTick(currentTime, letter) {
    let delta = (currentTime * letterSize) / baseTiming;
    letter.style.height = (letterSize - delta) + 'px';
    letter.style.top = -delta + 'px';
}

function removeLetters() {
    document.body.querySelectorAll('.check__input')
        .forEach (
            (checkbox, index, array) => {
                if (checkbox.checked) {
                    let letter = findLetter(checkbox);
                    letter.style.zIndex = 0;
                    let now = performance.now();

                    function animateImpl(time) {
                        let currentTime = time - now;
                        if (currentTime >= baseTiming) {
                            removeLetterTick(baseTiming, letter);
                            letter.parentNode.removeChild(letter);
                        } else {
                            removeLetterTick(currentTime, letter);
                            requestAnimationFrame(animateImpl);
                        }
                    }

                    requestAnimationFrame(animateImpl);
                }
            }
        );
    removeCheckboxes()
}