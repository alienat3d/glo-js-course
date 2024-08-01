/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/user-service */ \"./src/modules/user-service.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_add_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add-users */ \"./src/modules/add-users.js\");\n/* harmony import */ var _modules_remove_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/remove-users */ \"./src/modules/remove-users.js\");\n/* harmony import */ var _modules_change_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/change-permissions */ \"./src/modules/change-permissions.js\");\n/* harmony import */ var _modules_edit_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/edit-users */ \"./src/modules/edit-users.js\");\n/* harmony import */ var _modules_filter_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filter-users */ \"./src/modules/filter-users.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// * 3.0 Создадим новый экземпляр класса UserService. Т.к. на не требуется передавать параметры, поэтому можно без \"()\"\r\n// const userService = new UserService;\r\n\r\n// * 4.0 Но есть и иной способ работы с глобальным сервисом, мы можем записать его в глобальный объект window. И теперь в каждом модуле ниже данной строчке будет доступен, созданный нами, userService из глобального объекта Window и теперь уже не придётся принимать и передавать этот сервис в каждый модуль.\r\nwindow.userService = new _modules_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService;\r\n\r\n// 3.1 Теперь мы можем его передавать в любой другой модуль\r\n// render(userService);\r\n\r\n// 6.1 Теперь мы запустим этот метод здесь и поместим результат его выполнения data в render().\r\nuserService.getUsers().then(data => (0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.renderFunc)(data));\r\n\r\n// render(userService.users);\r\n\r\n(0,_modules_add_users__WEBPACK_IMPORTED_MODULE_2__.addUsersFunc)();\r\n(0,_modules_remove_users__WEBPACK_IMPORTED_MODULE_3__.removeUsersFunc)();\r\n(0,_modules_change_permissions__WEBPACK_IMPORTED_MODULE_4__.changePermissionsFunc)();\r\n(0,_modules_edit_users__WEBPACK_IMPORTED_MODULE_5__.editUsersFunc)();\r\n(0,_modules_filter_users__WEBPACK_IMPORTED_MODULE_6__.filterUsersFunc)();\r\n\r\n/* ||---------------------------------------------->>\r\n* Links:\r\n* [✓][https://github.com/typicode/json-server] JSON-server\r\n*/\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-users.js":
/*!**********************************!*\
  !*** ./src/modules/add-users.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsersFunc: () => (/* binding */ addUsersFunc)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\n// * 7.0 При помощи другого метода \"POST\" мы будем сохранять нового пользователя.\r\nconst addUsersFunc = () => {\r\n\t// 7.1 Но сперва получим саму форму, у нас она одна, т.ч. можно получить её и по тегу.\r\n\tconst form = document.querySelector('form');\r\n\tconst nameInput = form.querySelector('#form-name');\r\n\tconst emailInput = form.querySelector('#form-email');\r\n\tconst childrenCheckbox = form.querySelector('#form-children');\r\n\r\n\tform.addEventListener('submit', (evt) => {\r\n\t\tevt.preventDefault();\r\n\r\n\t\t// [->] 10.5.2 Нам следует запретить сохранение методом \"POST\", если дата-атрибут \"method\" будет равен \"edit\".\r\n\t\tif (!form.dataset.user) {\r\n\r\n\t\t\t// 7.2 Создадим новый объект пользователя, id мы можем игнорировать. И по умолчанию permissions будет false. И соответственно подставим в объект нужные нам строки.\r\n\t\t\tconst user = {\r\n\t\t\t\tname: nameInput.value,\r\n\t\t\t\temail: emailInput.value,\r\n\t\t\t\tchildren: childrenCheckbox.checked,\r\n\t\t\t\tpermissions: false\r\n\t\t\t}\r\n\t\t\t// todo 7.3.0 Теперь нам нужен в сервисах ещё один метод, который будет добавлять нового пользователя, для этого перейдём в: [user-service.js]\r\n\t\t\t// 7.3.3 Теперь мы просто вызовем этот метод из сервисов и передадим туда наш объект\r\n\t\t\t// 7.4.2 Чтобы новый пользователь рендерился сразу после добавления его в базу данных.\r\n\t\t\t// ? 7.4.3 Теперь мы сперва сохраним нового пользователя, получим ответ от сервера, после чего мы в следующем then() получаем всех пользователей и отправляем в функцию render()\r\n\t\t\tuserService.addUser(user).then(() => {\r\n\t\t\t\tuserService.getUsers().then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users));\r\n\t\t\t\tform.reset(); // чтобы очищать форму, после добавления нового пользователя\r\n\t\t\t});\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/add-users.js?");

