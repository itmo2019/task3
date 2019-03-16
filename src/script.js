let cnt = 2;
let letterTemplate = '<input type="checkbox" class="check">' 
    + '<img class="sender_logo" src="../images/yandex-logo.png">'
    + '<div class="sender_name unread">Преподы по фронту</div>'
    + '<div class="mark unread_mark"></div>'
    + '<div class="letter_title unread"></div>'
    + '<div class="date">6 июл</div>';

document.getElementById("receive_letter").addEventListener("click", receiveLetter);

function receiveLetter() {
    let letters = document.getElementById("letters");
    let letter = document.createElement("div");
    letter.className = "letter";
    let id = "letter_" + cnt;
    letter.setAttribute("id", id);
    letter.innerHTML = letterTemplate;
    letter.querySelector(".letter_title").textContent += "Обновление: по фронту лутануло долг " + cnt + " КТ-шников"
    letter.addEventListener("dblclick", () => document.getElementById(id).classList.add("will_be_removed"));
    cnt++;
    letter.addEventListener("animationend", (ev) => ev.target.remove());
    letters.insertBefore(letter, letters.firstChild);
}