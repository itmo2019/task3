let defaultLetter =
    `<ul class="letter__line">
        <li class="letter__item check">
            <label><input class="check__input" type="checkbox">
            <span class="check__box"></span>
        </label></li>
        <li class="letter__item letter__author"><img class="letter__author_has-logo" src="images/ya-default.svg" alt="Я"></li>
        <li class="letter__item letter__author-name">Яндекс Мемер №</li>
        <li class="letter__item letter__read-mark letter__read-mark_unread"></li>
        <li class="letter__item letter__topic">Свежий мем из Яндекса! Успей орнуть первым.</li>
        <li class="letter__item letter__date">16 фев</li>
     </ul>
     <hr class="letter-box__hr">`;

let memerId = 0;

function selectAll() {
    let checkboxes = document.body.querySelectorAll('.check__input');
    let checkAll = checkboxes[0];
    for (var i = 1; i < checkboxes.length; i++) {
        checkboxes[i].checked = checkAll.checked;
    }
}

function _selectMain(checkbox) {
    if (!checkbox.checked) {
        document.body.querySelector('.check__input').checked = false;
    }
}

function selectLetter(event) {
    if (!event.target.matches('.check__input')) return;
    _selectMain(event.target);
}

function _getLetter() {
    var letter = document.createElement('li');
    letter.className = 'letter letter-box__letter letter_unread';
    letter.innerHTML = defaultLetter;
    letter.querySelector('.letter__author-name').textContent += memerId++;
    letter.querySelector('.letter__date').textContent = '16 фев';
    return letter;
}

function addLetter() {
    var letters = document.getElementById('letter-box__letters');
    var newLetter = _getLetter();
    letters.insertBefore(newLetter, letters.firstChild);
    document.body.querySelector('.check__input').checked = false;
    animateAddingLetter(newLetter)
}

function _doActionWithLetters(action) {
    let checkboxes = document.body.querySelectorAll('.check__input');
    for (var i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            action(checkboxes[i].closest('.letter'));
        }
    }
}

function _removeLetter(letter) {
    letter.remove();
}

function _removeAnimateLetter(letter) {
    var time = 300;
    var startShift = 42;
    var fps = time / startShift;
    letter.style.zIndex = '0';
    animate(
        timePassed => {
            var shift = (timePassed / fps);
            letter.style.height = `${startShift - shift}px`;
            letter.style.top = `${-shift}px`;
        },
        time,
        () => {
            _removeLetter(letter);
        }
    );
}

function animateAddingLetter(newLetter) {
    var time = 300;
    var startShift = 42;
    var fps = time / startShift;
    newLetter.style.height = '0';
    newLetter.style.top = `${-startShift}px`;
    animate(
        (timePassed) => {
            var shift = (timePassed / fps);
            newLetter.style.height = `${shift}px`;
            newLetter.style.top = `${-startShift + shift}px`;
        },
        time
    );
}

function animate(draw, duration, complete) {
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        var timePassed = time - start;
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
    letter.classList.remove('letter_unread');
    _removeClass(letter, 'letter__read-mark_unread');
}

function markReadLetters() {
    _doActionWithLetters(_markReadLetter);
}

document.getElementById('get-letter').addEventListener("click", addLetter);
document.getElementById('remove-letter').addEventListener("click", removeLetters);
document.getElementById('spam-letter').addEventListener("click", removeLetters);
document.getElementById('mark-read-letter').addEventListener("click", markReadLetters);
document.getElementById('letter-box__letters').addEventListener('click', selectLetter);
document.body.querySelector('.check__input').addEventListener('click', selectAll);
