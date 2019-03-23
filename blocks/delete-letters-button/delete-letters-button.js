(function() {
	document.querySelector('.delete-letters-button').onclick = () => {
		removeLetters(getMarkedLetters());
	};

	function removeLetters(letters) {
		letters.forEach(letter => {
			letter.classList.add('letter_deleted');
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