/***/ }),

/***/ "./src/modules/change-permissions.js":
/*!*******************************************!*\
  !*** ./src/modules/change-permissions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePermissionsFunc: () => (/* binding */ changePermissionsFunc)\n/* harmony export */ });\nconst changePermissionsFunc = () => {\r\n\t// 9.3 Функция очень похожа на removeUsersFunc(), но здесь мы уже будем искать в условии 'input[type=checkbox]'\r\n\tconst tbody = document.querySelector('#table-body');\r\n\r\n\ttbody.addEventListener('click', (evt) => {\r\n\t\tconst tgt = evt.target;\r\n\t\tif (tgt.closest('input[type=checkbox]')) {\r\n\t\t\tconst tr = tgt.closest('tr');\r\n\r\n\t\t\tconst id = tr.dataset.key;\r\n\t\t\t// 9.4 Но помимо самого id нам нужно ещё получать значение инпута\r\n\t\t\tconst input = tr.querySelector('input[type=checkbox]');\r\n\t\t\t\r\n\t\t\t// 9.4.3 Здесь, по аналогии с remove-users.js всё тоже самое, но в параметры к id добавляется объект со свойством permissions, которому присваиваем значение input.checked.\r\n\t\t\t// 9.5 Кстати, здесь, скорее всего можно обойтись и без доп. рендеринга, т.к. кликнутый чекбокс таким и останется.\r\n\t\t\tuserService.changeUser(id, { permissions: input.checked });\r\n\t\t}\r\n\t})\r\n\t// todo 9.4.0 -> [user-service.js]\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/change-permissions.js?");

/***/ }),

/***/ "./src/modules/edit-users.js":
/*!***********************************!*\
  !*** ./src/modules/edit-users.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editUsersFunc: () => (/* binding */ editUsersFunc)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\n// * 10.1.0 Итак, что нам нужно: перехватывать клик по жёлтой кнопке редактирования пользователя, заполнять нужному пользователю форму, и после корректирования данных снова сохранять эту форму под id этого пользователя в БД. А в класс \"UserService\" нам нужно добавить два новых запроса...\r\n// todo 10.1.1 -> [./user-service.js]\r\nconst editUsersFunc = () => {\r\n\tconst tbody = document.querySelector('#table-body');\r\n\t// 10.4.0 Ну, а теперь на основании полученных данных о пользователе из БД нам нужно заполнить форму. И сделать мы это можем, получив все поля формы.\r\n\tconst form = document.querySelector('form');\r\n\tconst nameInput = form.querySelector('#form-name');\r\n\tconst emailInput = form.querySelector('#form-email');\r\n\tconst childrenCheckbox = form.querySelector('#form-children');\r\n\r\n\ttbody.addEventListener('click', (evt) => {\r\n\t\tconst tgt = evt.target;\r\n\r\n\t\t// ? 10.2.1 В вёрстку для кнопки редактирования мы добавим класс btn-edit и уже по нему будем искать её.\r\n\t\tif (tgt.closest('.btn-edit')) {\r\n\t\t\tconst tr = tgt.closest('tr');\r\n\t\t\tconst id = tr.dataset.key;\r\n\r\n\t\t\t// 10.4.1 А дальше начинаем заполнять форму из полученного объекта.\r\n\t\t\t// 10.5.0 Но теперь, если просто нажать кнопку \"Сохранить\", то мы просто сохраним ещё одного пользователя с теми же данными, что и тот, которого мы выбрали для редактирования, поэтому добавим в форму специальный \"флажок\", означающий редактирование существующего пользователя. Для этого добавим data-атрибут \"method\", который будет в значении \"edit\".\r\n\t\t\tuserService.getUser(id).then(user => {\r\n\t\t\t\tnameInput.value = user.name;\r\n\t\t\t\temailInput.value = user.email;\r\n\t\t\t\tchildrenCheckbox.checked = user.children;\r\n\r\n\t\t\t\t// 10.5.1 Также, нам необходимо проверять этот флажок в модуле \"add-users\". [->]\r\n\t\t\t\t// 10.6 Теперь нам нужно изменённые данные отправить дальше на сохранение, для этого нам нужно передавать id. И раз уж мы создаём data-атрибут, то можно помещать в него id значением, а сам он будет называться \"user\".\r\n\t\t\t\tform.dataset.user = id;\r\n\t\t\t});\r\n\t\t}\r\n\t})\r\n\r\n\tform.addEventListener('submit', (evt) => {\r\n\t\tevt.preventDefault();\r\n\r\n\t\tif (form.dataset.user) {\r\n\t\t\tconst id = form.dataset.user; // занесём id в переменную для лучшей читабельности\r\n\t\t\tconst user = {\r\n\t\t\t\tname: nameInput.value,\r\n\t\t\t\temail: emailInput.value,\r\n\t\t\t\tchildren: childrenCheckbox.checked,\r\n\t\t\t\tpermissions: false\r\n\t\t\t}\r\n\r\n\t\t\t// [->] 10.6.2 Первым аргументом мы отдаём id, а уже затем объект пользователя.\r\n\t\t\tuserService.editUser(id, user).then(() => {\r\n\t\t\t\tuserService.getUsers().then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users))\r\n\t\t\t\tform.reset(); // чтобы очищать форму, после исправления данных пользователя\r\n\t\t\t\tform.removeAttribute('data-user');\r\n\t\t\t});\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/edit-users.js?");

