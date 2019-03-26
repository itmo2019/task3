function deleteChecked() {
	var letters = document.querySelectorAll(".letters__checkbox:checked");
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		letter.checked = false;
		letter = letter.closest(".letters__single_letter")
		letter.classList.add('zeroOpacity')
		letter.addEventListener('transitionend', (event) => {
			event.target.remove()
		})
	}
}
function insertNewLetter() {
	var letters = document.querySelector(".letters__letterbox")
	var newLetter = undefined
	if ('content' in document.createElement('template')) {
		var template = document.querySelector('#letter_template')
		newLetter = document.importNode(template.content, true)
		newLetter = newLetter.querySelector(".letters__single_letter")
	} else {
		newLetter.className = "letters__single_letter"
		newLetter.innerHTML = '<div class="letters__letter_element">' + 
								  '<input class="letters__checkbox" type="checkbox">' +
							  '</div>' + 
							  '<div class="letters__letter_element">' +
								  '<img class="ya_logo" src="https://yastatic.net/mail/socialavatars/socialavatars/v4/ya-default.svg">' +
							  '</div>' + 
							  '<div class="letters__letter_element letters__letter_header letters__highlighted">' +
								  '<a href="#">Болванка под новое письмо</a>' +
							  '</div>' +
							  '<div class="letters__letter_element">' +
								  '<div class="bullet_unread"></div>' +
							  '</div>' +
							  '<div class="letters__letter_element letters__letter_header letters__letter_text letters__highlighted">' +
								  '<a href="#">Тут должен быть мемчик, но мне лень думать</a>' +
							  '</div>' +
							  '<div class="letters__letter_element letters__letter_date">17 мар</div>'
	}
	newLetter.classList.add('zeroOpacity')
	var firstLetter = letters.querySelector(".letters__single_letter")
	letters.insertBefore(newLetter, letters.childNodes[Array.prototype.indexOf.call(letters.childNodes, firstLetter)])
	var hack = newLetter.offsetHeight
	newLetter.classList.remove('zeroOpacity')
}