'use strict';

// * === Деструктуризация объектов и массивов === * \\

// ? 1.14.0 Этот инструмент позволит сократить код, сделать его более читабельным и не создавать лишних переменных.

// * == Деструктуризация объектов == * \\

// 1.14.1 Для примера представим, что у нас есть некий объект "user" со свойствами имени, возраста и флажком авторизации
// * 1.14.5 Но что, если у нас свойством лежит объект внутри объекта?
const user = {
	name: 'Al',
	age: 37,
	isAuth: false,
	projects: {
		firstProject: 'firstProject',
		secondProject: 'secondProject',
	}
}
// ? 1.14.2 Ранее для работы со значениями свойств объекта нам приходилось либо складировать значение в какую-то переменную, либо, непосредственно обращаясь к самому объекту, доставать это значение через него.

// const name = user.name;

// console.log(name);
// console.log(user.name);

// * 1.14.3 Благодаря деструктуризации мы можем упростить данный механизм получения значения свойств переменных.
// ? 1.14.4 Также мы можем заменить название свойства на произвольное, например 'name' на 'userName'
// 1.14.6 Попробуем деструктурировать также этот объект "projects".
// 1.14.7 А если нам нужны свойства внутри этого внутреннего объекта, то их мы также можем деструктурировать через {}

const {name: userName, age, isAuth, projects, projects: {firstProject, secondProject}} = user;

console.log(userName);
console.log(age);
console.log(isAuth);
console.log(projects);
console.log(firstProject);
console.log(secondProject);

// * == Деструктуризация массивов == * \\

// * 1.15.0 Рассмотрим теперь как нам деструктурировать массив

// * 1.15.3 По аналогии с объектами мы можем деструктурировать вложенные в массив массивы.

const names = ['Артём', 'Максим', 'Василий', ['Пётр', 'Александр']];

// 1.15.1 Прежде мы обращались к каждому элементу массива по его индексу.
/* const artem = names[0];
const max = names[1];
const vasya = names[2]; */

// ? 1.15.2 Но деструктуризация более удобный способ:
const [artem, max, vasya, [pyotr, alex]] = names;

console.log(artem);
console.log(max);
console.log(vasya);
console.log(pyotr);
console.log(alex);


// * == Примеры применения деструктуризации == * \\

// * 1.16.0 Во-первых такой подход удобен своей лаконичностью, а во-вторых теперь нам не важен порядок написания аргументов в функции.
// ? 1.16.1 Такой подход очень распространён во фреймворках JS, поэтому его стоит понять и запомнить.

const logger = ({first, second, third, fourth}) => {
	console.log(third + ' at ' + second);
}

logger({fourth: 'repeat', first: 'eat', third: 'code', second: 'sleep'});

/* ||---------------------------------------------->> 
* Links:
* [][https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty] Object.defineProperty()
* [][http://jsraccoon.ru/es6-classes] ES6 классы
* [][https://learn.javascript.ru/private-protected-properties-methods#privatnoe-svoystvo-waterlimit] Приватные и защищённые методы и свойства
* [][https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Public_class_fields] Поля классов ES6
*/ 