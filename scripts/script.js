var letter = "<div class=\"letter\">\n" +
    "    <div class=\"wrapper-checkbox-infoSender\">\n" +
    "        <div class=\"checkbox\"></div>\n" +
    "        <div class=\"wrapper-checkbox-infoSender__senderPhoto\"></div>\n" +
    "        <div class=\"wrapper-checkbox-infoSender__senderTheme\">Task 1</div>\n" +
    "    </div>\n" +
    "    <div class=\"readed\"></div>\n" +
    "    <div class=\"wrapper-infoAboutLetter\">\n" +
    "        <div class=\"wrapper-infoAboutLetter__beginOfLetter\">Здравствуйте, отправил 1 задание</div>\n" +
    "        <div class=\"wrapper-infoAboutLetter__data\">\n" +
    "            <time datetime=\"2019-03-01\">3 мар</time>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"trashcan\" onclick=\"removeLetter(event)\"></div>" +
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
    bodyLetters.removeChild(event.currentTarget.parentNode.nextSibling);
    bodyLetters.removeChild(event.currentTarget.parentNode);
}


