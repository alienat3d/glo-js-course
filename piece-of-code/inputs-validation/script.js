'use strict';

const button = document.querySelector('.button');
const inputs = document.querySelectorAll('.input');

const obj = {
	checkFields() {
		let error = false;

		inputs.forEach(input => {
			if (input.value === '') error = true;
		});

		return !error;
	},
	start() {
		if (this.checkFields()) console.log('It works!');
	}
}

/* // Альтернативный вариант
const obj = {
	invalid: false,
	checkFields() {
		this.invalid = false;

		inputs.forEach(input => {
			if (input.value === '') this.invalid = true;
		});
	},
	start() {
		this.checkFields();

		if (!this.invalid) console.log('It works!');
	}
} */

button.addEventListener('click', () => obj.start());