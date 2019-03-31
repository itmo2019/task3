function markAll() {
  let isMarked = document.getElementById('mail-action__chooce_all-id').checked;
  let checkBoxes = document.getElementsByClassName('mail__chooce');
  Array.from(checkBoxes).forEach(element => {
    element.checked = isMarked;
  });
}

function removeMarkedMails() {
  let checkBoxes = document.getElementsByClassName('mail__chooce');
  Array.from(checkBoxes).forEach(checkBox => {
    if (checkBox.checked) {
      let mail = findParentById('mail_id', checkBox);
      mail.classList.add("remove-action");
      mail.addEventListener("animationend", () => mail.parentElement.removeChild(mail));
    }
  })
}

function findParentById(id, currentElement) {
  if (currentElement != null && currentElement.id !== id) {
    return findParentById(id, currentElement.parentElement);
  }
  return currentElement;
}

function createMail() {
  var newMail = document.createElement('li');
  newMail.innerHTML = `
    <li class="mail" id="mail_id">
      <div class="mail__content
                  mail__content__unread">
        <input type="checkbox" class="mail__chooce" id="mail__chooce-id">
        <img class="mail__sender-logo" src="./resources/images/ya-logo.png">
        <span class="mail__sender-name mail__sender-name__hidden-text">Команда Яндекс.Спам</span>
        <div class="mail__unread-flag"></div>
        <span class="mail__title mail__title__hidden-text">Новый спам</span>
        <time class="mail__time">6 июл</time>
      </div>
    </li>`
  let mails = document.getElementById('mails_id');
  setTimeout(function() {
    newMail.classList.add("insert-action");
  }, 10);
  mails.insertBefore(newMail, mails.firstChild);
}
