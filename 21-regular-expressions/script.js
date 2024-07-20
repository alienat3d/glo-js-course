'use strict';

// * === Регулярные выражения === * \\

// ? 1.0 Регулярное выражение — это просто шаблон\паттерн для поиска совпадений с ним в строке.

// 1.1 Чаще всего они просто гуглятся, ведь самые распространённые и необходимые уже давно написаны, но всё же мы научимся их понимать.

// ? 1.2 Создаются они двумя способами: 1) использование конструктора, 2) использование литералов.
const regExp1 = new RegExp('привет');
const regExp2 = /привет/;

// 1.3 Получим два одинаковых объекта. (Да, регулярные выражения относятся к объектам)
console.dir('regExp1', regExp1);
console.dir('regExp2', regExp2);

// ? 1.4 Большую часть времени регулярные выражения в JS используют для двух основных задач: валидация полей форм и изменение текстового содержимого сайта (и даже вёрстки).

// * == метод test() ==
// * Проходит по всей строке, которую мы в него передаём в поисках совпадений с шаблоном регулярного выражения. Если находит, то возвращает true, иначе false.
// ? К примеру мы так можем искать в строке ввода типа "email" символ "@", чтобы убедится, что пользователь ввёл корректно e-mail.
const str = 'привет тебе, привет ему и вам привет!';

console.log(regExp1.test(str));

// * == метод exec() ==
// * Также, как и test() проходит по всей строке в поисках совпадения с шаблоном, но в отличии от первого возвращает он целый объект. Где есть, например свойство "input", в котором лежит вся исследуемая строка, а также свойства "0", "1", "2" и т.д., это индексы где будут находится каждые из совпадений
// ? Чаще всего применяется для выборки из текстового содержимого каких-то шаблонных данных, к примеру всех возможных e-mail адресов или всех номеров телефона.
console.log(regExp1.exec(str));
// Мы можем обратиться к индексу конкретного совпадения, как в массиве.
console.log(regExp1.exec(str)[0]);

// Но пока наши методы принимают лишь первое совпадение, а чтобы получить все совпадения в строке, требуется использовать флаги регулярного выражения.

// * == Флаги == * \\

// ? Флаги записываются после регулярного выражения, например:
// * флаг "g" — проводим поиск глобально по всей строке (т.е. ищем все совпадения в этой строке, а не только первое как без этого флага);
// * флаг "i" — игнорирует регистр (большие или маленькие буквы);
// ? Это самые популярные флаги, которые обычно применяют. Есть и другие флаги, но применяются они крайне редко.

const regExp3 = new RegExp('привет', 'gi');
const regExp4 = /привет/gi;

// Рассмотрим как теперь сработает метод exec() с флагом "g"
// Если выведем объект регулярки, то заметим свойство lastIndex — это последний индекс первого совпадения нашего паттерна "привет" — 6
console.log(regExp3.exec(str));
// Теперь уже во второй раз свойство index — 13
console.log(regExp3.exec(str));
console.dir(regExp3);

// ? Дело в том, что объект регулярного выражения запоминает последнее место, где было найдено совпадение методами exec() или test(). Т.ч. вторая работам метода exec() началась с индекса 6, а третья с 13 и т.д.
// Теперь уже в третий раз свойство index — 30, а lastIndex отмечен - 36, т.к. в слове привет 6 букв.
console.log(regExp3.exec(str));
// ? Если мы попробуем снова вызвать exec(), то получим null, т.к. строка закончилась и в следующий раз метод начнёт искать в этой строке снова с 0 индекса.
console.log(regExp3.exec(str));

// ? Резюмируя: метод exec() во время работы, при нахождении совпадения отмечает тот index, где первый символ совпадения, а также последний, откуда он начнёт поиск со следующего вызова этого метода. Т.о. мы можем, например, использовать цикл, чтобы собрать какие-то данные в массив.

// * 2.0 Рассмотрим на практике
// 2.1 Нам понадобится переменная, куда мы будем заносить результат каждого метода exec():
let reg;

