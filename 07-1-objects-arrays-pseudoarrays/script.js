'use strict';

// * === Объекты, массивы, псевдомассивы === * \\

// * == Объекты == * \\

// ? 1.0 В простых ("примитивных") типах данных мы можем хранить только 1 тип данных, либо строку, либо число, либо что-то ещё. Объекты это 8-ой тип данных, созданный для того, чтобы хранить в себе коллекции разных типов данных: и строки, и числа, и даже другие объекты или массивы.

// ? 1.1 Есть несколько способов создать объект
// ? 1.2.0 Данные внутри объекта содержатся в виде пары «ключ: значение». В отличии от присваивания значения переменной через «=» в объекте присваивание идёт через «:». Также, вместо значения может быть и переменная.

// 1.2.1 Пару ключ-значение также можно собрать и из переменных, таким образом вставляя в объект ключи динамически из значений переменных.
const developerName = 'Al';
const key = 'city';
const city = 'Moscow';

const person = {
	name: developerName,
	'eyes-color': 'brown', // названия свойств можно также задавать в кавычках, это удобно, когда, они состоят из нескольких слов и соединяются при помощи kebab-case
	// Также мы могли бы указать метод сразу в объекте
	/* 	sayFunc = function(string) {
		console.log(string);
	} */
	[key]: city // 1.2.2 так 
};

// 1.2.3 Или так
// person[key] = city;

// ? 1.3 Помимо указания свойства в объекте при его описании есть и другие способы создать его внутри объекта. Например «точечная нотация»:
person.age = 37;

// ? 1.4 Создавать мы можем также через [], во некоторых случаях это даже предпочтительней
person['isMarried'] = true;

const job = new Object(); // данный способ используется крайне редко и чаще всего используется предыдущий вариант

job.position = 'developer';
// todo /!\ Важный момент — Если, в какой-то момент времени значение свойства второго объекта job поменяется, то оно также поменяется и в объекте person. Это произошло потому, что в JS объекты так просто не копируются, а копируется только ссылка на другой объект.

job.position = 'middle developer';

// Это действительно не только для изменения свойств, но и для добавления новых. Добавим ещё например свойство со значением зарплаты. Мы также увидим эту зарплату и в объекте person.

job.salary = 333000;

// Мы также можем добавить новый объект в переменной job в наш объект person
person.job = job;

// Если мы захотим изменить свойство дочернего объекта, то оно поменяется также и в родительском объекте.

person.job.position = 'senior developer';

console.log(person);
console.log(person.age);
console.log(person['age']); // также мы можем обратиться к свойству с помощью нотации [], но при этом названия ключа должно быть в ''

// * 1.5.0 Также мы можем помещать в объект и функции, которые будут называться методами объекта. Например добавим в наш объект person ещё и функцию, которая выводит строку в консоль по её вызову.

const sayFunc = function(string) {
	console.log(string);
}

// 1.5.1 Далее мы создадим в объекте свойство "say" и передадим туда нашу новую функцию sayFun.
person.say = sayFunc;

person.say('Hello! My name is ' + person.name + ', I’m ' + person.age + ' years old and working as a ' + person.job.position + '.');

// * == Массивы == * \\

// ? Когда нам нужен структурированный объект, то нам больше подойдёт специальный вид объектов — массив.
// ? В отличии от обычных объектов массив использует не названия ключей, а порядковый индекс. Также у него свои методы взаимодействия с ним.

const array = [1, null, '3', 4, true, [], { userName: 'admin' }];

// Записывать что-то в массив можно через нотацию квадратных скобок, при этом предыдущее значение на этом индексе будет затёрто.
array[0] = 33;

// Но если мы попытаемся записать что-то на индекс 10 например, то обнаружим, что между 10 и 6 индексами у нас появились ещё 3 пустых ячейки с "undefined", они как бы зарезервированы.
array[10] = 'something';

// Обращаемся к элементам массива по его индексу (начиная с 0) в «[]».
console.log(array);

// Узнать «длину», т.е. кол-во элементов массива можно с помощью свойства «length»
console.log(array.length);

// Как и обычный объект, массив можно создавать при помощи конструктора. Но такой способ также, как и с объектом можно встретить крайне редко.
const arr = new Array(1, 'test', [1, 2], {a: 'Jack'}, null);

console.log(arr);

// Кстати, если бы передали в конструктор массива одно число, то оно бы стало длиной массива.
// const arr2 = new Array(10);
// console.log(arr2);

// Кстати, мы также могли бы указать и пустые элементы, но сложно сказать где на практике это могло бы пригодится.
const array2 = [1, , , , null, '3', 4, true, [], { userName: 'admin' }];

console.log(array2);

// * Мы также можем вручную указать длину массива. И это уже на практике довольно часто встречается. Например для очистки массива присвоив его длине 0.
// array2.length = 100;
array2.length = 0;

console.log(array2);

// * == Методы для работы с массивами == * \\

