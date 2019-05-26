let ind = 123;
window.onload = function () {

    document.getElementById("write-button")
        .addEventListener("click", addLetter);
    document.getElementById("checkbox-that-rules")
        .addEventListener("click", selectAll);
    document.getElementById("delete")
        .addEventListener("click", deleteLetters);
};

function addLetter() {
    const mails = document.querySelector(".letters");
    const letter = getLetter(ind++);
    let ins;
    if (mails.children.length === 0) {
        ins = null;
    } else {
        ins = mails.firstChild;
    }
    mails.insertBefore(letter, ins);
    const magic = letter.offsetHeight;
    letter.classList.add("letter_showed");
}

function getLetter(i) {
    const template = document.importNode(document.getElementById("letter__template"), true);
    const letter = template.content.querySelector(".latter");
    const id = "letter_open_" + i;
    letter.querySelector("#letter_open_").setAttribute("id", id);
    letter.querySelectorAll('label[for="letter_open_"]').forEach(
        (it) => it.setAttribute("for", id)
    );
    return letter;
}

function selectAll() {
    let bigCheckbox = document.getElementById("checkbox-that-rules");

    const letters = document.querySelector(".letters");
    let selectAll = bigCheckbox.checked;

    Array.from(letters.getElementsByClassName("mail__checkbox")).forEach(
        (elem) => elem.checked = selectAll
    );
}

function deleteLetters() {
    const letters = document.querySelector(".letters");

    const checked = Array.from(letters.getElementsByClassName("mail__checkbox"))
        .filter((it) => it.checked)
        .map((it) => it.parentElement.parentElement);
    checked.forEach((it) => {
        it.classList.add("letter_removed");
    });
    let selectAllCheckBox = document.getElementById("checkbox-that-rules");
    selectAllCheckBox.checked = false;

    function tmp() {
        checked.forEach((it) => {
            letters.removeChild(it);
        });
        letters.removeEventListener("transitionend", tmp);
    }

    letters.addEventListener("transitionend", tmp);

}