// 2.2 Занесём результат собственно метода exec()
reg = regExp3.exec(str);

// 2.3 Теперь используем цикл while и проверим не попалось ли в переменную null и если его нет, то мы будем продолжать переопределять переменную reg. Так мы получим все совпадения с нашим паттерном регулярного выражения. Мы также можем создать пустой массив и пушать до переопределения каждое из совпадений туда.
const array = [];
while (reg) {
	array.push(reg[0]);
	reg = regExp3.exec(str);
}

console.log(array);

// ? 2.4 Конечно, занятный пример, но на практике обычно так не делают, т.к. это довольно запутанно и сложно.

// ? Точно также влияет на объект регулярного выражения и метод test(), помечая последний index совпадения.

// ? 3. И ещё одно, этот эффект с запоминанием индекса работает, когда мы сперва создали объект регулярного выражения, а потом работаем через него, как на примерах выше, но если нашей целью является просто проверка строки на наличие совпадений с регуляркой, то можно записать проще:
const string = 'Всем привет, как ваши дела? Удачного вам дня!'

console.log(/Привет/gi.test(string));

// ? На самом деле метод test() встречается довольно часто, чего не скажешь о методе exec().

// * 4.0 Рассмотрим на примере как чаще всего применяется метод test() на практике
const email = 'zaplin.dev@gmail.com';

// 4.1 Теперь протестируем эту строку на наличие в ней "@".
console.log(/@/gi.test(email));

// * == Методы строк, используемые в регулярных выражениях == * \\
const confucius = 'Есть три ошибки в общении людей: первая — это желание говорить прежде, чем нужно; вторая — застенчивость, не говорить когда это нужно; третья — говорить, не наблюдая за вашим слушателем.'

// * == search() ==
console.log(confucius.search(/говорить/i)); // 54 - индекс первой литеры начала совпадения с шаблоном регулярки. Если бы он не нашёл ни единого совпадения, то в консоль мы получили бы -1

// * == match() ==
console.log(confucius.match(/говорить/i)); // Получим объект, очень похожий на тот, что мы получали методом exec()
console.log(confucius.match(/говорить/ig)); // Но если мы добавим флаг "g", то мы получим массив, где будут все совпадения, это куда удобнее, чем манипуляции с exec() и push() в примере выше.

// * == replace() ==
console.log(confucius.replace(/говорить/ig, 'болтать')); // Вторым аргументом указываем на что мы хотим поменять найденное/-ые совпадение/-ия в строке.

// * == Символьные классы == * \\

// * "\d" — любая цифра
// * "\w" - любое слово латинскими буквами, цифра или _ (кириллицу не воспринимает)
// * "\s" - пробел, табуляция и перенос строки
// ? А если мы укажем эти же символы но в верхнем регистре, то это будет воспринято интерпретатором, как отрицание
// * "\D" — все, кроме цифр
// * "\W" - все, кроме латинских букв, цифр или _ (кириллицу не воспринимает)
// * "\S" - все, кроме пробелов, табуляций и переносов строк

// * "." - вообще любой символ, кроме "\n" (переноса строки)

// Пример - у нас есть номер телефона
const phone = '7 (499) 999 - 99 - 77';

// Надо получить все цифры из этого номера.
console.log(phone.match(/\d/g).join('')); // получили строчку всех цифр номера телефона, которую можем вставить, например в тег `<a href='tel:${formattedPhone}'></a>`
const formattedPhone = phone.match(/\d/g).join('');
const phoneElement = document.createElement('a');
phoneElement.textContent = phone;
phoneElement.setAttribute('href', `tel:+${formattedPhone}`);
document.body.insertAdjacentElement('beforeend', phoneElement);

// * == Якоря == * \\
// ? Якоря требуются для определения начала и конца строки.

// * "^" - начало строки
// * "$" - конец строки
// * \b - граница слова

const date = '22 november 1964';

