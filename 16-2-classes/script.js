'use strict';

// * == Классы == * \\

// ? 1.6.0 В уроке про функции-конструкторы мы уже столкнулись, что их часто именуют "Классы". Вспомним, что функция-конструктор это некая абстракция \ функция-шаблон, которая описывает будущий объект. Можно также вспомнить про наследование и как это могло сбить с толку. Когда одна абстракция наследует свойства и методы другой абстракции и когда мы выстраивали цепочку наследований — нам приходилось переопределять функции-конструкторы и прототипы. Но с выходом ES6 эта процедура была упрощена — было добавлено новое ключевое слово "class".

const Person1 = function (name, age) {
	this.name = name;
	this.age = age;
// Если бы мы указывали метод внутри функции-конструкторе, то метод бы принадлежал самому объекту, что плохо сказывается на производительности.
/* 	this.sayHello = function () {
			console.log(`Привет! Меня зовут ${this.name}.`);
		} */
}

const person1 = new Person1('John', 55);

console.log(person1); // в прототипе конструктором является функция-конструктор

// 1.6.1 Теперь перепишем функцию-конструктор с новым синтаксисом классов:
// ? 1.6.2 У классов есть такой такой же constructor, как и у самой функции-конструктора, но используется для этого уже специальный метод "constructor". Этот метод и принимает наши аргументы и внутри его {} определяются все свойства наших будущих объектов.


class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const person = new Person('Jack', 65);

console.log(person); // в прототипе конструктором является класс Person

// ? 1.6.3 На самом деле классы работают также, как и функции-конструкторы. Разработчики, работающие над улучшением языка JS взяли более сложные функции-конструкторы, обернули в более лаконичные классы и дали нам в работу.

// * == * == * \\

// ? 1.7.0 Теперь поговорим о том, что с помощью классов реализуются в разы проще. Вспомним, как на уроке про функции-конструкторы мы к ним привязывали методы. У нас есть два метода привязки метода к конструктору: 1) указать его внутри функции-конструкторе (что не очень-то оптимизировано) и 2) указать снаружи, привязав к прототипу.
// 1.7.1 Итак, мы выберем второй вариант и к Person1 привяжем метод.

Person1.prototype.sayHello = function () {
	console.log(`Привет! Меня зовут ${this.name}.`);
}

person1.sayHello();

console.log(person1); // в прототипе мы увидим метод "sayHello()"

// 1.7.2 А теперь напишем такой же метод, но уже для класса Person2.
// 1.7.3 Под методом "constructor()" мы можем указать методы, которые будут принадлежать данному классу.
class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		console.log(`Привет! Меня зовут ${this.name}.`);
	}
}

const personFemale = new Person2('Jenna', 45);

// 1.7.4 Мы также вызовем этот метод
personFemale.sayHello();

console.log(personFemale); // В свойствах метода sayHello() нет, но он есть в прототипе.

// ? 1.7.5 Итак, разработчики, работающие над редакцией стандарта языка ES6 по сути объединили достоинства обоих методов привязки метода к функции-конструктору. Теперь мы указываем методы внутри класса, мы получаем доступ к использованию скрытых переменных и этот же метод привязывается сразу к прототипу.

// * == Скрытые переменные (static variables & methods) == * \\

// ? 1.8.0 Как таковых скрытых переменных, которые могут принадлежать классу или функции-конструктору в JS нет, т.к. отсутствует ключевое слово "private", которое есть во многих настоящих ООП-языках. Тем не менее в JS есть нечто схожее на подобный функционал. Итак, мы добавим статическую переменную "count".
// ? 1.8.1 Итак слово "static" создаст статическую переменную, что означает, что она доступна общему классу, но недоступна экземплярам класса.

// ? 1.9.0 Помимо статических переменных мы можем создавать и статические методы. Создадим такой метод, который будет возвращать значение count класса Person3.
// 1.9.1 Но можно также создать метод "incrementCount()", который будет при каждой инициализации нового объекта на основании прототипа класса будет увеличивать значение count на 1. И вызывать мы его будем при каждой инициализации constructor().
// ? 1.9.2 Сами статические переменные и методы не принадлежат создаваемым на основе данного класса объектам, а потому и не увеличивают вес новых объектов.

class Person3 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		Person3.incrementCount();
	}

	static count = 0; // сюда мы будем записывать количество созданных на основе класса Person3 объектов

	static getCount() {
		return Person3.count;
	}

	static incrementCount() {
		Person3.count++;
	}

	sayHello() {
		console.log(`Привет! Меня зовут ${this.name}.`);
	}
}

const personFemale2 = new Person3('Jessica', 31);
const personFemale3 = new Person3('Julia', 39);
const personMale1 = new Person3('Justin', 22);
const personMale2 = new Person3('Mike', 36);

console.log(personFemale2);

// 1.8.2 Если мы попытаемся к ней обратиться через новый объект, то получим "undefined", т.е. для экземпляра объекта personFemale2 данная переменная "count" недоступна.
// console.log(personFemale2.count);

// 1.8.3 Однако, если обратиться к ней через класс, то она вполне себе доступна.
console.log(Person3.getCount());

