'use strict';

// * === Асинхронный код. Promise & Fetch === * \\

// ? 1.0 Асинхронный код — это такой код, который срабатывает не в том порядке, как он написан в файле (не строчка за строчкой).
// 1.1 Пример асинхронного кода:
// console.log(1);
// setTimeout(() => {
// 	console.log(2);
// }, 2000);
// console.log(3);
// setTimeout(() => {
// 	console.log(4);
// }, 1000);

// ? 1.2 В приложении может быть множество асинхронного кода, например это: получение данных из JSON, работа с разными API, получение данных с сервера и др.
// ? 1.3 Для работы с асинхронным кодом у нас есть удобный инструмент: промис (Promise). Промис принимает коллбэк, который, в свою очередь, принимает ещё два параметра: "resolve" & "reject". Внутри фигурных скобок ("тела коллбэк функции") мы можем совершать асинхронные операции.
// ? 1.4 Итак, "resolve" отвечает за успех нашей асинхронной функции, а "reject" за её неудачу.
// 1.5 Представим, что, например, у нас есть переменная "a" равная 10.
// 1.6 А с помощью setTimeout() мы симулируем задержку получения данных с сервера.
const a = 20;

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (a > 10) {
			resolve(a)
		} else {
			reject('Oops, it seems, that we’ve got an error!')
		}
	}, 1000);
});

// ? 1.7 У промиса есть метод "then", который очень часто используется. Он нужен, чтобы подождать ответа и только тогда отреагировать на него. Он принимает коллбэк с параметром data. Т.к. "а" равно 20 и проходит проверку, то попадает в "resolve", а "resolve" передаёт значение в then() и в его параметр коллбэка "data".
// ? 1.8.0 Если же у нас значение "а" не удовлетворяет условию промиса, то оно попадёт в "reject" и выдаст указанное нами сообщение. Но мы также можем написать коллбэк, которые обработает эту ошибку. В методе "then" мы ставим "," и пишем второй коллбэк, куда поместим "errorMessage". По сути параметр "resolve" запустит первый коллбэк метода then(), а параметр "reject" второй коллбэк метода then().
promise1.then(data => {
	console.log(data);
}, errorMessage => {
	console.error(errorMessage);
})

// ? 1.8.1 Однако есть более элегантный способ записи с методом catch(). Он специально создан для перехвата ошибок и он сработает, когда значение попадёт в "reject". И то, что мы передали в "reject" примет параметр коллбэка "errorMessage" метода catch().
// ? 1.9 Итак, ещё раз пошагово как работает промис: Когда мы запускаем промис, то у него статус "pending", т.е. ожидание. Как только асинхронная функция сработает и значение попадёт в "resolve", то его статус сменится на "fulfilled", но если произошла какая-то ошибка (например условие вернуло false), то вызовется "rejected", а статус промиса станет "rejected".
// ? 1.10 Есть ещё один метод finally() и он также принимает коллбэк и выполняет какую-то операцию в конце, независимо от того, сработала ли связка resolve/then или reject/catch.
// * 1.11 А теперь поработаем с цепочкой then(), мы называем "цепочкой", т.к. методов "then" может быть много друг за другом. Мы модифицируем данные, полученные в data и вернём их из then. Затем мы следом запишем ещё один then() и передадим в него параметр newData, который будет принимать значение, возвращаемое из предыдущего then(). И так мы можем модифицировать значение столько раз, сколько нужно, пропуская через цепочку методов then().
promise1
	.then(data => {
		data = data + 10;
		return data;
	})
	.then(newData => {
		console.log(newData);
	})
	.catch(errorMessage => {
		console.error(errorMessage);
	})
	.finally(() => {
		console.info('Промис окончен');
	})
// ? 1.13.0 Есть лишь одна проблема — в сам промис мы не можем ничего передать, как в функцию мы передаём аргументы. Поэтому мы можем сделать следующее, мы перепишем переменную promise, сделав её функцией, которая будет возвращать new Promise(). И в эту сущность мы уже можем передавать аргументы, например в параметр "num". ↓
const promise2 = (num) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (num > 10) {
				resolve(num)
			} else {
				reject('Oops, it seems, that we’ve got an error!')
			}
		}, 1000);
	})
};

// 1.12 Мы может сократить запись до:
// ? 1.13.1 Теперь можно вызвать promise, передав в него число. Теперь мы можем передавать в промис какие-то данные и далее с ней работать. К примеру, если мы получили с сервера данные какого-то юзера, то мы можем передать в промис id этого юзера. И далее внутри промиса мы можем задать запрос серверу по этому id. Затем в then() получим ответ от сервера.
// * 1.14 Теперь попробуем что-то другое, в метод then() мы поместим ещё один промис и модифицируем data через него. Таким образом мы можем конструировать промис на промисе и возвращать каждый раз асинхронное действие.
promise2(15)
	.then(data => {
		console.log(data);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(data + 10)
			}, 2000);
		})
	})
	.then(data => {
		console.log(data);
	})
	.catch(errorMessage => console.error(errorMessage))
	.finally(() => console.info('Промис окончен'));

// * 1.15.0 Однако, что если нам нужно дожидаться сразу несколько результатов промиса? Рассмотрим и такой вариант.
// 1.15.1 Теперь в reject мы также передадим "num" и создадим переменную в которую поместим результат выполнения промиса, в который передадим 15.
const promise3 = (num) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (num > 10) {
				resolve(num)
			} else {
				reject(num)
			}
		}, 1000);
	})
};

