'use strict';

function asking() {
	let res = prompt('Напишите чего-нибудь');

	if (res === null) {
		res = asking();
		console.log('Это null');
	} else if (res === '') {
		res = asking();
		console.log('Это пустая строка');
	} else {
		console.log('Отлично', res.replace(',', '.'));
	}
}

asking();