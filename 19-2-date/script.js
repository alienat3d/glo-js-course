'use strict';

// * === Объект Date === * \\

// ? В виде строки мы можем аргументом передать нужную дату

// const date = new Date('07 august 2024');

// * Причём мы можем указывать также год первым
// const date = new Date('2024 07 august');

// * Или даже указать время
// const date = new Date('2024 07 august 14:15:00');

// * Или отдельными аргументами в числовых значениях: год, индекс месяца от 0, дата, часы, минуты, секунды, миллисекунды
const date = new Date(2024, 7, 7, 14, 15, 0, 500);

// Мы также можем передать пустую строку там, где значение передавать не нужно
// const date = new Date(2024, 7, 7, '', 15, 0, 500);

// console.dir(date);

// А теперь получим из этого объекта год:
console.log(date.getFullYear());

// Получим месяц (чтобы получить правильное значение, прибавим 1):
console.log(date.getMonth() + 1);

// Получим дату:
console.log(date.getDate());

// Получим число порядковый номер дня недели (начиная с воскресенья 0 и заканчивая субботой 6):
console.log(date.getDay());

// Получим часы:
console.log(date.getHours());
// Получим минуты:
console.log(date.getMinutes());
// Получим секунды:
console.log(date.getSeconds());
// Получим миллисекунды:
console.log(date.getMilliseconds());

// * Мы также можем изменять каждое из перечисленных выше свойств объекта Date, кроме дня недели

// Изменим год методом "setFullYear()"
date.setFullYear(2021);
// Туда же можно передать индекс месяца и число
date.setFullYear(2021, 1, 2);

// "setMonth" может менять индекс месяца и число
date.setMonth(5, 25);

// "setDate" может менять только число
date.setDate(4);

// * Также мы можем задавать произвольное время

// "setHours" поменяет часы, минуты, секунды и миллисекунды
date.setHours(10, 30, 11, 222)

// "setMinutes" поменяет минуты, секунды и миллисекунды
date.setMinutes(50, 33, 262)

// "setSeconds" поменяет секунды и миллисекунды
date.setSeconds(21, 404)

// "setMilliseconds" поменяет миллисекунды
date.setMilliseconds(504);

console.log(date);

// ? Кстати, мы можем указывать большее значение, чем кол-во дней в одном месяце, тогда этот метод пересчитает. Это даёт нам возможность в этот параметр передать, например сегодняшнее число и плюс, например, 100 дней. 
date.setDate(date.getDate() + 100);
// То же касается и setFullYear() & setMonth().
date.setFullYear(1987, 17, 175);
console.log(date);
date.setMonth(17, 175);
console.log(date);

// ? Объект Date хранит время, которым мы оперируем, в себе в виде значения миллисекунд, прошедшее от 00:00 1 января 1970 года до текущего момента. Эту дату можно увидеть, если передать в объект Date 0
const date2 = new Date(0);
console.log(date2);
// ? Мы можем увидеть это значение, вызвав метод getTime(). Ещё его называют «timestamp».
// ? По сути все предыдущие методы объекта Date высчитываются из значения timestamp.
console.log(date.getTime());

// Что же будет, если указать дату раньше 1.1.1970?
date.setFullYear(1969);

console.log(date.getTime()); // получим отрицательное значение, значит можно найти дату и до 1.1.1970

// * Ещё в объекте Date есть два метода toTimeString() & toDateString(), они выводят время и дату в виде строки, но уже по отдельности.
console.log(date.toTimeString()); // выводит только время в виде строки
console.log(date.toDateString()); // выводит только дату в виде строки

// * Ещё есть их аналоги, которые выводят время с учётом местной разницы от GMT
console.log(date.toLocaleTimeString('us'));
console.log(date.toLocaleDateString('us'));
console.log(date.toLocaleTimeString('ru'));
console.log(date.toLocaleDateString('ru'));

// * Есть ещё один метод, который выводит дату в формате ISO. С таким форматом часто работает ЯП PHP и его фреймворки
console.log(date.toISOString()); // выведет в консоль: 1969-11-22T07:50:21.504Z

// Чтобы получить из такого формата только дату нам поможет метод строк "substr"
console.log(date.toISOString().substring(0, 10));

// * Date.now() — покажет нам кол-во миллисекунд, которое прошло с 1.1.1970 00:00 до момент вызова этого метода
console.log(Date.now());

// * Date.parse() — в него мы можем передавать дату в виде строки и он также, как и Date.now() покажет нам кол-во миллисекунд, которое прошло с 1.1.1970 00:00 до момент вызова этого метода
console.log(Date.parse('4 july 2024'));

/* ||---------------------------------------------->> 
* Links:
* [][https://html5.by/blog/what-is-requestanimationframe/] Что такое requestAnimationFrame?
* [][https://learn.javascript.ru/js-animation] JavaScript-анимации
* [][https://learn.javascript.ru/datetime] Дата и Время
* [][https://habr.com/ru/post/60957/] Микропаттерны оптимизации в Javascript
* [][https://medium.com/nuances-of-programming/%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-throttling-%D0%B8-debouncing-4f0a839769ef] Что такое Throttling и Debouncing?
*/