document.querySelector('.delete-letters-button').onclick = () => {
    removeLetters(getMarkedLetters());
};

function removeLetters(letters) {
    letters.forEach(letter => {
        letter.addEventListener("animationend", () => {
            letter.remove();
        });
        letter.classList.add('letter_deleted');
    });
}

function getMarkedLetters() {
    return Array.from(document.querySelectorAll('.letter')).filter(letter =>
        letter.querySelector('.checkbox__real-checkbox').checked
    );
}