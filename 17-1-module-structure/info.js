// * === Модульная структура === * \\

/* // ? 1.0 Вообще отдельных функциональных блоков на сайте может быть довольно много:
	> отправка формы;
	> слайдер;
	> таймер;
	> модальные окна;
	> калькулятор;
	> аккордеон;
	> и т.д. ...;
Можно себе представить количество JS-кода, если бы мы всё это хранили в одном файле. Одних переменных было бы вероятно на два экрана. Работать в одном и том же файле крайне неудобно и легко потеряться, поэтому разработчики стали разбивать код на множество независимых самостоятельных функциональных блоков или "модулей".
*/

// ? 1.1 Убрав один из них мы не должны потерять функциональность второго.

// ? 1.2 Обратимся к истории JS, сперва было решено дробить код для удобства на разные файлы, но если просто создавать кусочки кода в отдельных файлах, то можно быстро столкнуться с проблемой, что в нескольких файлах будут одни и те же названия переменных, что вызовет ошибку. Тогда было придумано оборачивать кусочки кода в отдельную функцию — это называется «инкапсуляция». Т.о. все переменные будут иметь свою область видимости и никак не мешать другим функциональным блокам.

// todo [примеры в /test/project]

// ? 1.3.0 Но и такой подход оказался с огрехами, т.к. фантазия разработчиков не безгранична и в какой-то момент может случиться, что мы столкнёмся с таким же названием функции-капсулы. Тогда было решено использовать анонимную самовызывающуюся функцию, как решение таких проблем. Для этого надо просто обычную function declaration функцию обернуть в круглые скобки, а в конце добавить её же вызов.

// function () {
// 	console.log('test');
// };
(function () {
	console.log('test');
})();

// 1.3.1 Её же можно написать в виде стрелочной функции
(() => {
	console.log('test');
})();

// ? 1.3.2 Подобный способ инкапсуляции был принят на вооружение многими разработчиками. До сих пор можно встретить многие библиотеки, написанные при помощи подобной инкапсуляции.

// ? 1.4.0 Но развитие JS не стояло на месте и факт, что к HTML подключалось слишком много файлов никого не устраивало, т.к. сказывалось на производительности. Тогда было введено понятие «модуль», которое решило кучу проблем и изменило отношение к архитектуре приложения.
// ? 1.4.1 Стиль написания кода через модули стал называться "модульным подходом".

// * 1.5.0 «Модуль» — это законченный и независимый функциональный блок кода, который мы можем подключать и отключать от проекта, при этом другие модули никак не будут затронуты.
// ? 1.5.1 Далее все модули собираются в одном файле (точке входа), именно его и подключают к странице. А отдельным инструментом мы собираем всю эту структуру в единый JS-файл.
// ? 1.5.2 Для этого нам потребуется специальная программа-сборщик, например Webpack, Vite или Browserify. Воспользуемся для начала последней и сперва установим её глобально, как сказано в инструкции на её официальном сайте (ссылка ниже). 
// 1.5.3 Чтобы запустить сборку надо в консоли ввести "browserify src/index.js -o dist/bundle.js", где первым будет путь к файлу-точке входа, а вторым путь к итоговому файлу, который мы подключим к проекту в итоге.

// ? 1.6.0 Но у нас всё ещё есть что улучшить. Новый стандарт ES6 дал нам операторы "import" & "export".

// ? 1.6.1 С помощью "export default (название функции)" мы укажем, что мы хотим экспортировать по умолчанию

// * == Сборщик Webpack == * \\

// В package.json мы помимо прочего добавим, чтобы Webpack при сборке на продакшн относился более серьёзно, убирая всё лишнее и максимально сжимая код:
/* 
"scripts": {
  "build": "webpack --mode=production",
  "watch": "webpack --watch --mode=development"
} 
*/

/* ||---------------------------------------------->> 
* Links:
* [][https://browserify.org/] Browserify
* [][https://webpack.js.org/] Webpack
* [][https://webdevblog.ru/ochen-prostoe-rukovodstvo-dlya-nachinajushhih-po-webpack/] Зачем нужен Webpack?
*/ 