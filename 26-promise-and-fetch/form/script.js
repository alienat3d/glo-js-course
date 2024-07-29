'use strict';

// todo [начало в ../script.js]

// * == Тестируем fetch() на примере простой формы == * \\

const link = 'https://jsonplaceholder.typicode.com/posts';

const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

// * Правильно будет вынести логику отправки данных в отдельную функцию или даже модуль
// ? Если мы используем FormData, то также и здесь нам нужно изменить 'Content-type' на 'multipart/form-data'
// Ну и мы можем ещё чуточку улучшить, мы будем получать в sendData вместо обычных параметров — объект данных. Т.о. мы можем устанавливать значения по умолчанию.
const sendData = ({ url, data = {}, method = 'GET' }) => {
	// Создадим запрос на сервер при помощи fetch()
	return fetch(url, {
		method: method,
		body: data,
		headers: {
			// 'Content-type': 'application/json; charset=UTF-8',
			'Content-type': 'multipart/form-data',
		},
	})
		.then(response => response.json())
}

form.addEventListener('submit', (evt) => {
	evt.preventDefault();

	// Создаём объект с данными пользователя, которые будем отправлять на сервер
	/* 	const user = {
			login: username.value,
			password: password.value,
		} */
	// ? Есть альтернативный способ собирать данные для отсылки на сервер это конструктор new FormData(). 
	// ? В этот конструктор мы передадим форму
	const data = new FormData(form);

	/* sendData(link, JSON.stringify(user))
		.then(data => console.log(data))
		.catch(error => console.error(error)); */
	sendData({
		url: link, 
		data: data,
		method: 'POST'
	})
		.then(data => console.log(data))
		.catch(error => console.error(error));
})