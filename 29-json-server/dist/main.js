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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/user-service */ \"./src/modules/user-service.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_add_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add-users */ \"./src/modules/add-users.js\");\n/* harmony import */ var _modules_remove_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/remove-users */ \"./src/modules/remove-users.js\");\n/* harmony import */ var _modules_change_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/change-permissions */ \"./src/modules/change-permissions.js\");\n/* harmony import */ var _modules_edit_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/edit-users */ \"./src/modules/edit-users.js\");\n/* harmony import */ var _modules_filter_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filter-users */ \"./src/modules/filter-users.js\");\n/* harmony import */ var _modules_sort_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sort-users */ \"./src/modules/sort-users.js\");\n/* harmony import */ var _modules_search_users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/search-users */ \"./src/modules/search-users.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService;\r\n\r\nuserService.getUsers().then(data => (0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.renderFunc)(data));\r\n\r\n(0,_modules_add_users__WEBPACK_IMPORTED_MODULE_2__.addUsersFunc)();\r\n(0,_modules_remove_users__WEBPACK_IMPORTED_MODULE_3__.removeUsersFunc)();\r\n(0,_modules_change_permissions__WEBPACK_IMPORTED_MODULE_4__.changePermissionsFunc)();\r\n(0,_modules_edit_users__WEBPACK_IMPORTED_MODULE_5__.editUsersFunc)();\r\n(0,_modules_filter_users__WEBPACK_IMPORTED_MODULE_6__.filterUsersFunc)();\r\n(0,_modules_sort_users__WEBPACK_IMPORTED_MODULE_7__.sortUsersFunc)();\r\n(0,_modules_search_users__WEBPACK_IMPORTED_MODULE_8__.searchUsersFunc)();\r\n\r\n/* ||---------------------------------------------->>\r\n* Links:\r\n* [✓][https://github.com/typicode/json-server] JSON-server\r\n*/\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-users.js":
/*!**********************************!*\
  !*** ./src/modules/add-users.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsersFunc: () => (/* binding */ addUsersFunc)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst addUsersFunc = () => {\r\n\tconst form = document.querySelector('form');\r\n\tconst nameInput = form.querySelector('#form-name');\r\n\tconst emailInput = form.querySelector('#form-email');\r\n\tconst childrenCheckbox = form.querySelector('#form-children');\r\n\r\n\tform.addEventListener('submit', (evt) => {\r\n\t\tevt.preventDefault();\r\n\r\n\t\tif (!form.dataset.user) {\r\n\t\t\tconst user = {\r\n\t\t\t\tname: nameInput.value,\r\n\t\t\t\temail: emailInput.value,\r\n\t\t\t\tchildren: childrenCheckbox.checked,\r\n\t\t\t\tpermissions: false\r\n\t\t\t}\r\n\t\t\tuserService.addUser(user).then(() => {\r\n\t\t\t\tuserService.getUsers().then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users));\r\n\t\t\t\tform.reset();\r\n\t\t\t});\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/add-users.js?");

/***/ }),

