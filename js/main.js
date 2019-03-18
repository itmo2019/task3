function selectAllLetter() {
    elements = document.querySelectorAll('.check');
    main = elements[0];
    for (let i = 1; i < elements.length; i++) {
        elements[i].checked = main.checked;
    }
}


function addLetter() {
    let templateLetter =    '<input type="checkbox" class="check">\n' +
                            '<div class="mail__logo-yandex">\n' + 
                            '<img src="img/2-layers.png" alt="Yandex"></div>\n' +
                            '<div class="mail__message-type mail__message_bold"></div>\n' +
                            '<div class="mail__marker-letter"></div>\n' +
                            '<div class="mail__letter mail__message_bold"></div>\n' +
                            '<div class="mail__latter-date">6 июл</div>\n';
    
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


document.getElementById('addElement').addEventListener("click", addLetter);
document.getElementById('check-all').addEventListener('click', selectAllLetter);
document.getElementById('delete-letter').addEventListener("click", deleteLetters);