(function() {
	document.querySelector('.delete-letters-button').onclick = () => {
		removeLetters(getMarkedLetters());
	}

	function removeLetters(letters) {
		letters.forEach(letter => {
			letter.classList.add('letter_deleted')
			letter.addEventListener("animationend", () => {
				letter.remove();
			});
		});
	}

	function getMarkedLetters() {
		return Array.from(document.querySelectorAll('.letter')).filter(letter =>
			letter.getElementsByClassName('checkbox__real-checkbox')[0].checked
		);
	}
})();
(function() {
	document.querySelector('.new-letter-button').onclick = () => {
		document.querySelector('.letters__list').insertAdjacentElement('afterbegin', createNewLetter());
	}

	var letterContent =  {
		img: 'img/ya.svg',
		name: 'Some name',
		content: 'Some subject',
		date: '2018-07-06'
	}

	function createNewLetter() {
		var letter = document.createElement('li');
		letter.classList.add('letter', 'letters__letter', 'letter_unread', 'letter_new');
		letter.insertAdjacentHTML('afterbegin', createLetterHtml(letterContent));

		letter.addEventListener("animationend", () => {
			letter.classList.remove('letter_new');
			letter.removeEventListener("animationend", this)
		});

		return letter;
	}
	
	function createLetterHtml(content) {
		return `<a href="#" class="letter__link">
					<div class="letter__preview">
						<div class="checkbox letters__checkbox letter__checkbox">
							<label class="checkbox__label letters__checkbox-label">
								<input type="checkbox" class="checkbox__real-checkbox">
								<span class="checkbox__checkbox-view"></span>
							</label>
						</div>
						
						<span class="letter__profile-image profile-image" style="background-image: url('${content.img}');"></span>
						<span class="profile-name letter__profile-name text_with-ellipsis">${content.name}</span>
						<span class="letter__unread-flag unread-flag"></span>
						<span class="content-preview letter__content-preview text_with-ellipsis">${content.content}</span>
						<time class="date letter__date text_with-ellipsis" datetime="${content.date}">${parseDate(content.date)}</time>
					</div>
				</a>`
	}

	var months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
	function parseDate(date) {
		var dateEntries = date.split('-');

		var month = parseInt(dateEntries[1]);
		var day = parseInt(dateEntries[2]);

		return `${day} ${months[month]}`;
	}
})();