/***/ "./src/modules/change-permissions.js":
/*!*******************************************!*\
  !*** ./src/modules/change-permissions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePermissionsFunc: () => (/* binding */ changePermissionsFunc)\n/* harmony export */ });\nconst changePermissionsFunc = () => {\r\n\tconst tbody = document.querySelector('#table-body');\r\n\r\n\ttbody.addEventListener('click', (evt) => {\r\n\t\tconst tgt = evt.target;\r\n\t\tif (tgt.closest('input[type=checkbox]')) {\r\n\t\t\tconst tr = tgt.closest('tr');\r\n\r\n\t\t\tconst id = tr.dataset.key;\r\n\t\t\tconst input = tr.querySelector('input[type=checkbox]');\r\n\t\t\t\r\n\t\t\tuserService.changeUser(id, { permissions: input.checked });\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/change-permissions.js?");

/***/ }),

/***/ "./src/modules/edit-users.js":
/*!***********************************!*\
  !*** ./src/modules/edit-users.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editUsersFunc: () => (/* binding */ editUsersFunc)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst editUsersFunc = () => {\r\n\tconst tbody = document.querySelector('#table-body');\r\n\tconst form = document.querySelector('form');\r\n\tconst nameInput = form.querySelector('#form-name');\r\n\tconst emailInput = form.querySelector('#form-email');\r\n\tconst childrenCheckbox = form.querySelector('#form-children');\r\n\r\n\ttbody.addEventListener('click', (evt) => {\r\n\t\tconst tgt = evt.target;\r\n\r\n\t\tif (tgt.closest('.btn-edit')) {\r\n\t\t\tconst tr = tgt.closest('tr');\r\n\t\t\tconst id = tr.dataset.key;\r\n\r\n\t\t\tuserService.getUser(id).then(user => {\r\n\t\t\t\tnameInput.value = user.name;\r\n\t\t\t\temailInput.value = user.email;\r\n\t\t\t\tchildrenCheckbox.checked = user.children;\r\n\t\t\t\tform.dataset.user = id;\r\n\t\t\t});\r\n\t\t}\r\n\t})\r\n\r\n\tform.addEventListener('submit', (evt) => {\r\n\t\tevt.preventDefault();\r\n\r\n\t\tif (form.dataset.user) {\r\n\t\t\tconst id = form.dataset.user;\r\n\t\t\tconst user = {\r\n\t\t\t\tname: nameInput.value,\r\n\t\t\t\temail: emailInput.value,\r\n\t\t\t\tchildren: childrenCheckbox.checked,\r\n\t\t\t\tpermissions: false\r\n\t\t\t}\r\n\r\n\t\t\tuserService.editUser(id, user).then(() => {\r\n\t\t\t\tuserService.getUsers().then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users))\r\n\t\t\t\tform.reset();\r\n\t\t\t\tform.removeAttribute('data-user');\r\n\t\t\t});\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/edit-users.js?");

/***/ }),

/***/ "./src/modules/filter-users.js":
/*!*************************************!*\
  !*** ./src/modules/filter-users.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterUsersFunc: () => (/* binding */ filterUsersFunc)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst filterUsersFunc = () => {\r\n\tconst btnHaveChildren = document.querySelector('#btn-have-children');\r\n\tconst btnHavePermission = document.querySelector('#btn-have-permission');\r\n\tconst btnAll = document.querySelector('#btn-all');\r\n\r\n\tbtnHaveChildren.addEventListener('click', () => \r\n\t\tuserService.filterUsers('children')\r\n\t\t\t.then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users))\r\n\t)\r\n\r\n\tbtnHavePermission.addEventListener('click', () => {\r\n\t\tuserService.filterUsers('permissions')\r\n\t\t\t.then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users))\r\n\t})\r\n\r\n\tbtnAll.addEventListener('click', () => {\r\n\t\tuserService.getUsers()\r\n\t\t\t.then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users))\r\n\t})\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/filter-users.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (func, delay = 700) => {\r\n\tlet timer;\r\n\r\n\treturn (...args) => {\r\n\t\tclearTimeout(timer);\r\n\t\t\r\n\t\ttimer = setTimeout(() => { func.apply(undefined, args) }, delay);\r\n\t}\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/remove-users.js":
/*!*************************************!*\
  !*** ./src/modules/remove-users.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsersFunc: () => (/* binding */ removeUsersFunc)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst removeUsersFunc = () => {\r\n\tconst tbody = document.querySelector('#table-body');\r\n\r\n\ttbody.addEventListener('click', (evt) => {\r\n\t\tconst tgt = evt.target;\r\n\r\n\t\tif (tgt.closest('.btn-remove')) {\r\n\t\t\tconst tr = tgt.closest('tr');\r\n\t\t\tconst id = tr.dataset.key;\r\n\r\n\t\t\tuserService.removeUser(id).then(() => \r\n\t\t\t\tuserService.getUsers().then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users))\r\n\t\t\t);\r\n\t\t}\r\n\t})\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/remove-users.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderFunc: () => (/* binding */ renderFunc)\n/* harmony export */ });\nconst renderFunc = (users) => {\r\n\tconst tbody = document.querySelector('#table-body');\r\n\r\n\ttbody.innerHTML = '';\r\n\r\n\tusers.forEach((user, index) => {\r\n\t\ttbody.insertAdjacentHTML('beforeend', `\r\n\t\t\t<tr data-key=\"${user.id}\">\r\n\t\t\t\t<th scope=\"row\">${index + 1}</th>\r\n\t\t\t\t<td>${user.name}</td>\r\n\t\t\t\t<td>${user.email}</td>\r\n\t\t\t\t<td>${user.children ? 'Есть' : 'Нет'}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div class=\"form-check form-switch\">\r\n\t\t\t\t\t\t<input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" name=\"user-${index + 1}\" ${user.permissions ? 'checked' : ''}>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n\t\t\t\t\t\t\t<i class=\"bi-pencil-square\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n\t\t\t\t\t\t\t<i class=\"bi-person-x\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t`)\r\n\t});\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/search-users.js":
/*!*************************************!*\
  !*** ./src/modules/search-users.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchUsersFunc: () => (/* binding */ searchUsersFunc)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/modules/helpers.js\");\n\r\n\r\n\r\nconst searchUsersFunc = () => {\r\n\tconst searchInput = document.querySelector('#search-input');\r\n\r\n\tconst debounceSearch = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {\r\n\t\tuserService.getSearchUsers(searchInput.value)\r\n\t\t\t.then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users))\r\n\t}, 3000);\r\n\r\n\tsearchInput.addEventListener('input', debounceSearch);\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/search-users.js?");

