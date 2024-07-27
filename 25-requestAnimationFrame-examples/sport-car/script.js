'use strict';

const car = document.querySelector('.car');

function animate(options) {

	const start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction от 0 до 1
		let timeFraction = (time - start) / options.duration;
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

function quad(timeFraction) {
  return Math.pow(timeFraction, 2)
}

const quadEaseOut = makeEaseOut(quad);

// 1.1 Чтобы дать сперва странице загрузиться поставим небольшой таймаут.
car.addEventListener('click', () => {
	car.style.transform = 'scale(1, 1)';
	/* animate({
		duration: 2000,
		timing: bounceEaseOut,
		draw: function (progress) {
			ball.style.top = to * progress + 'px';
		}
	}); */
	animate({
		duration: 2000,
		timing: quad,
		draw(progress) {
			// коллбэк draw() на этом примере возвращает нам определённый отрезок от 0 до 1, и отрезков будет тем больше, чем выше значение duration.
			// console.log('progress', progress)
			// * 1.0 Сделаем так, чтобы машинка уехала за пределы экрана
			car.style.left = (100 * progress) + '%';
			console.log(car.style.left);
			// * 2.0 А теперь поиграемся со свойством opacity. Здесь нам вообще достаточно будет только указать progress, т.к. opacity: 1, означает, что элемент полностью виден, а opacity: 0, что он полностью прозрачен.
			// car.style.opacity = progress;
		}
	})
	setTimeout(() => {
		car.style.transform = 'scale(-1, 1)';
		animate({
			duration: 1000,
			timing: quadEaseOut,
			draw(progress) {
				car.style.left = 100 - (100 * progress) + '%';
				console.log(car.style.left);
			}
		})
	}, 3500);
});


// ? Таким образом можно реализовывать практически любые анимации, хоть появление модального окна, хоть счёт\перебор цифр в калькуляторе.