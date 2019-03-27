document.querySelector('.delete-letters-button').onclick = () => {
    removeLetters(getMarkedLetters());
};

function removeLetters(letters) {
    letters.forEach(letter => {
        letter.addEventListener("animationend", () => {
            letter.remove();
        });
        letter.classList.add('letter_deleted');
    });
}

function getMarkedLetters() {
    return Array.from(document.querySelectorAll('.letter')).filter(letter =>
        letter.querySelector('.checkbox__real-checkbox').checked
    );
}
document.querySelector('.new-letter-button').onclick = () => {
    document.querySelector('.letters__list').insertAdjacentElement('afterbegin', createNewLetter());
};

const letterContent = {
    img: 'img/ya.svg',
    name: 'Команда Яндекс',
    content: 'К сожалению, вы нам не подходите, всего доброго',
    date: new Date(Date.UTC(2018, 7, 6))
};

function createNewLetter() {
    var letter = ('content' in document.createElement('template'))
        ? createLetterFromTemplate(letterContent)
        : createLetterFromHtml(letterContent);

    letter.classList.add('letter', 'letters__letter', 'letter_unread', 'letter_new');

    const listener = () => {
        letter.classList.remove('letter_new');
        letter.removeEventListener("animationend", listener)
    };

    letter.addEventListener("animationend", listener);

    return letter;
}

function createLetterFromTemplate(content) {
    var template = document.getElementById('new-letter-template');
    var letter = document.importNode(template.content, true);

    letter.querySelector('.profile-name').textContent = content.name;
    letter.querySelector('.content-preview').textContent = content.content;
    letter.querySelector('.profile-image').setAttribute("style", "background-image: url(img/ya.svg);");

    var date = letter.querySelector('.date');
    date.textContent = getRuDate(content.date);
    date.setAttribute("datetime", getDatetime(content.date));

    return letter.firstElementChild;

}

function createLetterFromHtml(content) {
    const htmlContent =
        `<a href="#" class="letter__link">
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
		</a>`;

    const letter = document.createElement('li');
    letter.insertAdjacentHTML('afterbegin', htmlContent);
    return letter.firstElementChild;
}

const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

function getDatetime(date) {
    return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
}

function getRuDate(date) {
    return new Intl.DateTimeFormat('ru', {day: 'numeric', month: 'short'}).format(date);
}

function parseDate(date) {
    const dateEntries = date.split('-');

    const month = parseInt(dateEntries[1]);
    const day = parseInt(dateEntries[2]);

    return `${day} ${months[month]}`;
}