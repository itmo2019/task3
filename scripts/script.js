var letter = "<div class=\"letter\">\n" +
    "    <div class=\"sender-info-container\">\n" +
    "        <div class=\"sender-info-container__checkbox\"></div>\n" +
    "        <div class=\"sender-info-container__photo\"></div>\n" +
    "        <div class=\"sender-info-container__theme\">Task 1</div>\n" +
    "    </div>\n" +
    "    <div class=\"readed\"></div>\n" +
    "    <div class=\"letter-info-container\">\n" +
    "        <div class=\"letter-info-container__begin-of-letter\">Здравствуйте, отправил 1 задание</div>\n" +
    "        <div class=\"letter-info-container__data\">\n" +
    "            <time datetime=\"2019-03-01\">3 мар</time>\n" +
    "        </div>\n" +
    "        <div class=\"trashcan\" onclick=\"removeLetter(event)\"></div>" +
    "    </div>\n" +
    "</div>" +
    "<div class=\"line\"></div>";

function addLetter() {
    let letters = document.getElementById("letters");
    let bodyLetters = letters.children[2];
    bodyLetters.insertAdjacentHTML("beforeend", letter);
}

function removeLetter(event) {
    let letters = document.getElementById("letters");
    let bodyLetters = letters.children[2];
    bodyLetters.removeChild(event.currentTarget.parentNode.parentNode.nextSibling);
    bodyLetters.removeChild(event.currentTarget.parentNode.parentNode);
}