// ? Рассмотрим несколько наиболее встречающихся.

// ? Метод «push» - добавит ещё один элемент в конец массива.
// ? Метод «unshift» - добавит ещё один элемент в начало массива (пересматриваются индексы).
// ? Оба метода могут добавлять сразу несколько элементов.

const fruits = ['apple', 'orange', 'pineapple', 'banana'];

fruits.push('kiwi');
fruits.unshift('papaya', 'mango');

console.log(fruits); // ['papaya', 'mango', 'apple', 'orange', 'pineapple', 'banana', 'kiwi']

// ? Есть и противоположные методам «push» & «unshift»: «pop» & «shift», соответственно удаляющие элементы из массива.
// ? Особенностью является, что они возвращают значения элементов, которые удалили. (Как бы вырезают их в буфер обмена.)

// ? Мы можем использовать эту особенность и сохранить удалённый элемент в переменную.

const lastElem = fruits.pop(); // удалит самый последний элемент в массиве — 'kiwi'
const firstElem = fruits.shift(); // удалит самый первый элемент в массиве — 'papaya'

console.log(fruits); // ['mango', 'apple', 'orange', 'pineapple', 'banana']
console.log(lastElem);
console.log(firstElem);

// ? Метод «sort» — сортирует элементы в массиве по алфавиту и в возрастающем порядке (если числа).
// ? Метод «reverse» — сортирует элементы в массиве наоборот в убывающем порядке алфавита или чисел.

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

// ? Все выше перечисленные методы на самом деле меняют массив, но не все методы массивов это делают.

// ? Метод «join» — возвращает массив в виде строки и параметром мы можем указать разделитель между элементами этой строки.
// Этот метод не изменяет массив, а лишь возвращает его видоизменённым для дальнейшего использования.

console.log(fruits.join('...'));


// * == Перебор объектов и массивов == * \\

// ? Часто бывает, что для выполнения задачи нам требуется перебрать все свойства и методы объекта. Для этого есть специальный цикл «for in».

const object = {
	name: 'Alex',
	age: 37,
	isStudent: false
}

// ? «key» - произвольное название переменной, но именно его чаще всего принято указывать в этом цикле.
// Если прочесть условие цикла буквально, то мы хотим перебрать каждый ключ (key) в объекте object.
// Он пройдётся по всем ключам объекта и каждый из них попадёт в переменную key, а его значение в object[key].

for (const key in object) {
	console.log('Ключ: ' + key + ', ' + 'Значение: ' + object[key] + ';');
}

// ? Также, у нас есть возможность собрать все ключи в массив, чтобы как-то ими оперировать при помощи глобальному объекту Object и его методу «keys».

console.log(Object.keys(object));

// ? Похожий метод, но для значений также есть, это — «values».

console.log(Object.values(object));

// ? Цикл «for of» очень похож по синтаксису на «for in», но он работает с массивами. Вернёт нам значения всех элементов массива начиная с 0.

const someArray = [1, true, 'cat', 'dog', 'apple', 99];

for (const value of someArray) {
	console.log(value);
}

// ? А если мы применим к массиву «for in», то получим индексы каждого элемента массива. Но здесь, всё же, если мы вместо key напишем someArray[key], то получим значения элементов массива. Но всё же для массивов «for of» считается более предпочтительным.

for (const key in someArray) {
	// console.log(key);
	console.log(someArray[key]);
}

// * == Оператор delete == * \\

// ? delete нужен для того, чтобы удалять элементы из массивов и объектов. Но на каждую из этих сущностей он работает немного по своему.

const someArray2 = [1, false, 'cat', 'dog', 'apple', 'bird'];

delete someArray2[1];

console.log(someArray2); // теперь элемент с индексом 1 пропал, к тому же индексы не были пересмотрены

// todo Т.к. индексы в массивах после удаления с delete не пересматриваются, то с этим могут быть проблемы, поэтому лучше для этого использовать другие методы

// * С объектом это работает чуть иначе

const object2 = {
	name: 'Jane',
	age: 30,
	position: 'waitress'
}

delete object2.age;

console.log(object2); // здесь свойства удаляются прекрасно

// * == Псевдомассивы == * \\

// ? Псевдомассивы — это очень похожие по своей структуре на массивы сущности, у них также есть длина и индексы элементов, но у них нет методов для работы с массивами.
// Один из таких псевдомассивов это arguments функции, либо «живые коллекции» элементов вёрстки, которые мы ещё подробно рассмотрим в след. уроках.
const func = function (a, b, c) {
	console.log(arguments); 
	console.log(a + b + c);
}

func(3, 6, 9);


/* ||---------------------------------------------->> 
* Links:
* [][https://habr.com/ru/post/48542/] Работа с объектами
* [][https://www.8host.com/blog/metody-obektov-v-javascript/] Методы для работы с объектами
* [][https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array] Методы и свойства массивов
*/ 