// ? 1.9.2 Мы можем проверить вес каждого из создаваемых объектов:
// ? 1.9.3 И если мы закомментируем статические методы и переменные, то вес объекта (количество символов после перевода в строку) не изменится.
console.log(JSON.stringify(personFemale2).length);

// ? 1.9.4 На самом деле в работе такой функционал требуется не слишком часто и всё же знать его надо.

// * == Наследование классов == * \\

// * 1.10.0 Рассмотрим два класса, где класс "frontendDev" будет наследоваться от класса "employee":
class Employee {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		console.log(`Привет! Меня зовут ${this.name}.`);
	}
}

// 1.10.1 Создаём второй класс, который должен унаследовать свойства первого "Employee" для этого после названия класса пишем слово extends и название того класса, от которого будем наследовать свойства и методы.

// * 1.11.0 Но что, если нам нужно расширить класс "frontendDev"? Т.е. создать ему собственный конструктор? В него мы зададим один параметр "skills" и зададим по умолчанию ему пустой массив.
// ? 1.11.1 Но просто так мы этого сделать не можем, мы получим ошибку, где сказано, что требуется связать два конструктора методом super(). В него нам необходимо передать первые два аргумента: name & age.
// ? 1.11.2 Метод "super()" — это связывающее звено между классом наследником (frontendDev) и классом прототипом (Employee). Он передаёт из "Employee" в "FrontendDev" необходимые параметры "name" & "age".
// ? 1.11.3 Кстати, через метод "super()" мы можем обращаться к методам родительского класса. Для примера создадим метод класса "FrontendDev" "test()", который при вызове запустит метод своего родителя "sayHello()" через "super".
class FrontendDev extends Employee {
	constructor(name, age, skills = []) {
		super(name, age);
		this.skills = skills;
	}

/* 	test() {
		super.sayHello();
	} */
}

const developer = new FrontendDev('Alex', 34);

// 1.10.2 Итак, мы получили новый объект, который был получен из класса "frontendDev" и унаследовал все свойства и методы класса "Employee".
console.log(developer);

// 1.10.3 Конечно же и метод из "Employee" также уже доступен для использования новым объектом.
// ? Вот так вот просто это делается с классами: никакого Object.create() и никаких перепривязок прототипов и конструкторов. Всё гораздо проще и понятнее, хотя работает также, как и раньше с функциями-конструкторами.
developer.sayHello();

// developer.test();

// * == getters & setters == * \\

// ? 1.12.0 Данные инструменты являются базовыми инструмента, например, фреймворка «Vue JS». Да и вообще довольно часто используются в ООП.

// ? 1.12.1 "Геттеры" & "сеттеры" это просто методы для работы с объектом. Их задача либо получать информацию из объекта, либо записывать информацию в объект.
// 1.12.2 Для примера создадим геттер для свойства "skills".

class BackendDev extends Employee {
	constructor(name, age, skills = []) {
		super(name, age);
		this._skills = skills;
	}

	// ? 1.12.3 "Геттер" это обычный метод, который по своему названию полностью схож со свойством, с которым он будет работать, а также он объявляется с ключевым словом "get". И он всегда что-то возвращает. Они также работают только со свойствами, где в начале идёт "_", это означает, что такое свойство доступно только для чтения.
	get skills() {
		return this._skills;
	}

	// ? 1.12.5 Опишем также "сеттер", который будет получать аргументом определённую строчку. А затем запушим её в массив skills. Так работает "сеттер" — мы передаём в него данные и сеттер запишет их так, как мы укажем. Мы полностью контролируем процесс записи в свойство.
	set skills(str) {
		this.skills.push(str);
	}
}

const dev = new BackendDev('Roman', 35);

// 1.12.4 Выведем в консоль значение свойства skills, но только используя "геттер"
console.log(dev.skills); // получим пустой массив
console.log(dev._skills); // если обратиться к свойству напрямую — также получим пустой массив

dev.skills = 'Первое свойство';
dev.skills = 'Второе свойство';
dev.skills = 'Третье свойство';

console.log(dev);

// * == Про геттеры и сеттеры во фреймворках == * \\

// ? 1.13 Когда мы работаем в приложении на Vue JS наши данные хранятся в определённом объекте, который мы называем "state". Этот объект хранит все динамические и не только данные. Мы выводим на страницу данные именно из этого объекта. Данные в этом объекте "стейт" иммутабельны (защищены от записи напрямую). И работа с этим "стейтом" вся строится на "геттерах" и "сеттерах", которые мы распишем. Сперва это может показаться неким усложнением, но на самом деле оказывается, что мы переносим огромную часть логики на эти инструменты. А в компонентах используем лишь вызов данного сеттера и данного геттера. Это на самом деле очень сильно упрощает логику самих компонентов.

/* ||---------------------------------------------->> 
* Links:
* [][https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty] Object.defineProperty()
* [][http://jsraccoon.ru/es6-classes] ES6 классы
* [][https://learn.javascript.ru/private-protected-properties-methods#privatnoe-svoystvo-waterlimit] Приватные и защищённые методы и свойства
* [][https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes/Public_class_fields] Поля классов ES6
*/ 