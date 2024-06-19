const game = () => {
	const N = 33;
	
	const num = prompt('Угадайте число от 1 до 100');

	// const isNan = function (num) {
	// 	return isNaN(parseFloat(num) && isFinite(num));
	// }

	switch (true) {
		case num === null:
			alert('Игра окончена.\nОбновите страницу, чтобы сыграть еще раз. (F5 на клавиатуре)');
			break;
		case +num < 1 || +num > 100:
			alert('Загаданное число должно быть в диапазоне между 1 и 100 включительно. Попробуйте снова!');
			game();
			break;
		case +num === N:
			const oneMore = confirm('Поздравляю, Вы угадали!!!\nХотите сыграть ещё раз?')
			// winsCounter < 1 ? 
			// 	oneMore = confirm('Поздравляю, Вы угадали!!!\nХотите сыграть ещё раз?') : 
			// 	oneMore = confirm(`Поздравляю, Вы снова угадали!!! (Количество побед: ${winsCounter})\nХотите сыграть ещё раз?`);
			if (oneMore) game();
			break;
		case +num > N:
			alert('Загаданное число меньше предложенного вами числа. Попробуйте снова!');
			game();
			break;
		case +num < N:
			alert('Загаданное число больше предложенного вами числа. Попробуйте снова!');
			game();
			break;
		default:
			alert('Неправильный ввод. Попробуйте снова!');
			game();
	}
}

game();