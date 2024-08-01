import { renderFunc } from "./render";

// * 11.0 Задача этого модуля, как следует из названия, занимается фильтрацией. У нас есть три голубых кнопки: "С детьми", "С доступом" и "Все". Первая будет убирать с экрана всех пользователе, у которых нет детей, вторая тех, у кого нет доступа, а кликнув по кнопке "Все" мы снова увидим всех пользователей из базы данных.
// ? 11.3.0 В документации мы можем подсмотреть фильтрацию при помощи JSON-Server: [https://jsonplaceholder.typicode.com/guide/]
// ? 11.3.1 Для этого нам нужно в конце запроса написать "?" после чего идёт название свойства, затем "=" и его значение.
// ? 11.3.2 Мы также можем фильтровать по нескольким свойствам, для этого в конце первого нужно поставить & и продолжать, как описано выше.
// ? 11.3.3 Кстати, фильтрация на настоящем сервере производится зачастую точно также или очень похожим способом. Однако, бэкэндер обычно сообщит в документации, как именно она должна производиться.
// todo 11.4.0 А теперь перейдём в [user-service.js]
export const filterUsersFunc = () => {
	// 11.1 Для начала мы получим эти три кнопки фильтрации
	const btnHaveChildren = document.querySelector('#btn-have-children');
	const btnHavePermission = document.querySelector('#btn-have-permission');
	const btnAll = document.querySelector('#btn-all');

	// 11.2 Повесим слушатели на каждую из кнопок
	// * [->] 11.4.3 Обратимся к userService и его методу filterUsers(), добавим ему цепочку then(), а аргументом для фильтра у нас будет строка "children".
	// 11.4.4 Затем мы будем вызывать функцию renderFunc(), куда будем помещать users, чтобы рендерить только отфильтрованных пользователей
	btnHaveChildren.addEventListener('click', () => 
		userService.filterUsers('children')
			.then(users => renderFunc(users))
	)

	btnHavePermission.addEventListener('click', () => {
		userService.filterUsers('permissions')
			.then(users => renderFunc(users))
	})

	btnAll.addEventListener('click', () => {
		userService.getUsers()
			.then(users => renderFunc(users))
	})
}