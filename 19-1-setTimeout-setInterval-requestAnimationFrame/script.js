'use strict';

// * === Скрипты и время выполнения setTimeout, setInterval и requestAnimationFrame === * \\

// * == setTimeout() ==

// ? 1.0 Внутрь этого методы мы передаём два аргумента: 1) коллбэк-функция, которая сработает через указанную задержку времени (в миллисекундах), 2) кол-во миллисекунд, через которое она сработает.
// window.setTimeout(function () {
// 	console.log('Метод setTimeout сработал');
// }, 2000);

// ? 1.1 В принципе мы можем укоротить запись, не написав объект "window" и преобразить коллбэк-функцию в стрелочную.
setTimeout(() => console.log('Метод setTimeout сработал'), 2000);

// ? 1.2.0 А ещё мы могли бы передать вместо коллбэк-функции название функции, например, напишем для этого примера функцию "logger()", которая будет выводить сообщение в консоль.
const logger = () => {
	console.log('Метод setTimeout сработал снова');
}

// 1.2.1 Обратим внимание, что название функции без "()", т.е. без сиюсекундного её вызова, а запустит её сам setTimeout(), когда пройдёт timeout.
setTimeout(logger, 3000);

// ? 1.3.0 Что если в функцию logger2 нам нужно передавать аргумент?
const logger2 = (str) => {
	console.log(`Привет, я — ${str}.`);
}

// 1.3.1 В этом случае нам понадобится функция-обёртка
setTimeout(() => {
	logger2('фронтендер');
}, 4000);

// * == setInterval() ==

// ? 2.0 Срабатывает снова и снова через равные интервалы по времени, пока не будет остановлен. 

setInterval(() => {
	logger2('это я');
}, 4000);

// * == Остановка setTimeout() & setInterval(): clearTimeout() & clearInterval()

// ? 3.0 Полезные инструменты, когда нам нужно останавливать таймауты или интервалы после каких либо событий, например, если пользователь сам перешёл к полю ввода информации в форму, то лучше отменить модальное окно с помощью clearTimeout().
// 3.1 Внутрь них нужно передать идентификатор того таймаута или интервала, который мы хотим остановить. Это значит занести их в переменную.
const idTimeout = setTimeout(() => {
	logger2('таймаут с отменённым таймаутом, а значит не запустится вовсе.')
}, 3000);

clearTimeout(idTimeout); // в консоли его нет, т.к. был очищен сразу при инициализации

// ? 3.2 clearInterval() работает тем же способом.
const idInterval = setInterval(() => {
	logger2('ба да ба ду!')
}, 500);

clearInterval(idInterval); // снова пусто, т.к. интервал был остановлен сразу же после инициализации

// 3.3 Рассмотрим пример. Будем считать до 10, при вызове функции в интервале, после чего остановим его.
let count = 0;

const myInterval = setInterval(() => {
	count++;
	logger2('setInterval, который сработает лишь 10 раз');

	if (count === 10) clearInterval(myInterval);
}, 200);

// 3.4 Рассмотрим ещё один пример интервала через таймаут и рекурсию

const btn1 = document.querySelector('.btn-1');

let idTimeout3;
let active = false;

// 3.5 По клику на кнопку наш рекурсивный таймаут остановится, т.к. мы присвоим в переменную "active" = false;
document.addEventListener('click', () => {
	/* 	if (active) {
			active = false;
		} else {
			active = true;
		} */
	// ? Или можно сильно сократить нотацию
	active = !active;

	logger3('рекурсивный таймаут');
})

const logger3 = (str) => {
	if (active) {
		console.log(`Хэй, я ${str}!`);
		idTimeout3 = setTimeout(() => {
			logger3('рекурсивный таймаут')
		}, 333);
	} else {
		clearTimeout(idTimeout3);
	}
}

// todo [следующий пример см. ./piece-of-code/sky-diver/]

// * == requestAnimationFrame() ==

// ? Но вообще-то анимация это не та сфера, где стоит использовать setTimeout() и setInterval(), разве что для самых простых анимаций. Но для полноценных анимаций внутри объекта window есть отдельный метод "requestAnimationFrame()".
// ? Почему так? Дело в принципе работы setInterval(), по сути анимация получается довольно дёрганной, т.к. мы имеем дело с перемещением картинки из точку в точку, просто очень часто, а также такой подход оказывает довольно сильную нагрузку на процессор устройства.

// todo [пример там же см. ./piece-of-code/sky-diver/]

/* ||---------------------------------------------->> 
* Links:
* [][https://html5.by/blog/what-is-requestanimationframe/] Что такое requestAnimationFrame?
* [✓][https://learn.javascript.ru/js-animation] JavaScript-анимации
* [][https://learn.javascript.ru/datetime] Дата и Время
* [][https://habr.com/ru/post/60957/] Микропаттерны оптимизации в Javascript
* [][https://medium.com/nuances-of-programming/%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-throttling-%D0%B8-debouncing-4f0a839769ef] Что такое Throttling и Debouncing?
* [✓][https://doka.guide/js/debounce/] Debounce на примере формы поиска (см. ./piece-of-code/debounce/)
*/