'use strict';

// * === Стиль кода === * \\

// ? Написанный код должен всегда соответствовать трём требованиям: 1) должен правильно работать, 2) быть читаемым и 3) его должны понимать другие разработчики.
// Придерживаясь этих правил, мы делаем код легко поддерживаемым, что даст возможность его изменения без нанесения вреда функциональной части.

// * Структуру кода внутри функции или т.н. «области видимости» можно разделить на 4 условных блока: 1) блок объявления переменных, 2) блок описания функций, 3) блок функционала, 4) блок вывода в консоль (мусорный\технический блок).
// ? Логические блоки отделяем между собой пустой строкой.
// ? Также пустой строкой отделяются определённые логические части внутри каждого блока.

// ? [1] блок объявления переменных:
// - Первыми идут элементы, получаемые со страницы и помещаются в переменные с ключевым словом const.
// - Далее идут переменные со значениями, заданными хардкодом, т.е. вручную.
// ? По названия переменных мы должны сразу понимать, что в ней хранится («a» & «b» неправильно, такие названия можно давать лишь внутри функций, где и так всё очевидно для каких вычислений они используются)
const button = document.querySelector('#btn')
// * [empty line] * //
const a = 1
const b = 'second'
// * [empty line] * //
let count = 0
let array = []
// * [empty line] * //
// когда мы объявляем сразу множество пустых переменных, то лучше читается, когда они все с одним "let" и написаны в строку
let g, h, j
// * [empty line] * //
// ? [2] блок описания функций
// Именно описание функций, а не их выполнение
// Также и внутри функции должен соблюдаться code-style, как и в остальном коде
// ? Названия функций должны соответствовать действию её функционала. («foo» & «boo» — неправильно)
function foo() {
	const c = 'c'
}
// * [empty line] * //
function boo() {
	const d = 'd'
}
// * [empty line] * //
// ? [3] блок функционала
// Здесь навешиваются обработчики событий, проверяются условия, выполняем циклы, методы, запускаем функции, присваиваем значение переменным, которые ранее были пустыми или меняем значение тем, которые были уже ранее указаны и т.д.
button.addEventListener('click', function () {
	console.log('clicked');
})
// * [empty line] * //
g = 500;
// * [empty line] * //
if (a === 1) console.log(a)
// * [empty line] * //
foo()
boo()
// * [empty line] * //
// ? [4] мусорный блок (технический блок)
// Здесь выводим логи в консоль или алерты. Удобно его всегда иметь в конце кода, чтобы перед выкатом в продакшн можно было быстро его удалить. Очень плохо, когда приходится логи искать по всему коду и очищать один за другим — это потеря времени.
console.log(b)
console.log(array)
// * [empty line] * //
alert(count)