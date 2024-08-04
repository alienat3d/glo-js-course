import { renderFunc } from "./render";

// * 10.1.0 Итак, что нам нужно: перехватывать клик по жёлтой кнопке редактирования пользователя, заполнять нужному пользователю форму, и после корректирования данных снова сохранять эту форму под id этого пользователя в БД. А в класс "UserService" нам нужно добавить два новых запроса...
// todo 10.1.1 -> [./user-service.js]
export const editUsersFunc = () => {
	const tbody = document.querySelector('#table-body');
	// 10.4.0 Ну, а теперь на основании полученных данных о пользователе из БД нам нужно заполнить форму. И сделать мы это можем, получив все поля формы.
	const form = document.querySelector('form');
	const nameInput = form.querySelector('#form-name');
	const emailInput = form.querySelector('#form-email');
	const childrenCheckbox = form.querySelector('#form-children');

	tbody.addEventListener('click', (evt) => {
		const tgt = evt.target;

		// ? 10.2.1 В вёрстку для кнопки редактирования мы добавим класс btn-edit и уже по нему будем искать её.
		if (tgt.closest('.btn-edit')) {
			const tr = tgt.closest('tr');
			const id = tr.dataset.key;

			// 10.4.1 А дальше начинаем заполнять форму из полученного объекта.
			// 10.5.0 Но теперь, если просто нажать кнопку "Сохранить", то мы просто сохраним ещё одного пользователя с теми же данными, что и тот, которого мы выбрали для редактирования, поэтому добавим в форму специальный "флажок", означающий редактирование существующего пользователя. Для этого добавим data-атрибут "method", который будет в значении "edit".
			userService.getUser(id).then(user => {
				nameInput.value = user.name;
				emailInput.value = user.email;
				childrenCheckbox.checked = user.children;

				// 10.5.1 Также, нам необходимо проверять этот флажок в модуле "add-users". [->]
				// 10.6 Теперь нам нужно изменённые данные отправить дальше на сохранение, для этого нам нужно передавать id. И раз уж мы создаём data-атрибут, то можно помещать в него id значением, а сам он будет называться "user".
				form.dataset.user = id;
			});
		}
	})

	form.addEventListener('submit', (evt) => {
		evt.preventDefault();

		if (form.dataset.user) {
			const id = form.dataset.user; // занесём id в переменную для лучшей читабельности
			const user = {
				name: nameInput.value,
				email: emailInput.value,
				children: childrenCheckbox.checked,
				permissions: false
			}

			// [->] 10.6.2 Первым аргументом мы отдаём id, а уже затем объект пользователя.
			userService.editUser(id, user).then(() => {
				userService.getUsers().then(users => renderFunc(users))
				form.reset(); // чтобы очищать форму, после исправления данных пользователя
				form.removeAttribute('data-user');
			});
		}
	})
}