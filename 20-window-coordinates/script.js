'use strict';

// * === Параметры документа, окна и работа с ними === * \\

// ? На самом деле DOM является частью объекта BOM (Browser Object Model). BOM — это Window, который является глобальным объектом браузера, а объект Document является его частью, как и все глобальные переменные и глобальные функции тоже являются частями BOM.

console.log(window);

// ? В свойстве screen объекта window находятся много разных неизменяемых данных о странице, которые мы можем использовать. Т.к. window является глобальным объектом, то для удобства к свойству screen можно обращаться напрямую.

console.dir(document);

// ? В свойства document можно найти: clientWidth, clientHeight — это ширина и высота окошка браузера, или viewport. Если открыть DevTools снизу, то его clientHeight уменьшится на высоту консоли DevTools. clientTop и clientLeft — координаты от левого крайнего края вьюпорта и от верхнего соответственно. 

// ? Также есть свойства offsetHeight, offsetWidth, offsetTop и offsetLeft, которые, в отличии, от client-свойств описывают всю страницу, т.е. вместе с прокруткой, если она есть. Но если её нет, то тогда ширина или высота будет равна clientWidth или clientHeight.

// ? Свойства scrollHeight, scrollWidth, scrollTop и scrollLeft — это высота или ширина прокручиваемой области.



// ? Для чего они могут понадобиться clientWidth & clientHeight — на глобальный объект window мы могли бы повесить обработчик события 'resize' и при каждом изменении размеров экрана проверять значения этих свойств. Например, если нужно, чтобы какой-то функционал сработал на широких экранах, но не на мобильных. Мы можем использовать свойство clientWidth в условии, при достижении какого-то значения ширины будет срабатывать функционал.
let width = document.documentElement.clientWidth;

// * 1. Получим ширину экрана в переменную и создадим условие, что на больших экранах цвета фона должны меняться местами
window.addEventListener('resize', () => {
	width = document.documentElement.clientWidth;
	if (width > 1600) {
		document.body.style.backgroundColor = 'coral';
		document.querySelector('section.first').style.backgroundColor = 'darkkhaki';
	} else {
		document.body.style.backgroundColor = 'darkkhaki';
		document.querySelector('section.first').style.backgroundColor = 'coral';
	}
})

// * 2.0 Довольно часто мы будем вешить обработчик события прокрутки 'scroll'
window.addEventListener('scroll', () => {
	const top = document.documentElement.scrollTop;
	// const left = document.documentElement.scrollLeft;
	const thirdSection = document.querySelector('section.third');

	// console.log('top:', top); // 2.1 Изменяемые во время прокрутки значения это разница между самой верхней точкой страницы и верхней точкой вьюпорта, где он находится в данный момент.
	// console.log('left:', left);
	// 2.2 Создадим условие, что цвет рыбного текста поменяется на синий от определённого положения прокрутки (когда он достигнет верхнего края вьюпорта).
	top > 500 ? thirdSection.style.color = 'blue' : thirdSection.style.color = 'black';
})

// * 3.0 Кстати, в отличии от clientTop & clientLeft, на которые мы повлиять не можем, то свойства scrollTop & scrollLeft мы можем изменять, например для прокрутки до определённого места по нажатию кнопки.
const btn = document.querySelector('#btn');

// btn.addEventListener('click', () => document.documentElement.scrollTop = 515);

// * 4.0 Теперь поработаем с внутренним блоком
const block = document.querySelector('.block');
const clientHeight = block.clientHeight;
const clientWidth = block.clientWidth;
// 4.1 Если мы хотим получить ширину и высоту с учётом ширины прокрутки и бордера, то надо указывать свойства offsetHeight & offsetWidth
const offsetHeight = block.offsetHeight;
const offsetWidth = block.offsetWidth;
// 4.2 Но в этом блоке весь контент не влазит в размеры блока, образуя внутренние полосы прокрутки и чтобы получить полные ширину и высоту контента нужно искать по scrollHeight & scrollWidth. И, кстати, эти величины не учитывают сами полосы прокрутки.
const scrollHeight = block.scrollHeight;
const scrollWidth = block.scrollWidth;

/* console.log('clientHeight', clientHeight);
console.log('clientWidth', clientWidth);
console.log('offsetHeight', offsetHeight);
console.log('offsetWidth', offsetWidth);
console.log('scrollHeight', scrollHeight);
console.log('scrollWidth', scrollWidth);
 */
// * 5.0 Создадим функционал, чтобы по клику на кнопку окошко растягивалось на всю ширину и высоту контента.
// 5.1 Но т.к. свойства scrollHeight & scrollWidth не учитывают ширину и высоту скроллбаров и бордера, то нам нужно внести корректировки, чтобы они действительно пропали
// * 6.0 поработаем со свойствами scrollTop & scrollLeft
// 6.1 Мы также можем их переопределять, например сделаем, чтобы по клику на кнопку контент внутри блока смещался на 10px вниз и вправо
btn.addEventListener('click', () => {
	// block.style.height = `${block.scrollHeight + 17 + 2}px`;
	// block.style.width = `${block.scrollWidth + 17 + 2}px`;

	// block.scrollTop += 10;
	// block.scrollLeft += 10;
	// ? 6.2 Однако для упрощения этого функционала у нас уже есть специальный метод "scrollBy", где первым параметром будет кол-во пикселей по горизонтали, а вторым по вертикали.
	// block.scrollBy(5, 10);
	// ? 6.3 Ещё у нас есть метод "scrollTo", который реализует лишь один переход.
	// block.scrollTo(175, 150);
	// ? 6.4.0 В JS есть метод, который показывает координаты элемента относительно страницы — "getBoundingClientRect()" [см. соответствующий скриншот]
	// ? 6.4.1 "x" & "y" координаты указывают на самую верхнюю левую точку блока относительно самой левой верхней точки страницы
	// 6.4.2 Чтобы не писать каждый раз такой длинный метод, запишем его в переменную
	const elemRect = block.getBoundingClientRect();

	console.log(elemRect.top);
	console.log(elemRect.left);
})

// ? В JavaScript все координаты рассчитываются от левой верхней точки экрана, либо блока или от верхней и левой стороны. Когда мы выше прокручивали скролл на какое-то кол-во пикселей, то его координаты брались от левого верхнего угла этого блока, но когда мы скроллили страницу, то координаты брались от левого верхнего угла самой страницы.


/* ||---------------------------------------------->> 
* Links:
* [][Визуальное представление свойств HTML элемента] https://codepen.io/quper24/pen/mZzMoO
* [][Window.innerWidth] https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
* [][scrollIntoView] https://developer.mozilla.org/ru/docs/Web/API/Element/scrollIntoView
*/ 