'use strict';

// * === Операторы Rest и Spread === * \\

// * == Оператор Rest (остаточные параметры) == * \\

// 1.17.0 Как мы уже видели из прошлых уроков и из практики, что вызывая какую-либо функцию и передавая в неё аргументы — функция примет лишь столько аргументов, сколько у неё есть параметров (перечисленно в "()" после имени функции), а все остальные аргументы будут проигнорированы.
// ? 1.17.1 Но что, если нужен функционал, который примет все оставшиеся аргументы, чтобы потом их как-то использовать в коде? Для этого в JS есть специальный Rest-оператор и нотация у него такая: "...имя_параметра", по этому имени мы потом можем обращаться к остаточным параметрам (в примере "...args").
// todo Должен обязательно быть последним параметром функции.

const sum = (a, b, c, ...args) => {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(args); // массив из всех оставшихся аргументов, которым не нашлось места в параметрах функции до rest-оператора (их может быть сколь угодно много)
}

sum(1, 2, 3, 4, 5, 'apple', true, '12', 86400000, 'milliseconds');

// * 1.17.2 Т.о. мы можем написать функцию, которая будет принимать все аргументы в параметр rest-оператором и потом например их все сложит
const sum2 = (...args) => {
	const sum = args.reduce((sum, num) => sum + num);
	const result = (sum / 60).toFixed(2);
	return result;
}

console.log(sum2(25, 59, 57, 23, 29, 23, 11, 45));

// * == Оператор Spread (оператор расширения) == * \\

// * 1.18.0 Этот оператор позволяет быстро и легко соединять разные массивы.

// ? 1.18.1 Чтобы собрать из них новый массив мы могли бы создать новый массив и, перебрав каждый из двух массивов, запушить элементы каждого массива в новый массив, либо перебрать один из двух массивов и запушить во второй все элементы первого.

const firstArr = [1, 2, 3, 4, 5];
const secondArr = ['apples', 'peaches', 'pineapples', 'oranges'];

// ? 1.18.2 Но есть вариант проще, используя spread-оператор добавить сперва все элементы первого массива, а потом объединить со вторым, заключив их в [].
// ? 1.18.3 Причём мы также можем добавить дополнительные элементы в любое место этого массива.
console.log(['pigeon', ...firstArr, ...secondArr, 33]);

/* ||---------------------------------------------->> 
* Links:
* [][https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty] Object.defineProperty()
* [][http://jsraccoon.ru/es6-classes] ES6 классы
* [][https://learn.javascript.ru/private-protected-properties-methods#privatnoe-svoystvo-waterlimit] Приватные и защищённые методы и свойства
* [][https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Public_class_fields] Поля классов ES6
*/ 