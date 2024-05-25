'use strict';

const ROLLBACK = 5;

let title,
	screens,
	screenPrice,
	adaptive,
	fullPrice, 
	service1,
	servicePrice1,
	service2,
	servicePrice2,
	screensVariety,
	servicePercentPrice,
	allServicePrices;

const showTypeOf = function (variable) {
	console.log(typeof variable);
}

const confirmQuestion = function (question) {
	return confirm(question);
}

const promptQuestion = function (question, defaultVal) {
	return prompt(question, defaultVal);
}

const getAllServicePrices = function (servPrice1 = 0, servPrice2 = 0) {
	return servPrice1 + servPrice2;
}

const rollbackCount = function (fPrice, rb) {
	return fPrice * (rb / 100);
}

const calcPriceAfterRollback = function () {
	return Math.ceil(fullPrice - rollbackCount(fullPrice, ROLLBACK));
}

const getTitle = function () {
	if (!title) {
		return title;
	} else {
		title = title.trim().toLowerCase();
		const firstLetter = title[0].toUpperCase();
		title = firstLetter + title.slice(1);
		return title;
	}
}

const getServicePercentPrices = function () {
	return fullPrice - rollbackCount(fullPrice, ROLLBACK);
}

const getRollbackMessage = function (price) {
	switch (true) {
		case price >= 30000:
			return `Поздравляем! Вы получили от нас скидку 10%! Ваша цена теперь составляет ${price - (price * 0.1)}₽!`;
		case price <= 30000 && price >= 15000:
			return `Поздравляем! Вы получили от нас скидку 5%! Ваша цена теперь составляет ${price - (price * 0.05)}₽!`;
		case price <= 15000 && price >= 0:
			return `Скидка не предусмотрена. Ваша цена ${price}₽.`;
		case price < 0:
			return 'Что-то пошло не так...';
	}
}

function getFullPrice() {
	return screenPrice + allServicePrices;
}

do {
	title = promptQuestion('Как называется ваш проект?');
} while (!title);

getTitle(title);

do {
	screens = promptQuestion('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
} while (!screens);

screensVariety = screens.toLowerCase().split(', ');

do {
	screenPrice = parseInt(promptQuestion('Сколько будет стоить данная работа?', '12000'));
} while (!screenPrice);

adaptive = confirmQuestion('Нужен ли адаптив на сайте?');

service1 = confirmQuestion('Нужна ли вам SEO-оптимизация сайта?');
if (service1) {
	do {
		servicePrice1 = parseInt(promptQuestion('Какой у вас бюджет для данной услуги?'));
	} while (!servicePrice1);
}
	

service2 = confirmQuestion('Нужно вам наполнение и сопровождение сайта?');
if (service2) {
	do {
		servicePrice2 = parseInt(promptQuestion('Какой у вас бюджет для данной услуги?'));
	} while (!servicePrice2);
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens);

console.log(getRollbackMessage(fullPrice));

console.log(getServicePercentPrices());