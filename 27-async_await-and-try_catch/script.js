'use strict';

// * === Async/Await, Try/Catch === * \\

// * 1.0 Для начала создадим функцию getData(), которая будет получать данные из локальной базы данных db.json и возвращать его в цепочку then().
// 1.1 Теперь представим, что нам нужно получить данные конкретного пользователя, например, через его id. Тогда порядок действий таков: 1) мы запрашиваем всех пользователей; 2) получаем данные конкретного пользователя и на основании этого делаем второй запрос;
// 1.2 В папке "db" у нас уже подготовлено два файла "0.json" & "1.json", которые соответствуют "id: 0" & "id: 1".
/* const getData = () => {
	return fetch('./db/db.json').then(res => res.json())
} */

// 1.3 Итак, получим id первого пользователя, обращаясь к индексу первого пользователя "0" и его свойству "id", а потом подставим его в параметр адреса в fetch(), чтобы получить данные этого пользователя и выведем их в консоль через then().
/* getData().then(users => {
	const userId = users[1].id;
	
	fetch(`./db/${userId}.json`)
		.then(res => res.json())
		.then(data => {
			console.log(data);
		});
}) */

// * == Async/Await == * \\

// * 2.0 Но что, если в будущем понадобится делать ещё доп. запросы, которые зависят друг от друга? Неужели в каждом запросе цепочки then нужно будет делать по доп. запросу fetch()? Есть более элегантный способ при помощи async\await.
// ? 2.1 Чтобы сделать нашу функцию асинхронной добавим перед "()" ключевое слово "async". Теперь ответ от этой функции мы получим в виде промиса. Ну, а промис мы сможем обработать привычным образом через then().
/* const getData = async () => {
	return 'JS';
}
getData().then(data => console.log(data)); */

// * 2.2 Но у "async" есть также пара "await", которое используется вместе с ним, рассмотрим их работу на след. примере. Для этого внутри тела функции "getData()" объявим переменную "response", в которой будет лежать результат выполнения метода fetch(), а обращаться он будет к нашей мини базе данных "db.json".
// 2.3 И теперь, если мы просто без "await" выведем "responseUsers" в консоль, то увидим не данные, а сам промис. Именно для этого нам и нужно указать "await" перед fetch(), чтобы он дождался получения данных и записи их в "responseUsers", а уже потом вызывал "responseUsers" в консоль.
// 2.4 Также создадим ещё одну переменную "users", в которую будем класть переведённый из JSON JS-массив объектов с пользователями и также укажем "await", чтобы скрипт дожидался окончания конвертации данных и только тогда переходил к выдаче содержимого "users" в консоль.
/* const getData = async (id) => {
	const responseUsers = await fetch('./db/db.json');
	const users = await responseUsers.json();
	const responseUser = await fetch(`./db/${users[id].id}.json`);
	return await responseUser.json();
} */

// 2.5 А ещё мы можем добавить параметр id, который будет передаваться в getData и находится нужный нам пользователь по его id.
// 2.6 Но нам также ещё следует обрабатывать возможные ошибки, например, когда запрашивается несуществующий id
/* getData(3)
	.then(data => console.log(data))
	.catch(error => {
		if (error.message.match(/'id'/g)) {
			console.error('The user with this id was not found')
		} else {
			console.error(error.message)
		}
	}); */

// * == try...catch == * \\

// ? Можно применять на любом коде, который потенциально может вызвать ошибки и нам хочется обезопасить остальной код от того, чтобы он рухнул.

// * 3.0 Но есть также альтернативный способ отлавливать ошибки при помощи конструкции "try...catch". Рассмотрим на том же примере, чуточку его переписав:
// 3.1 Блок "try" выполняется при успешном выполнении, а "catch" сработает, если при выполнении блока "try" появится какая-то ошибка.
// 3.2 Когда происходит какая-то ошибка в блоке кода "try", то кода тут же перестаёт работать на этом месте и переходит в блок "catch", где throw new Error() выкинет ошибку или кастомную ошибку, а затем перейдёт в блок "catch()", но уже вызова функции getData().
// * 3.3 Помимо этого внутри блока "try" мы можем провоцировать ошибки. Сделаем проверку, представим, что id привязан к очерёдности пользователей в массиве и сравним длину массива users с переданным id, и проверим, может ли на этом месте существовать пользователь.
const getData = async (id) => {
	try {
		const responseUsers = await fetch('./db/db.json');
		const users = await responseUsers.json();

		if (users.length < id + 1) {
			throw new Error('The "users" array is shorter than the requested id');
		}

		const responseUser = await fetch(`./db/${users[id].id}.json`);
		return await responseUser.json();
	} catch (error) {
		if (error.message.match(/'id'/g)) {
			// throw new Error('The user with this id was not found');
			throw new Error(error);
		} else {
			throw new Error(error.message);
		}
	}
}

getData(2)
	.then(data => console.log(data))
	.catch(error => console.log(error.message))

// * 4.0 Потестим "try...catch" на другом примере:
// 4.1 Получим логотип с нашей тестовой странички
// 4.2 А дальше представим, что её кто-то случайно удалил с сервера и мы получаем ошибку, ведь нельзя вешать слушатель на элемент, которого нет. В таком случае нам также пригодится "try...catch"
const jsLogo = document.querySelector('.lgo');

try {
	jsLogo.addEventListener('click', () => 
		alert('JavaScript is powerful, right?'));
} catch (error) {
	console.error(error);
}

// 4.3 Таким образом мы получили ошибку, но код продолжил работать дальше.
console.log('some code');

// todo Практика в: [./3d-modeling/lesson27/homework]

/* ||---------------------------------------------->> 
* Links:
* [][https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/JSON] JSON
* [][https://habr.com/ru/post/14246/] AJAX
* [][https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8_HTTP] Заголовки HTTP
* [][https://developer.mozilla.org/ru/docs/Web/API/FormData/Using_FormData_Objects] FormData
*/ 