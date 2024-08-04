import { renderFunc } from "./render";

// * 12.0 Задача этого модуля в том, чтобы сортировать список уже отрендереных на странице пользователей, кликнув по заголовку в таблице
export const sortUsersFunc = () => {
	const tableHeaders = document.querySelectorAll('thead th');
	// 12.1 И для начала получим заголовок, столбец которого мы хотим сортировать
	const headerHaveChildren = tableHeaders[3];
	// 12.2 А также нам понадобится изменяемая переменная со значением по умолчанию — false. Она нужна для того, чтобы по клику сортировка менялась с на увеличения на уменьшение. 
	let isSort = false;

	// 12.3 По клику значение isSort будет менять своё значение на противоположное
	// todo 12.4.0 перейдём в [user-service.js]
	headerHaveChildren.addEventListener('click', () => {
		// * [->] 12.4.3 Вызовем новый метод сортировки и передадим в него объект, где name у нас будет "children", а value: тернарник, который будет передавать либо 'asc', либо 'desc' в нашу сортировку. Своего рода переключатель.
		// 12.5 Осталось лишь отрисовать наших пользователей функцией renderFunc()
		userService.getSortUsers(isSort ? 'children' : '-children')
			.then(users => renderFunc(users));

		if (isSort) {
			headerHaveChildren.classList.remove('sort-up');
			headerHaveChildren.classList.add('sort-down');
		} else {
			headerHaveChildren.classList.remove('sort-down');
			headerHaveChildren.classList.add('sort-up');
		}

		isSort = !isSort;
	})
}