import { renderFunc } from "./render";

export const removeUsersFunc = () => {
	const tbody = document.querySelector('#table-body');

	// 8.1 Будем проверять по классу, используя метод contains(), находя кнопки удаления пользователей. И тогда мы создадим переменную, куда будем получать всю строчку таблицы, по которой кликнули.
	// 8.2.0 Теперь мы можем что-то получить с родительского кнопки удаления тега <tr>. И брать мы будем дата-атрибут "key", который будет различать все строчки. Мы добавим data-атрибут каждому <tr> в render(), т.о. он будет соответствовать id в объекте базы данных с данными для каждого пользователя.
	tbody.addEventListener('click', (evt) => {
		const tgt = evt.target;

		if (tgt.closest('.btn-remove')) {
			const tr = tgt.closest('tr');

			// 8.2.1 Мы будем помещать каждый такой ключ-идентификатор в переменную id.
			const id = tr.dataset.key;

			// todo 8.3.0 Теперь нам только осталось в сервисах добавить метод removeUser(), переходим в [user-service.js]
			// 8.4 Теперь, когда мы создали новый метод, вызовем его и передадим идентификатор в него. И мы также будем перерисовывать функцией renderFunc() таблицу после каждого удаления.
			userService.removeUser(id).then(() => {
				userService.getUsers().then(users => renderFunc(users))
			});
		}
	})
}