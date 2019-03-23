let cnt = 2;
let letterTemplate = '<input type="checkbox" class="letter__check">'
    + '<img class="letter__sender-logo" src="../images/yandex-logo.png">'
    + '<div class="letter__sender-name letter__sender-name_unread">Преподы по фронту</div>'
    + '<div class="letter__mark letter__mark_unread"></div>'
    + '<div class="letter__title letter__title_unread"></div>'
    + '<div class="letter__date">6 июл</div>';

document.getElementById("menu__receive-letter").addEventListener("click", receiveLetter);

function receiveLetter() {
    let letters = document.getElementById("letter-box");
    let letter = document.createElement("div");
    letter.className = "letter";
    let id = "letter_" + cnt;
    setTimeout(function() {
        letter.classList.add("show");
    }, 10);
    letter.setAttribute("id", id);
    letter.innerHTML = letterTemplate;
    letter.querySelector(".letter__title").textContent += "Обновление: по фронту лутануло долг " + cnt + " КТ-шников"
    letter.addEventListener("dblclick", () => document.getElementById(id).classList.add("will_be_removed"));
    cnt++;
    letter.addEventListener("animationend", (ev) => ev.target.remove());
    letters.insertBefore(letter, letters.firstChild);
}