const first = promise3(5);
const second = promise3(25);
const third = promise3(35);

// ? 1.15.2 Чтобы дождаться всех промисов и получить единый результат есть специальный метод промиса 'all()'. В него мы передаём в массиве каждый из промисов. Ну, и потом по старой схеме проведём через then(), дополняя catch(), на случай ошибки.
// 1.15.3 Мы получим 3 успешных отработки. Но если мы заменим значение переменной "first" с 15 на 5, то уже получим только один reject, а именно значение 5.
// ? 1.15.4 Итак, если нам нужно получить разные данные из разных асинхронных запросов, то мы можем использовать метод промиса "all()", т.о. если все данные придут успешно, то мы их сразу объединим в массив. Иногда это очень полезно.
Promise.all([first, second, third])
	.then(data => {
		console.log(data);
	})
	.catch(error => console.error(error));

// ? 1.15.5 Промисы это важная тема к пониманию работы с серверами и API, а также столь популярным методом fetch(), к который мы рассмотрим ниже.

// * == AJAX (Asynchronous Javascript and XML) == * \\

// ? AJAX — старая аббревиатура и XML мы уже не используем, просто название прижилось как термин. Когда-то давно, когда JavaScript был не настолько развит, для работы с сетевыми запросами был единственный метод XMLHttpRequest(). И работа с этим методам была совсем не простой и не слишком удобной.
// ? Потом, для упрощения этой задачи была придумана библиотека "fetch", которая впоследствии обрела такую популярность в сообществе программистов, что даже вошла в современный стандарт JS, как новый метод на замену старому XMLHttpRequest().

// * 2.0 Итак, у нас есть локальная база данных (файл db.json) из которого мы получим данные при помощи fetch().
// ? 2.1 Метод fetch() получает минимум один аргумент — это URL запроса на сервер, удалённый или локальный (даже если этим лок. сервером является этот компьютер, как в данном случае :)).
// 2.2 Попробуем эти данные обработать. Если мы получим user в console.log(), то увидим, что мы получаем некий response (ответ от сервера). 
const user = fetch('db.json');

// 2.3. Если вывести "response" в консоль, то мы увидим объект Response. У него есть разные полезные свойства, но обратим внимание на body (тело данных с сервера) и там стоит значение "ReadableStream", а это не совсем тот формат данных, который нам нужен. Чтобы увидеть данные и мочь с ними работать, нам сперва нужно вернуть response и применить к нему метод json(), после чего продолжить цепочку then().
// 2.4 Следующий метод then() получит data, если мы её выведем в консоль, то получим нужный объект.
// ? 2.5 Итак, в переменную user мы поместили промис из метода fetch(), который получается данные из базы данных (файл db.json), далее мы помещаем ответ в response и обрабатываем методом json(), конвертируя в обычный JS-объект, с которым можем работать.
user.then(response => response.json())
	.then(data => console.log(data));

console.log(user);

// ? 2.6 Конечно же запись выше была больше для наглядности, в рутине работы мы хотим сокращать код и он будет выглядеть так:
// 2.7 Т.к. fetch() использует промисы, то и здесь мы можем использовать методы catch() для обработки ошибки и finally().
fetch('db.json')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error))
	.finally(console.log('Script is done'));

// * 3.0 А теперь попрактикуемся с удалённым сервером, с этим нам прекрасно поможет API JSONPlaceholder, это тренировочный сервер, который можно использовать для тестов и обучения. Мы получим огромный массив из 100 записей.
fetch('https://jsonplaceholder.typicode.com/posts');

// 3.1 Чтобы обратиться к конкретной, из документации мы найдём, что нужно добавить "/" и номер записи, которую хотим получить
// ? 3.2 Также, после URL мы можем поставить "," и добавить объект настроек — необязательный аргумент метода fetch(). Там мы можем настроить, например, метод отправки. Помимо, идущего по умолчанию метода "GET" (получение данных от сервера), есть также и другие, например метод "POST", который отправляет данные на сервер.
// ? 3.3 Далее, как мы видим есть ещё и другие настройки, это "body" (тело запроса - тот объект, что мы отправляем для записи на сервер, но он не всегда бывает в JSON-формате) и "headers" (заголовки), где указывается "Content-type", с которым часто случается суета. Часто он бывает "json", но не всегда. (Чаще всего бэкэндеры нам сообщат в каком формате они ожидают данные для обработки на сервере.) По ссылкам ниже можно ознакомиться с разными типами и настройками.
fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1,
	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
})
	.then(response => response.json())
	/* //? После конвертации данных в объект JS, мы могли бы также отправить его на отрисовку в какой-нибудь метод render(), например так:
	.then(data => render(data)) */
	.then(data => console.log(data))
	.catch(error => console.error(error));

// todo Теперь перейдём в файлы мини-тестового проекта, где мы реализуем отправку данных из небольшой формы [./form/] 

/* ||---------------------------------------------->> 
* Links:
* [✓][https://learn.javascript.ru/promise] Promise
* [✓][https://learn.javascript.ru/fetch] Fetch
* [][https://jem-space.ru/praktichieskoie-es6-rukovodstvo-o-tom-kak-sdielat-http-zapros-s-pomoshchiu-fetch-api/] РУКОВОДСТВО ПО FETCH API
* [][https://learn.javascript.ru/xmlhttprequest] XMLHttpRequest
*/ 