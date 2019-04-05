function createLetter() {
    let elem = document.createElement('li');
    elem.className = 'animation-insert main-block__letter';
    let temp = document.getElementById("template-letter");
    let clone = temp.content.cloneNode(true);
    elem.appendChild(clone);
    return elem;
}

function addLetter() {
    let allLetters = document.getElementById('all-letters');
    let newLetter = createLetter();
    allLetters.insertBefore(newLetter, allLetters.querySelectorAll("li")[0]);
    allLetters.classList.add('all-letter-down');
    newLetter.addEventListener("animationend", function () {
        removeClass(newLetter, 'animation-insert');
    });
    allLetters.addEventListener("animationend", function () {
        removeClass(allLetters, 'all-letter-down');
    });
}

function removeClass(letter, name) {
    letter.classList.remove(name);
}

function remove() {
    let letters = document.getElementById('all-letters').querySelectorAll("li");
    letters.forEach(letter => {
        if (letter.querySelector(".check").checked) {
            letter.classList.add('animation-delete');
            letter.addEventListener("animationend", function () {
                removeClass(letter, 'animation-delete');
                letter.remove()
            });
        }
    });
}

document.getElementById('get-letter').addEventListener("click", addLetter);
document.getElementById('remove').addEventListener("click", remove);