console.log(date.match(/^\d\d/g)); // : желаемое совпадение с двумя цифрами подряд в начале строки
console.log(date.match(/\w\w$/g)); // : желаемое совпадение с двумя цифрами/литерами подряд в конце строки
console.log(date.match(/\b\d\d/g)); // : желаемое совпадение с двумя цифрами/литерами подряд в начале слова
console.log(date.match(/\d\d\b/g)); // : желаемое совпадение с двумя цифрами/литерами подряд в конце слова

// * == Наборы и диапазоны == * \\

const string2 = 'дедушка и девушка';

// У нас два слова, которые отличаются всего одной буквой, и если нам нужно забрать из строки регуляркой оба слова, то мы можем записать следующим образом:
console.log(string2.match(/де[дв]ушка/g)); // это называется "набор", мы можем передать набор символов именно в этом месте
console.log(string2.match(/де[а-я]ушка/g)); // это называется "диапазон", мы можем передать диапазон символов именно в этом месте через тире
console.log(string2.match(/де[а-яА-Я0-9a-zA-Z]ушка/g)); // диапазоны могут быть разными
console.log(string2.match(/де[^а-в]ушка/g)); // а знак "^" будет означать в диапазоне отрицание, вроде "!" во многих других случаях в JS
console.log(string2.match(/де[^дв]ушка/g)); // также и с наборами (ничего не найдено, т.к. мы исключили из набора "д" и "в")

const string3 = 'де^ушка и девушка';
// Если нужно найти строку со специальным символом, то надо такой символ экранировать
console.log(string3.match(/де[\^]ушка/g));

// Однако, если мы пользуемся другим видом записи объекта регулярных выражений, то запись экранирования будет чуточку отличаться, т.к. кавычки съедают экранирование
const regExp5 = new RegExp('де[\\^]ушка', 'g');

console.log(string3.match(regExp5));

// * == Квантификаторы == * \\
// ? Внутри квантификаторов мы можем указать точное количество символов

// * "{1,}" записывается также, как "+" - от одного до бесконечности (мы точно хотим увидеть на этом месте один символ, но их кол-во не ограничено)
// * "{0,}" записывается также, как "*" - от 0 до бесконечности символов
// * "{0,1}" записывается также, как "?" - от 0 до 1 символа

const string4 = 'дедушка и девушка';

console.log(string4.match(/[а-я]{2}[дв][а-я]{4}/gi)); // теперь мы указали, что ищем слова, где 3-ей и 4-ой буквой идут "д" и "в", а первые две и последние четыре любые буквы кириллического алфавита.
console.log(string4.match(/[а-я]{2,4}[дв][а-я]{4}/gi)); // мы можем также указать диапазон в квантификаторе, например от 2 до 4 символов вначале
console.log(string4.match(/[а-я]{2,}[дв][а-я]{4}/gi)); // или мы можем указать диапазон в квантификаторе от 2 до бесконечности
console.log(string4.match(/[а-я]+[дв][а-я]{4}/gi)); // тоже, что в примере выше

const string5 = 'душка и девушка';

console.log(string5.match(/[а-я]{0,}[дв][а-я]{4}/gi));
console.log(string5.match(/[а-я]*[дв][а-я]{4}/gi)); // тоже, что в примере выше

// * == Скобочные группы == * \\

const url = 'site.mysite.coolsite.mycoolsite.wordpress.com';

console.log(url.match(/[\w]+\.[\w]+/gi)); // если у нас в строке поддомены, то такой паттерн уже не подходит, т.к. ".com" обрезается

// ? Здесь на помощь придут скобочные группы. Любой отрезок регулярного выражения мы можем ограничить круглыми скобками и использовать на всём выражении внутри круглых скобок квантификаторы. Например выберем часть выражения, которое включает в себя любое кол-во латинских букв и цифр и точку.
console.log(url.match(/([\w]+\.)+[\w]+/gi)); // означает, что то, что в скобках благодаря следующему за ними "+" может повторяться один раз и более

