import { renderFunc } from "./render";

// * 7.0 При помощи другого метода "POST" мы будем сохранять нового пользователя.
export const addUsersFunc = () => {
	// 7.1 Но сперва получим саму форму, у нас она одна, т.ч. можно получить её и по тегу.
	const form = document.querySelector('form');
	const nameInput = form.querySelector('#form-name');
	const emailInput = form.querySelector('#form-email');
	const childrenCheckbox = form.querySelector('#form-children');

	form.addEventListener('submit', (evt) => {
		evt.preventDefault();

		// [->] 10.5.2 Нам следует запретить сохранение методом "POST", если дата-атрибут "method" будет равен "edit".
		if (!form.dataset.user) {

			// 7.2 Создадим новый объект пользователя, id мы можем игнорировать. И по умолчанию permissions будет false. И соответственно подставим в объект нужные нам строки.
			const user = {
				name: nameInput.value,
				email: emailInput.value,
				children: childrenCheckbox.checked,
				permissions: false
			}
			// todo 7.3.0 Теперь нам нужен в сервисах ещё один метод, который будет добавлять нового пользователя, для этого перейдём в: [user-service.js]
			// 7.3.3 Теперь мы просто вызовем этот метод из сервисов и передадим туда наш объект
			// 7.4.2 Чтобы новый пользователь рендерился сразу после добавления его в базу данных.
			// ? 7.4.3 Теперь мы сперва сохраним нового пользователя, получим ответ от сервера, после чего мы в следующем then() получаем всех пользователей и отправляем в функцию render()
			userService.addUser(user).then(() => {
				userService.getUsers().then(users => renderFunc(users));
				form.reset(); // чтобы очищать форму, после добавления нового пользователя
			});
		}
	})
}