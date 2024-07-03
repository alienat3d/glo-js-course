'use strict';

const airplane = document.querySelector('.airplane');
const skyDiver = document.querySelector('.sky-diver');

let count = 0;
let active = false;
let idInterval;

/* const flyAnimate = () => {
	count++;
	skyDiver.style.transform = `translate(${count}px, ${count}px)`;
	airplane.style.transform = `translateX(${count * 3}px`;
	if (count < 725) setTimeout(flyAnimate, 10);
} 

flyAnimate();	
*/
// Реализуем теперь ту же функцию через setInterval
/* const flyAnimate = () => {
	count++;
	console.log(count);
	if (count < 725) {
		skyDiver.style.transform = `translate(${count}px, ${count}px)`;
		airplane.style.transform = `translateX(${count * 3}px`;
	} else {
		clearInterval(idInterval);
	}
}

idInterval = setInterval(flyAnimate, 10); */

// * == requestAnimationFrame() ==

// ? Но вообще-то анимация это не та сфера, где стоит использовать setTimeout() и setInterval(), разве что для самых простых анимаций. Но для полноценных анимаций внутри объекта window есть отдельный метод "requestAnimationFrame()".
// ? Почему так? Дело в принципе работы setInterval(), по сути анимация получается довольно дёрганной, т.к. мы имеем дело с перемещением картинки из точку в точку, просто очень часто, а также такой подход оказывает довольно сильную нагрузку на процессор устройства.

// Перепишем нашу анимацию, используя более подходящий requestAnimationFrame()
// Теперь в idInterval мы запишем идентификатор метода requestAnimationFrame. Вызывать его будем внутри функции flyAnimate() и в него мы передадим анимирующую функцию.
const flyAnimate = () => {
	count++;
	idInterval = requestAnimationFrame(flyAnimate);
	if (count < 725) {
		skyDiver.style.transform = `translate(${count}px, ${count}px)`;
		airplane.style.transform = `translateX(${count * 3}px`;
	} else {
		// А вместо clearInterval используем cancelRequestAnimationFrame
		cancelAnimationFrame(idInterval);
	}
}

document.addEventListener('click', () => {
	if (active) {
		cancelAnimationFrame(idInterval);
		active = false;
	} else {
		idInterval = requestAnimationFrame(flyAnimate);
		active = true;
	}
})