/***/ }),

/***/ "./src/modules/sort-users.js":
/*!***********************************!*\
  !*** ./src/modules/sort-users.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sortUsersFunc: () => (/* binding */ sortUsersFunc)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst sortUsersFunc = () => {\r\n\tconst tableHeaders = document.querySelectorAll('thead th');\r\n\tconst headerName = tableHeaders[1];\r\n\tconst headerEmail = tableHeaders[2];\r\n\tconst headerHaveChildren = tableHeaders[3];\r\n\tconst headerHavePermissions = tableHeaders[4];\r\n\tlet isSort = false;\r\n\r\n\theaderHaveChildren.addEventListener('click', () => {\r\n\t\t// Для последней версии JSON-server\r\n\t\t// userService.getSortUsers(isSort ? 'children' : '-children')\r\n\t\t// \t.then(users => renderFunc(users));\r\n\t\t// Для версии JSON-server 0.17.3\r\n\t\ttableHeaders.forEach(th => {\r\n\t\t\tif (th.classList.contains('sort-asc')) {\r\n\t\t\t\tth.classList.remove('sort-asc');\r\n\t\t\t} else if (th.classList.contains('sort-desc')) {\r\n\t\t\t\tth.classList.remove('sort-desc');\r\n\t\t\t}\r\n\t\t});\r\n\t\tuserService.getSortUsers({\r\n\t\t\tname: 'children',\r\n\t\t\tvalue: isSort ? 'asc' : 'desc'\r\n\t\t}).then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users));\r\n\r\n\t\tif (isSort) {\r\n\t\t\theaderHaveChildren.classList.remove('sort-desc');\r\n\t\t\theaderHaveChildren.classList.add('sort-asc');\r\n\t\t} else {\r\n\t\t\theaderHaveChildren.classList.remove('sort-asc');\r\n\t\t\theaderHaveChildren.classList.add('sort-desc');\r\n\t\t}\r\n\r\n\t\tisSort = !isSort;\r\n\t})\r\n\theaderHavePermissions.addEventListener('click', () => {\r\n\t\ttableHeaders.forEach(th => {\r\n\t\t\tif (th.classList.contains('sort-asc')) {\r\n\t\t\t\tth.classList.remove('sort-asc');\r\n\t\t\t} else if (th.classList.contains('sort-desc')) {\r\n\t\t\t\tth.classList.remove('sort-desc');\r\n\t\t\t}\r\n\t\t});\r\n\t\tuserService.getSortUsers({\r\n\t\t\tname: 'permissions',\r\n\t\t\tvalue: isSort ? 'asc' : 'desc'\r\n\t\t}).then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users));\r\n\r\n\t\tif (isSort) {\r\n\t\t\theaderHavePermissions.classList.remove('sort-desc');\r\n\t\t\theaderHavePermissions.classList.add('sort-asc');\r\n\t\t} else {\r\n\t\t\theaderHavePermissions.classList.remove('sort-asc');\r\n\t\t\theaderHavePermissions.classList.add('sort-desc');\r\n\t\t}\r\n\r\n\t\tisSort = !isSort;\r\n\t})\r\n\theaderName.addEventListener('click', () => {\r\n\t\ttableHeaders.forEach(th => {\r\n\t\t\tif (th.classList.contains('sort-asc')) {\r\n\t\t\t\tth.classList.remove('sort-asc');\r\n\t\t\t} else if (th.classList.contains('sort-desc')) {\r\n\t\t\t\tth.classList.remove('sort-desc');\r\n\t\t\t}\r\n\t\t});\r\n\t\tuserService.getSortUsers({\r\n\t\t\tname: 'name',\r\n\t\t\tvalue: isSort ? 'asc' : 'desc'\r\n\t\t}).then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users));\r\n\r\n\t\tif (isSort) {\r\n\t\t\theaderName.classList.remove('sort-desc');\r\n\t\t\theaderName.classList.add('sort-asc');\r\n\t\t} else {\r\n\t\t\theaderName.classList.remove('sort-asc');\r\n\t\t\theaderName.classList.add('sort-desc');\r\n\t\t}\r\n\r\n\t\tisSort = !isSort;\r\n\t})\r\n\theaderEmail.addEventListener('click', () => {\r\n\t\ttableHeaders.forEach(th => {\r\n\t\t\tif (th.classList.contains('sort-asc')) {\r\n\t\t\t\tth.classList.remove('sort-asc');\r\n\t\t\t} else if (th.classList.contains('sort-desc')) {\r\n\t\t\t\tth.classList.remove('sort-desc');\r\n\t\t\t}\r\n\t\t});\r\n\t\tuserService.getSortUsers({\r\n\t\t\tname: 'email',\r\n\t\t\tvalue: isSort ? 'asc' : 'desc'\r\n\t\t}).then(users => (0,_render__WEBPACK_IMPORTED_MODULE_0__.renderFunc)(users));\r\n\r\n\t\tif (isSort) {\r\n\t\t\theaderEmail.classList.remove('sort-desc');\r\n\t\t\theaderEmail.classList.add('sort-asc');\r\n\t\t} else {\r\n\t\t\theaderEmail.classList.remove('sort-asc');\r\n\t\t\theaderEmail.classList.add('sort-desc');\r\n\t\t}\r\n\r\n\t\tisSort = !isSort;\r\n\t})\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/sort-users.js?");

/***/ }),

/***/ "./src/modules/user-service.js":
/*!*************************************!*\
  !*** ./src/modules/user-service.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n\tSERVER_URL = 'http://localhost:3333/users';\r\n\r\n\tgetData(url, method) {\r\n\t\treturn fetch(url, {\r\n\t\t\tmethod: method\r\n\t\t}).then(res => res.json());\r\n\t}\r\n\r\n\tsaveData(url, method, obj) {\r\n\t\treturn fetch(url, {\r\n\t\t\tmethod: method,\r\n\t\t\tbody: JSON.stringify(obj),\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-Type': 'application/json'\r\n\t\t\t}\r\n\t\t}).then(res => res.json());\r\n\t}\r\n\r\n\tgetUsers() {\r\n\t\treturn userService.getData(userService.SERVER_URL);\r\n\t}\r\n\r\n\taddUser(user) {\r\n\t\treturn userService.saveData(userService.SERVER_URL, 'POST', user);\r\n\t}\r\n\r\n\tremoveUser(id) {\r\n\t\treturn userService.getData(`${userService.SERVER_URL}/${id}`, 'DELETE');\r\n\t}\r\n\r\n\tchangeUser(id, data) {\r\n\t\treturn userService.saveData(`${userService.SERVER_URL}/${id}`, 'PATCH', data);\r\n\t}\r\n\r\n\tgetUser(id) {\r\n\t\treturn userService.getData(`${userService.SERVER_URL}/${id}`);\r\n\t}\r\n\r\n\teditUser(id, user) {\r\n\t\treturn userService.saveData(`${userService.SERVER_URL}/${id}`, 'PUT', user);\r\n\t}\r\n\r\n\tfilterUsers(filterOption) {\r\n\t\treturn userService.getData(`${userService.SERVER_URL}?${filterOption}=true`);\r\n\t}\r\n\r\n\t// Для версии JSON-server 0.17.3\r\n\tgetSortUsers(sortOption) {\r\n\t\treturn userService.getData(`${userService.SERVER_URL}?_sort=${sortOption.name}&_order=${sortOption.value}`);\r\n\t}\r\n\t// Для последней версии JSON-server\r\n\t/* \tgetSortUsers(sortOption) {\r\n\t\t\treturn userService.getData(`${userService.SERVER_URL}?_sort=${sortOption}`);\r\n\t\t} */\r\n\r\n\tgetSearchUsers(str) {\r\n\t\treturn userService.getData(`${userService.SERVER_URL}?name_like=${str}`);\r\n\t}\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/user-service.js?");

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