// А теперь поработаем с email
const emailString = 'zapl.in-dev@gmail.com';
const weirdEmailString = 'zapl.in-dev@gmail.com?edfefefefe';

console.log(emailString.match(/[\-\.\w]+@([\w]+\.)+[\w]+/gi)); // сначала у нас будет сколь угодно латинских букв и символ "@", а дальше как было в начале с паттерном URL с поддоменами. Также стоит учесть, что перед "@" могут быть "-" и ".", поэтому нам нужен набор из разрешённых символов.
console.log(weirdEmailString.match(/[\-\.\w]+@([\w]+\.)+[\w]+/gi)); // причём, если даже после email будет ошибочно указана какая-то ерунда, то она будет обрезана паттерном и проигнорирована

// Можно вынести такой паттерн в отдельную переменную, чтобы потом проверять поле email на валидность
const emailValidation = /(([\-\.\w]+)(@)([\w]+\.)+([\w]+))/gi;

console.log(emailValidation.test(emailString));
console.log(emailValidation.test(weirdEmailString));

// * Второе важное свойство скобочных групп — разбитие всего регулярного выражения на участки и использование их в последующей функции.
const emailString2 = 'Введите ваш zapl.in-dev@gmail.com';
const result = emailString2.replace(emailValidation, 'email');

console.log(result); // в итоге получим "Введите ваш email, т.к. собственно email адрес был найден паттерном и заменён на слово "email"

// Немного усложним и вместо строки со словом "email" добавим функцию, в которую параметром будем получать строку
const result2 = emailString2.replace(emailValidation, (str, $1, $2, $3, $4, $5) => {
	console.log('скобочная группа 1', $1);
	console.log('скобочная группа 2', $2);
	console.log('скобочная группа 3', $3);
	console.log('скобочная группа 4', $4);
	console.log('скобочная группа 5', $5);
	return `Это мой e-mail: ${$2}${$3}${$4}${$5}`;
	// return `Это мой e-mail: ${str}`;
});

console.log(result2);

// * 1.0 Рассмотрим одно из самых распространённых задач замену определённый набор символов на другой набор символов.
const text = document.getElementById('text');

// 1.1 Однако у нас удалились из текста все span'ы, т.к. текст по сути перезаписался с исправлениями. Эту особенность нужно учитывать.
// text.textContent = text.textContent.replace(/Lorem/gi, "Лорем");

// * 2.0 В HTML можно заметить, что у нас есть два участка текста обёрнутые в <span>, представим, что нам поручили дополнительно выделить эти участки тегом <strong>.
// 2.1 Т.к. нам нужно работать с тегами, то textContent не подойдёт и мы используем свойство innerHTML, которое возвращает вёрстку элемента текстом.
// console.log(text.innerHTML);
// 2.2 Теперь мы запишем теги <span> & </span>, однако символ "/" надо экранировать обратным слэшем, чтобы он прочитался правильно. Далее между тегами вставим "[\w\s]+", что укажет регулярке, что между ними любой набор латинский символов "\w" и есть пробелы "\s".
// 2.3 Затем мы напишем функцию, где параметром укажем "str", т.е. строчку, которая подойдёт под паттерн регулярного выражения.
// 2.4 Также вторым параметром укажем "$1" скобочную группу* и её же будем возвращать, обернув в теги <strong>.
	// ** можно было бы продолжать работать со строкой, но для примера покажем работу со скобочной группой.
text.innerHTML = text.innerHTML.replace(/(<span>[\w\s]+<\/span>)/gi, (str, $1) => {
	return `<strong>${$1}</strong>`;
});

// todo 3.0 А теперь перейдём к форме [form.html]


/* ||---------------------------------------------->> 
* Links:
* [][https://html5book.ru/html-attributes/] HTML атрибуты
* [][https://regexr.com/] сервис для проверки регулярных выражений
* [][https://regexper.com/] сервис для визуализации регулярок
* [][https://uiregex.com/ru] и еще один классный сервис
* [][https://tuhub.ru/frontend/js-regexp] подробная статья про регулярные выражения
*/ 