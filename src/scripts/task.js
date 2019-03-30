function generateContent() {
  return "Not so big content";
}

function generateDateTime() {
  return "2019-08-06";
}

function genereateTheme() {
  return "BIG THEME";
}

function getMessageItemsWithPredicate(predicate) {
  return [...document.getElementById('messages-section').childNodes]
    .map(value => {
      if (value.nodeName === 'LABEL'
            && value.getElementsByTagName('div').length !== 0) {
        return value.getElementsByTagName('div')[0];
      }
      return value;
    })
    .filter(value => {
      return value.nodeName === 'DIV' && [...value.classList].includes('message-item')
        && predicate(value);
    });
}

function getCheckedMessageItems() {
  return getMessageItemsWithPredicate((value) =>
    value.getElementsByTagName('input').length !== 0
      && value.getElementsByTagName('input')[0].checked);
}

function receiveMessage() {
  const msgDiv = document.createElement('div');
  const msgInput = document.createElement('input');
  const msgLogoSpan = document.createElement('span');
  const msgLogoImg = document.createElement('img');
  const msgThemeP = document.createElement('p');
  const msgUnreadCircleSpan = document.createElement('span');
  const msgContentP = document.createElement('p');
  const msgTime = document.createElement('time');
  const messagesSection = document.getElementById('messages-section')

  msgDiv.classList.add('message-item');

  msgInput.id = 'select-message100';
  msgInput.type = 'checkbox';
  msgInput.classList.add('message-item__checkbox');
  msgInput.classList.add('mail-box__input');
  msgInput.checked = document.getElementById('select-all').checked

  msgLogoSpan.classList.add('message-item__circle');

  msgLogoImg.src = "images/message-company-logo.png";

  msgThemeP.classList.add('message-item__text_theme');
  msgThemeP.classList.add('bold-text');
  msgThemeP.innerText = genereateTheme();

  msgUnreadCircleSpan.classList.add('message-item__unread-circle');

  msgContentP.classList.add('message-item__text_content');
  msgContentP.classList.add('bold-text');
  msgContentP.innerText = generateContent();

  msgTime.classList.add('message-item__time');
  msgTime.dateTime = generateDateTime();
  msgTime.innerText = "6 авг"

  msgLogoSpan.appendChild(msgLogoImg);
  msgDiv.append(msgInput, '\n',
                msgLogoSpan, '\n',
                msgThemeP, '\n',
                msgUnreadCircleSpan, '\n',
                msgContentP, '\n',
                msgTime);

  msgDiv.style.opacity = '0';

  messagesSection.insertBefore(msgDiv, messagesSection.firstChild);
  setTimeout(() => msgDiv.style.opacity = '1', 200);
}

function removeMessage() {
  const stagedItems = getCheckedMessageItems();

  for (const element of stagedItems) {
    element.style.opacity = '0';
    setTimeout(() => element.parentNode.removeChild(element), 400);
  }
}

function toggleAllMessaged() {
  const checkboxes = getMessageItemsWithPredicate(() => true);
  console.log(checkboxes.length);
  console.log(this.checked);
  checkboxes.forEach(element => {
    console.log(element.getElementsByTagName('input')[0].checked);
    element.getElementsByTagName('input')[0].checked = this.checked;
  });
}

const addBtn = document.getElementById('add-message-button');
const delBtn = document.getElementById('delete');
const checkAllBtn = document.getElementById('select-all');

addBtn.addEventListener('click', receiveMessage);
delBtn.addEventListener('click', removeMessage);
checkAllBtn.addEventListener('click', toggleAllMessaged);
