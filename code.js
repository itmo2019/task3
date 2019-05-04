let templateLetter = `<input type="checkbox" class="letter__checkbox">\n
    <img class="letter__pic" alt="logo" src="https://yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg">\n
    <span class="letter__sender letter__unread">Команда Яндекс.Почты</span>\n
    <div class="letter__msg-mark letter__mark-unread"></div>\n
    <span class="letter__message letter__unread">Just a simple test`;
let time = `</span>\n <time class="letter__date-msg" datetime="2019-03-16">16 мар</time>\n`;

let testLetter = `<input type="checkbox" class="letter__checkbox">
    <img class="letter__pic" alt="logo"
    src="https://yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg">
    <span class="letter__sender letter__unread">Команда Яндекс.Почты</span>
    <div class="letter__msg-mark letter__mark-unread"></div>
    <span class="letter__message letter__unread">Как читать почту с
    мобильногоiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</span>
    <time class="letter__date-msg" datetime="2018-07-06">6 июл</time>`;

function adding() {
  let currLetters = document.querySelector(".block-inner__letters");
  let letters = currLetters.firstElementChild;
  console.log(letters);
  for (let i = 0; i < letters.length; i++) {
    // console.log(i);

    // console.log(letters[i]);
    letters[i].classList.remove("msg-added");
    letters[i].classList.add("msg-added");
    setTimeout(function() {
      letters[i].classList.add("msg-added2");
    }, 1);
  }
}

let count = 0;
function addLetter() {
  let currLetters = document.querySelector(".block-inner__letters");
  let letters = currLetters.children;
  var newLetter = document.createElement("div");
  newLetter.classList.add("letters__letter");
  newLetter.classList.add("letter");
  newLetter.innerHTML = templateLetter + " " + ++count + time;
  newLetter.classList.add("msg-adding-start");
  currLetters.insertBefore(newLetter, letters[0]);
  setTimeout(() => {
    newLetter.classList.add("msg-adding-finish");
  }, 70);
}

function deleteMsgs(toDelete) {
  for (var i = 0; i < toDelete.length; i++) {
    toDelete[i].remove();
  }
}

function deleteLetter() {
  let checkboxes = document.querySelectorAll(".letter__checkbox");
  var toDelete = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var parent = checkboxes[i].parentElement;
      parent.classList.add("msg-deleting-start");
      toDelete.push(parent);
      if (Math.random() > 0.5) {
        // setTimeout(() => {
          parent.classList.add("msg-deleting-right");
        // }, 200);
      } else {
        // setTimeout(() => {
          parent.classList.add("msg-deleting-left");
        // }, 200);
      }
    }
  }
  setTimeout(deleteMsgs, 1000, toDelete);
}

document
  .getElementById("actions__button-write")
  .addEventListener("click", addLetter);
document
  .getElementById("can-do__delete")
  .addEventListener("click", deleteLetter);
