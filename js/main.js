function selectAllLetter() {
    elements = document.querySelectorAll('.check');
    main = elements[0];
    for (let i = 1; i < elements.length; i++) {
        elements[i].checked = main.checked;
    }
}


function getCurrentDate() {
    let date = new Date();
    currentDay = date.getDay();
    month = {
        1: 'янв',
        2: 'фев',
        3: 'мар',
        4: 'апр',
        5: 'май',
        6: 'июн',
        7: 'июл',
        8: 'авг',
        9: 'сен',
        10: 'окт',
        11: 'ноя',
        12: 'дек',
    };
    return String(date.getDay()) + ' ' + String(month[date.getMonth()]);
}

var count = 0;

function addLetter() {
    let templateLetter =    '<input type="checkbox" class="check">\n' +
                            '<div class="mail__logo-yandex">\n' + 
                            '<img src="img/2-layers.png" alt="Yandex"></div>\n' +
                            '<div class="mail__message-type mail__message_bold">'+
                            'Author' +
                            '</div>\n' +
                            '<div class="mail__marker-letter"></div>\n' +
                            '<div class="mail__letter mail__message_bold">'+
                            'Message ' + count + 
                            '</div>\n' +
                            '<div class="mail__latter-date">' + 
                            getCurrentDate() +
                            '</div>\n';
    count++;
    elements = document.getElementsByClassName('mail__conatainer')[0];
    letter = document.createElement('div');
    letter.classList.add('mail__message', 'clearfix','animation-letter');
    letter.innerHTML = templateLetter;    
    delayDeleteClass(letter);
    elements.insertBefore(letter, elements.childNodes[2]);
}


function delay(f, ms) {
  return function() {
    let savedThis = this;
    let savedArgs = arguments;

    setTimeout(function() {
      f.apply(savedThis, savedArgs);
    }, ms);
  };
}


function _deleteClass(obj) {
    obj.classList.remove('animation-letter');
}


function _deleteLetter(letter) {
    letter.remove();
}


var delayDeleteLetter = delay(_deleteLetter, 500);
var delayDeleteClass = delay(_deleteClass, 500);

function deleteLetters() {
    elements = document.body.querySelectorAll('.check');
    for (let i = 1; i < elements.length; i++) {
        if (elements[i].checked) {  
            elements[i].parentElement.classList.add('animation-letter');
            delayDeleteLetter(elements[i].parentElement);            
        }
    }
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.floor(rand);    
    return rand;
}


function randomLetterGenerator() {
    randomTime = randomInteger(10, 300000);
    addLetter();
    console.log(randomTime);
    setTimeout(randomLetterGenerator, 300000+randomTime);
}


var myEvent = new CustomEvent("customAddLetter");
var myElement = document.body;
myElement.addEventListener("customAddLetter", randomLetterGenerator);
myElement.dispatchEvent(myEvent);

                                             
document.getElementById('addElement').addEventListener("click", addLetter);
document.getElementById('check-all').addEventListener('click', selectAllLetter);
document.getElementById('delete-letter').addEventListener("click", deleteLetters);