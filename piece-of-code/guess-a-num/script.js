'use strict';

// let winsCount = 0;

const start = () => {
	// const N = 33;
	const N = randomNumGenerator();
	console.log(N);
	let count = 1;

	function makeCounter() {
		let count = 0;

		return function () {
			count++;
			return count;
		};
	}

	function randomNumGenerator() {
		const num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		return num;
	}

	let gamesCounter = makeCounter();
	// let winsCounter = makeCounter();

	function ask() {
		if (count <= 10) {
			const num = prompt('Угадайте число от 1 до 100');

			switch (true) {
				case num === null:
					alert('Игра окончена.\nОбновите страницу, чтобы сыграть еще раз. (F5 на клавиатуре)');
					break;
				case +num < 1 || +num > 100:
					alert('Загаданное число должно быть в диапазоне между 1 и 100 включительно. Попробуйте снова!');
					ask();
					break;
				case +num === N:
			/* 	let oneMore;
					winsCount = winsCounter();
					winsCount < 2 ?
						oneMore = confirm('Поздравляю, Вы угадали!!!\nХотите сыграть ещё раз?') :
						oneMore = confirm(`Поздравляю, Вы снова угадали!!! (Количество побед: ${winsCount})\nХотите сыграть ещё раз?`); */
					const oneMore = confirm('Поздравляю, Вы угадали!!!\nХотите сыграть ещё раз?');
					if (oneMore) start();
					break;
				case +num > N:
					alert(`Загаданное число меньше предложенного вами числа. Попробуйте снова!\n(Осталось попыток: ${10 - count})`);
					count = gamesCounter();
					ask();
					break;
				case +num < N:
					alert(`Загаданное число больше предложенного вами числа. Попробуйте снова!\n(Осталось попыток: ${10 - count})`);
					count = gamesCounter();
					ask();
					break;
				default:
					alert(`Неправильный ввод. ¯\\_(ツ)_/¯ Попробуйте снова!\n(Осталось попыток: ${10 - count})`);
					ask();
					break;
			}
		} else {
			const oneMore = confirm('Ваши 10 попыток угадать закончились. Игра окончена. ¯\\_(ツ)_/¯\nХотите сыграть ещё раз?');
			if (oneMore) start();
		}
	}
	ask();
}

start();

// const isNan = function (num) {
// 	return isNaN(parseFloat(num) && isFinite(num));
// }

// count = gamesCounter();
// if (num === null) {
// 	alert('Игра окончена.\nОбновите страницу, чтобы сыграть еще раз. (F5 на клавиатуре)');
// } else if (+num < 1 || +num > 100) {
// 	alert('Загаданное число должно быть в диапазоне между 1 и 100 включительно. Попробуйте снова!');
// 	ask();
// } else if (+num === N) {

// } else if (+num > N) {
// 	alert('Загаданное число меньше предложенного вами числа. Попробуйте снова!');
// 	count = gamesCounter();
// 	ask();
// } else if (+num < N) {
// 	alert('Загаданное число больше предложенного вами числа. Попробуйте снова!');
// 	count = gamesCounter();
// 	ask();
// } else {
// 	alert('Неправильный ввод. Попробуйте снова!');
// 	ask();
// }