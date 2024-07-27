'use strict';

const ball = document.getElementById('ball');

function animate(options) {

  const start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    const timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    const progress = options.timing(timeFraction)
    
    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

function makeEaseOut(timing) {
	return function(timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}

function bounce(timeFraction) {
	for (let a = 0, b = 1; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
		}
	}
}

function quad(timeFraction) {
  return Math.pow(timeFraction, 2)
}

let bounceEaseOut = makeEaseOut(bounce);
let quadEaseOut = makeEaseOut(quad);

// Нижняя координата поля – field.clientHeight. CSS-свойство top относится к верхней границе мяча, которая должна идти от 0 до field.clientHeight - ball.clientHeight.
const to = field.clientHeight - ball.clientHeight;
const width = 100;

ball.addEventListener('click', () => {
	animate({
		duration: 2000,
		timing: bounceEaseOut,
		draw: function(progress) {
			ball.style.top = to * progress + 'px';
		}
	});
	animate({
		duration: 2000,
		timing: quadEaseOut,
		draw: function(progress) {
			ball.style.left = width * progress + 'px';
		}
	});
})

/* ||---------------------------------------------->> 
* Links:
* [✓][https://learn.javascript.ru/js-animation] JavaScript-анимации
*/