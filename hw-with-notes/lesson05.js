'use strict';

const ROLLBACK = 5;

let title, 
		screens, 
		screenPrice, 
		adaptive, 
		allServicePrices, 
		fullPrice, 
		servicePercentPrice, 
		service1, 
		service2;

// * 1.1 И нам необходимо не простое, а булево значение, т.е. подходит нам значение или не подходит, является ли оно числом? ↓
// 1.3 Но при проверке на число мы можем проверить также такой паттерн "   (число)   ". Для этого необходимо выбрать именно число из этих данных. В этом поможет нам метод parseFloat(). (Можно было бы также использовать parseInt(), но как знать, может стоимость будет не только в целых числах, поэтому здесь parseFloat() подойдёт лучше.)
// 1.4 Т.к. мы всё таки проверяем на число, а isNaN() проверяет наоборот, что значение является NaN (Not a Number), то, чтобы достичь нужного результата поставим ! - знак отрицания.
// 1.5 И всё же этого недостаточно, т.к. если в num попадёт "10abc", то мы получим true, а нам такой результат не подходит, поэтому добавим ещё проверку isFinite(), которая проверит, является ли, попавшее в неё значение, конечным числом?
// ? 1.6 Данная проверка является чуть ли не лучшим на текущий день способом в JS проверить на число.
const isNumber = function (num) {
	return !isNaN(parseFloat(num) && isFinite(num));
}

const ask = function () {
	title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
	screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
	// Проверки: 1) на числовой тип данных, 2) на пустую строку (trim() исключит введённые пробелы), 3) на null (если юзер кликнет кнопку "Отмена")
	// ? Но дело в том, что унарный + перед prompt вернёт нам не null, а 0. Кроме того, если нажмут кнопку Отмена, то полученный 0 с методом trim() вызовет ошибку, т.к. это метод для строчных типов данных. Поэтому + необходимо убрать.
	/* 	do {
		screenPrice = prompt('Сколько будет стоить данная работа?')
	} while (isNaN(screenPrice) || screenPrice.trim() === '' || screenPrice === null); */
	// * 1.0 Но эти проверки вовсе не идеальное решение, есть и получше — универсальное решение для проверки на число. Для этого создадим ещё одну функцию. ↑
	// 1.2 А само условие запишем, как вызов функции с переменной, где находится ответ от пользователя.
	do {
		screenPrice = prompt('Сколько будет стоить данная работа?')
	} while (!isNumber(screenPrice));

	adaptive = confirm('Нужен ли адаптив на сайте?');
}

// const servicePercentPrice = fullPrice - (fullPrice * (ROLLBACK / 100));
// const screensVariety = screens.toLowerCase().split(', ');

const getAllServicePrices = function () {
	let sum = 0;

	for (let index = 0; index < 2; index++) {
		if (index === 0) {
			service1 = prompt('Какой дополнительный тип услуги нужен?');
		} else if (index === 1) {
			service2 = prompt('Какой дополнительный тип услуги нужен?');
		}

		sum += +prompt('Сколько эта услуга будет стоить?');
	}

	return sum;
}

const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
}

const getFullPrice = function () {
	return screenPrice + allServicePrices;
}

const getServicePercentPrice = function () {
	return fullPrice - (fullPrice * (ROLLBACK / 100));
}

const getTitle = function () {
	if (!title) {
		return console.log('Название проекта не было указано!');
	} else {
		/*	title = title.trim().toLowerCase();
				const firstLetter = title[0].toUpperCase();
				title = firstLetter + title.slice(1);
				return title; */
		return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase();
	}
}

/* const getRollbackMessage = function (price) {
		switch (true) {
			case price >= 30000:
				console.log(`Поздравляем! Вы получили от нас скидку 10%! Ваша цена теперь 	составляет ${price - (price * 0.1)}₽!`);
				break;
			case price <= 30000 && price >= 15000:
				console.log(`Поздравляем! Вы получили от нас скидку 5%! Ваша цена теперь 	составляет ${price - (price * 0.05)}₽!`);
				break;
			case price <= 15000 && price >= 0:
				console.log(`Скидка не предусмотрена. Ваша цена ${price}₽.`);
				break;
			case price < 0:
				console.log('Что-то пошло не так...');
				break;
	}
} */
const getRollbackMessage = function (price) {
	if (price >= 30000) {
		return "Даем скидку в 10%";
	} else if (price >= 15000 && price < 30000) {
		return "Даем скидку в 5%";
	} else if (price >= 0 && price < 15000) {
		return "Скидка не предусмотрена";
	} else {
		return "Что-то пошло не так";
	}
}

ask();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices:', allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(screens);
console.log(servicePercentPrice);

console.log(
	'Стоимость верстки экранов ' + screenPrice + ' рублей. \n' +
	'Стоимость разработки сайта ' + fullPrice + ' рублей.'
);
// fullPrice = getFullPrice();
// servicePercentPrice = getServicePercentPrices();
// console.log(screens);
// getRollbackMessage();
// console.log(servicePercentPrice);