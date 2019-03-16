let letter = '<ul class="letter__line"><li class="check">' +
    '<label><input class="check__input" type="checkbox" onclick="selectLetter(this)">' +
    '<span class="check__box"></span></label></li>\n' +
    '<li class="author"><img class="author__logo" src="images/logo-author-yandex.png" alt="Я"></li>\n' +
    '<li class="author-name letter__line_not-read ">Яндекс Мемер</li>\n' +
    '<li class="read-mark read-mark_not-read"></li>\n' +
    '<li class="topic letter__line_not-read">Свежий мем из Яндекса! Успей орнуть первым.</li>\n' +
    '<li class="date">16 фев</li></ul>' +
    '<hr class="letter-box__hr">';

let memerId = 0;

function selectAll() {
    let checkboxes = document.getElementsByClassName('check__input');
    let mainCheck = checkboxes[0];
    for (var i = 1; i < checkboxes.length; i++) {
        checkboxes[i].checked = mainCheck.checked;
    }
}

function _selectMain(checkbox) {
    let mainCheck = document.getElementsByClassName('check__input')[0];
    if (!checkbox.checked) {
        mainCheck.checked = false;
    }
}

function selectLetter(checkbox) {
    _selectMain(checkbox);
}

function addLetter() {
    let letters = document.getElementById('letter-box__letters');
    let newLetter = document.createElement('li');
    newLetter.className = 'letter';
    newLetter.innerHTML = letter;
    newLetter.getElementsByClassName('author-name')[0].innerHTML = 'Яндекс Мемер №' + memerId++;
    letters.insertBefore(newLetter, letters.children[0]);

    newLetter.style.height = '0';
    newLetter.style.top = '-42px';
    let fps = 1000 / 42;
    animate(
        function (timePassed) {
            var shift = (timePassed / fps);
            newLetter.style.height = shift + 'px';
            newLetter.style.top = (-42 + shift) + 'px';
        },
        1000
    );
}

function _doActionWithLetters(action) {
    let checkboxes = document.getElementsByClassName('check__input');
    for (var i = 1; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            var letter = checkboxes[i];
            while (letter.className != 'letter') {
                letter = letter.parentElement;
            }
            action(letter);
        }
    }
}

function _removeLetter(letter) {
    letter.remove();
}

function _removeAnimateLetter(letter) {
    let fps = 1000 / 42;
    letter.style.zIndex = '0';
    animate(
        function (timePassed) {
            var shift = (timePassed / fps);
            letter.style.height = (42 - shift) + 'px';
            letter.style.top = -shift + 'px';
        },
        1000,
        function () {
            _removeLetter(letter);
        }
    );
}

function animate(draw, duration, complete) {
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        var timePassed = time - start;
        console.log(time, start);
        if (timePassed > duration) timePassed = duration;
        draw(timePassed);
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        } else {
            complete();
        }
    });
}

function removeLetters() {
    _doActionWithLetters(_removeAnimateLetter);
}

function _removeClass(letter, className) {
    let notReadObjs = letter.getElementsByClassName(className);
    while (notReadObjs.length > 0) {
        notReadObjs[0].classList.remove(className);
    }
}

function _markReadLetter(letter) {
    _removeClass(letter, 'letter__line_not-read');
    _removeClass(letter, 'read-mark_not-read');
}

function markReadLetters() {
    _doActionWithLetters(_markReadLetter);
}
