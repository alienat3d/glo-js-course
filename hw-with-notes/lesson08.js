'use strict';

// * == Рефакторинг кода == * \\

// ? «Рефакторинг» — значит улучшение и оптимизация кода.

// 1.1.2 [...] Мы создадим новый объект services, вместо свойств service1 & service2. И будем заполнять его в виде ключ: значение, где ключ это название услуги, а значение — его стоимость. ↓
// 1.2.2 Ранее мы сохраняли эти данные в appData.screens, а теперь сделаем это свойство массивом объектов. ↓
const appData = {
	ROLLBACK: 5,
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	services: {},
	ask: function () {
		appData.title = prompt('Как называется ваш проект?', ' КаЛьКулятор Верстки');
		// appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
		
		// appData.adaptive = confirm('Нужен ли адаптив на сайте?');

		// * 1.2.0 Создадим такой же цикл и для вопросов о типе экранов и их стоимости.
		for (let i = 0; i < 2; i++) {
			const name = prompt('Какие типы экранов нужно разработать?');
			let price = 0;

			do {
				price = prompt('Сколько будет стоить данная работа? (₽)')
			} while (!appData.isNumber(price));

			// 1.2.1 И после каждого вопроса нам необходимо где-то сохранять ответы пользователя. Например, мы можем сохранять их в массив в виде объектов, где у каждого объекта будет свои id, стоимость, название, а в будущем ещё и кол-во. ↑
			// 1.2.3.0 В этот массив, после успешной проверки на число, мы будем сохранять новый объект. Добавлять объект мы будем с помощью метода push(). Итак мы запишем в этот объект индекс в свойство id, название из значения переменной name и цену из переменной price.
			// screens.push({id: i, name: name, price: price});
			// ? 1.2.3.1 В современном стандарте JS можно такую запись сократить
			appData.screens.push({id: i, name, price});
		}

		// 1.2.4 А дальше можно рассчитать сумму либо циклом for...of, либо методом reduce.
		// 1.3.1 [...] Поэтому мы просто перенесём этот цикл в метод addPrices() ↓
/* 		for (const screen of appData.screens) {
			appData.screenPrice += +screen.price;
		} */

		// 1.1.1 [...] Перенесём весь цикл for в ask(). ↑
		// 1.1.3 [...] Мы создадим доп. переменную «name» для названий услуг и перенесём ответ на вопрос в эту переменную
		for (let i = 0; i < 2; i++) {
			const name = prompt('Какой дополнительный тип услуги нужен?');
			let price = 0;

/* 			if (i === 0) {
				appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
			} else if (i === 1) {
				appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
			} */

			do {
				price = prompt('Сколько будет стоить данная работа? (₽)')
			} while (!appData.isNumber(price));
			// 1.1.4.0 [...] И будем заполнять его в виде ключ: значение, где ключ это название услуги, а значение — его стоимость. И делать это после проверки на число.
			// ? 1.1.4.1 Однако с этим есть один нюанс: если пользователь на вопрос о названии услуги дважды ответит одно и то же, то второе свойство услуги у нас не появится. Т.к. такой ключ будет уже существовать и его значение перезапишется. С этим поможет справится итератор цикла («i»).
			appData.services[name] = +price;

			// sum нам тоже больше здесь не требуется
			// sum += +price;
		}
	},
	// * 1.3.0 Создадим доп. метод addPrices(), который будет рассчитывать стоимость экранов и доп. услуг. Т.к. не очень хорошо, что мы делаем сейчас это в методе ask(). [...] ↑
	addPrices: function () {
		for (const screen of appData.screens) {
			appData.screenPrice += +screen.price;
		}

		for (const price in appData.services) {
			appData.allServicePrices += appData.services[price];
		}
	},
	isNumber: function (num) {
		// Также здесь поправил скобочку (до этого стояла после метода isFinite())
		return !isNaN(parseFloat(num)) && isFinite(num);
	},
	// * 1.1.0 Всегда лучше, если функция выполняет только одну задачу, поэтому не очень здорово, что она также задаёт вопросы. До этого этот метод выполнял сразу две задачи: задавал пользователю вопросы и высчитывал сумму цен доп. услуг. Поэтому мы перенесём функционал опроса пользователя в метод ask(), что будет правильнее и логичнее. Но сделать это не так просто, ведь мы здесь высчитываем сумму из данных, которые получаем от пользователя опросом. На данный момент ответы на вопрос о типе услуги записывается каждый в своё свойство, а цена на каждую из этих услуг не записывается в свойство вовсе, а сразу прибавляются к итоговой сумме, что не очень хорошо. Итак, мы можем записать ответы на вопросы в объект парой "ключ: значение". Так мы сможем перенести опрос в ask() и потом здесь перебирать объект с ответами, вычисляя общую сумму, что будет более правильным. [...] ↑
	// 1.3.2 Кроме того в метод addPrices() мы можем перенести и цикл из getAllServicePrices(), т.к. у нас теперь есть общий метод для расчёта стоимости.
	getAllServicePrices: function () {
		// 1.1.5 Теперь, когда у нас уже есть объект services, нам осталось только перебрать его циклом «for in» и суммировать его значения (цены).
		/* for (const key in appData.services) {
			appData.allServicePrices += appData.services[key];
		} */

		// let sum = 0;

		/* for (let i = 0; i < 2; i++) {
			let price = 0;

			if (i === 0) {
				appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
			} else if (i === 1) {
				appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
			}

			do {
				price = prompt('Сколько будет стоить данная работа? (₽)')
			} while (!appData.isNumber(price));

			sum += +price;
		} */
		// 1.0.3
		// appData.allServicePrices = sum;
	},
	getFullPrice: function () {
		// 1.0.4
		appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
	},
	getTitle: function () {
		if (!appData.title) {
			return console.log('Название проекта не было указано!');
		} else {
			// 1.0.2
			appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
		}
	},
	getServicePercentPrice: function () {
		// 1.0.1
		appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.ROLLBACK / 100));
	},
	getRollbackMessage: function (price) {
		if (price >= 30000) {
			return "Даем скидку в 10%";
		} else if (price >= 15000 && price < 30000) {
			return "Даем скидку в 5%";
		} else if (price >= 0 && price < 15000) {
			return "Скидка не предусмотрена";
		} else {
			return "Что-то пошло не так";
		}
	},
	// * 1.0.0 Уберём из start() присваивания значений свойствам в сами функции. А здесь оставим лишь их запуск. ↑
	start: function () {
		appData.ask();
		appData.addPrices();
		appData.getFullPrice();
		appData.getServicePercentPrice();
		appData.getTitle();
		appData.logger();
	},
	logger: function () {
		console.log(appData.fullPrice);
		console.log(appData.servicePercentPrice);
		console.log(appData.screens);

		/* for (const key in appData) {
			console.log(key);
		} */
	}
}

appData.start();