/***/ }),

/***/ "./src/modules/filter-users.js":
/*!*************************************!*\
  !*** ./src/modules/filter-users.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterUsersFunc: () => (/* binding */ filterUsersFunc)\n/* harmony export */ });\nconst filterUsersFunc = () => {\r\n\t\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filter-users.js?");

/***/ }),

/***/ "./src/modules/remove-users.js":
/*!*************************************!*\
  !*** ./src/modules/remove-users.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsersFunc: () => (/* binding */ removeUsersFunc)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst removeUsersFunc = () => {\r\n\tconst tbody = document.querySelector('#table-body');\r\n\r\n\t// 8.1 Будем проверять по классу, используя метод contains(), находя кнопки удаления пользователей. И тогда мы создадим переменную, куда будем получать всю строчку таблицы, по которой кликнули.\r\n\t// 8.2.0 Теперь мы можем что-то получить с родительского кнопки удаления тега <tr>. И брать мы будем дата-атрибут \"key\", который будет различать все строчки. Мы добавим data-атрибут каждому <tr> в render(), т.о. он будет соответствовать id в объекте базы данных с данными для каждого пользователя.\r\n\ttbody.addEventListener('click', (evt) => {\r\n\t\tconst tgt = evt.target;\r\n\r\n\t\tif (tgt.closest('.btn-remove')) {\r\n\t\t\tconst tr = tgt.closest('tr');\r\n\r\n\t\t\t// 8.2.1 Мы будем помещать каждый такой ключ-идентификатор в переменную id.\r\n\t\t\tconst id = tr.dataset.key;\r\n\r\n\t\t\t// todo 8.3.0 Теперь нам только осталось в сервисах добавить метод removeUser(), переходим в [user-service.js]\r\n\t\t\t// 8.4 Теперь, когда мы создали новый метод, вызовем его и передадим идентификатор в него. И мы также будем перерисовывать функцией renderFunc() таблицу после каждого удаления.\r\n\t\t\tuserService.removeUser(id).then(() => {\r\n\t\t\t\tuserService.getUsers().then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users))\r\n\t\t\t});\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/remove-users.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderFunc: () => (/* binding */ renderFunc)\n/* harmony export */ });\n// export const render = (service) => {\r\n// 5.1 Это и будет нашим модулем, который будет рендерить пользователей в нашем приложении. Его главная функция будет принимать массив \"users\", а дальше внутри тела функции перебирать массив с пользователями. Ну, а в index.js нам нужно будет передать в этот модуль \"userService.users\" для доступа к массиву с пользователями.\r\n// 5.2 Далее мы получим таблицу и будем заполнять информацию каждого из пользователей в виде строки. \r\nconst renderFunc = (users) => {\r\n\tconst tbody = document.querySelector('#table-body');\r\n\t\r\n\ttbody.innerHTML = '';\r\n\r\n\tusers.forEach((user, index) => {\r\n\t\ttbody.insertAdjacentHTML('beforeend', `\r\n\t\t\t<tr data-key=\"${user.id}\">\r\n\t\t\t\t<th scope=\"row\">${index + 1}</th>\r\n\t\t\t\t<td>${user.name}</td>\r\n\t\t\t\t<td>${user.email}</td>\r\n\t\t\t\t<td>${user.children ? 'Есть' : 'Нет'}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div class=\"form-check form-switch\">\r\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" name=\"user-${index + 1}\" ${user.permissions ? 'checked' : ''}>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n\t\t\t\t\t\t\t<i class=\"bi-pencil-square\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n\t\t\t\t\t\t\t<i class=\"bi-person-x\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t`)\r\n\t});\r\n\r\n\r\n\r\n\t// 3.2 Так мы, например, записали в наш пустой массив новый объект, содержащий свойство id со значением 0 при помощи сеттера.\r\n/* \tservice.users = [{\r\n\t\tid: 0\r\n\t}]\r\n\tservice.logger(); */\r\n\t// 4.1 Теперь мы можем просто обращаться к сервису в любом модуле просто по его имени, т.к. это метод объекта window и \"window.\" в JS писать не обязательно. Поэтому мы можем работать методами, геттерами и сеттерами напрямую.\r\n\t// userService.logger();\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/user-service.js":
/*!*************************************!*\
  !*** ./src/modules/user-service.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n\t// * 1.0 У данного класса будет 1 переменная \"_users\", написанная с \"_\", т.к. мы будем работать с ней через геттеры и сеттеры. Изначально она будет содержать пустой массив.\r\n\t// * 5.0 Создадим парочку временных объектов, которые мы сможем рендерить методом render()\r\n\t// todo upd. Больше он нам не нужен, т.к. теперь мы получаем пользователей из [../../db/users.json]\r\n\t/* \t_users = [\r\n\t\t\t{\r\n\t\t\t\t\"id\": 0,\r\n\t\t\t\t\"name\": \"Al\",\r\n\t\t\t\t\"email\": \"psy.alienated@gmail.com\",\r\n\t\t\t\t\"children\": true,\r\n\t\t\t\t\"permissions\": true\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\t\"id\": 1,\r\n\t\t\t\t\"name\": \"Andrey\",\r\n\t\t\t\t\"email\": \"antr0y@yahoo.com\",\r\n\t\t\t\t\"children\": true,\r\n\t\t\t\t\"permissions\": false\r\n\t\t\t}\r\n\t\t]; */\r\n\r\n\t// 1.1 Ну, и сразу же создадим геттер (будет получать данные) и сеттер (будет переопределять значение) для данной переменной\r\n\t// todo upd. Впрочем, как и сеттеры и геттеры больше не нужны.\r\n\t/* \tget users() {\r\n\t\t\treturn this._users;\r\n\t\t}\r\n\t\r\n\t\tset users(users) {\r\n\t\t\tthis._users = users;\r\n\t\t} */\r\n\r\n\t// * 2. Напишем тестовый метод, который будет выводить в консоль наших пользователей\r\n\t// todo upd. Да и метод logger() можно убрать\r\n\t/* \tlogger() {\r\n\t\t\tconsole.log(this.users);\r\n\t\t} */\r\n\r\n\t// * 6.0 getUsers() будет возвращать результат метода fetch(). По умолчанию метод fetch() использует настройку method=\"GET\".\r\n\t// ? 6.2 На самом деле мы могли бы просто экспортировать функцию получения данных с сервера, но тут мы разобрали на практике как пишутся реальные сервисы\r\n\tgetUsers() {\r\n\t\treturn fetch('http://localhost:3333/users')\r\n\t\t\t.then(res => res.json());\r\n\t}\r\n\r\n\t// 7.3.1 Теперь нам нужен в сервисах ещё один метод, который будет использовать \"POST\" для записи объекта в базу данных и который будет добавлять нового пользователя. В настройках запишем, что уже используем \"POST\", а также в body передаём \"user\", обработанный методом JSON.stringify(), ну и headers мы подсмотрим из документации к JSON-Server, нам нужны настройки: 'Content-Type': 'application/json'.\r\n\t// todo 7.3.2 Вернёмся в [add-users.js]\r\n\t// 7.4.0 Добавим и у addUsers() метод then(), чтобы переводить ответ обратно в JSON.\r\n\t// todo 7.4.1 Вернёмся в [add-users.js]\r\n\taddUser(user) {\r\n\t\treturn fetch('http://localhost:3333/users', {\r\n\t\t\tmethod: 'POST',\r\n\t\t\tbody: JSON.stringify(user),\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t}\r\n\t\t})\r\n\t\t\t.then(res => res.json());\r\n\t}\r\n\r\n\t// * 8.0 Теперь нам нужен ещё метод удаления пользователей. Для этого нам нужно отслеживать по какому именно пользователю мы кликаем. Для этого мы могли бы повесить на каждую кнопку удаления пользователя обработчик события, но лучше воспользуемся делегированием, и для этого создадим новый модуль remove-users.js\r\n\t// 8.3.1 Теперь нам только осталось в сервисах добавить метод removeUser(), который будет принимать идентификатор (key\\id) и возвращать метод fetch().\r\n\t// 8.3.2 В документации к JSON-Server мы найдём, что нам нужно добавить id пользователя после запроса и \"/\". Ну и не забудем про конвертацию из JSON в JS-объект методом then().\r\n\t// 8.5.0 Итак, чтобы удалить, нам нужно прописать в настройках ещё специальный метод \"DELETE\".\r\n\t// ? 8.5.1 Метод \"DELETE\" создан для того, чтобы удалять целостную структуру из базы данных, т.е. один отдельный объект\\сущность.\r\n\tremoveUser(id) {\r\n\t\treturn fetch(`http://localhost:3333/users/${id}`, {\r\n\t\t\tmethod: \"DELETE\"\r\n\t\t})\r\n\t\t\t.then(res => res.json());\r\n\t}\r\n\r\n\t// ? 9.0 Осталось рассмотреть ещё два метода работы с БД: \"PUT\" & \"PATCH\", которые между собой немного похожи, но тем не менее принципиально отличаются друг от друга.\r\n\t// ? 9.1 Метод \"PUT\" полностью заменяет цельную сущность в БД, а \"PATCH\" заменит какую-то одну часть этой сущности (значение свойства, например).\r\n\t// todo 9.2 Мы скопируем логику модуля remove-users.js и создадим/перейдём в [./change-permissions.js]\r\n\t// 9.4.1 Создадим новый метод changeUser(), который будет менять значение permissions у пользователя. Кроме id пользователя, мы будем также передавать data, а метод изменим на \"PATCH\".\r\n\t// 9.4.2 Как и в случае с добавлением пользователя нам нужны в настройка и body, и headers. headers останется таким же, но в body вместо пользователя целиком, мы будем передавать только часть - свойство permissions, значение которого мы изменяем.\r\n\tchangeUser(id, data) {\r\n\t\treturn fetch(`http://localhost:3333/users/${id}`, {\r\n\t\t\tmethod: \"PATCH\",\r\n\t\t\tbody: JSON.stringify(data),\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t}\r\n\t\t})\r\n\t\t\t.then(res => res.json());\r\n\t}\r\n\r\n\t// ? 10.0 А теперь, наверное, самый сложный метод из всех — \"PUT\".\r\n\t// todo 10.1 Создадим для этого ещё один модуль и перейдём в него [./edit-users.js]\r\n\r\n\t// 10.1.2 В класс \"UserService\" нам нужно добавить два новых запроса: 1) получение информации по конкретному пользователю getUser(), который примет идентификатор \"id\"; 2) для сохранения новой информации о пользователе с изменёнными данными editUser(), который примет всего \"user\" и для надёжности также \"id\"\r\n\t// todo 10.2.0 Перейдём в [./edit-users.js]\r\n\t// 10.3 В getUser мы также возвращаем метод fetch() c id и запросом по умолчанию \"GET\".\r\n\tgetUser(id) {\r\n\t\treturn fetch(`http://localhost:3333/users/${id}`)\r\n\t\t\t.then(res => res.json());\r\n\t}\r\n\t// 10.6.0 Теперь мы опишем метод, который будет принимать id изменяемого пользователя и новый объект, которым должен быть заменён старый. По данному id будет совершаться PUT-запрос, который отправит изменённый объект пользователя и заменит им существующий в базе данных.\r\n\t// todo 10.6.1 Перейдём в [./edit-users.js]\r\n\teditUser(id, user) {\r\n\t\treturn fetch(`http://localhost:3333/users/${id}`, {\r\n\t\t\tmethod: \"PUT\",\r\n\t\t\tbody: JSON.stringify(user),\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t}\r\n\t\t})\r\n\t\t\t.then(res => res.json());\r\n\t}\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/user-service.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;