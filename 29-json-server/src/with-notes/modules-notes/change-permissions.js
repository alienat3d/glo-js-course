export const changePermissionsFunc = () => {
	// 9.3 Функция очень похожа на removeUsersFunc(), но здесь мы уже будем искать в условии 'input[type=checkbox]'
	const tbody = document.querySelector('#table-body');

	tbody.addEventListener('click', (evt) => {
		const tgt = evt.target;
		if (tgt.closest('input[type=checkbox]')) {
			const tr = tgt.closest('tr');

			const id = tr.dataset.key;
			// 9.4 Но помимо самого id нам нужно ещё получать значение инпута
			const input = tr.querySelector('input[type=checkbox]');
			
			// 9.4.3 Здесь, по аналогии с remove-users.js всё тоже самое, но в параметры к id добавляется объект со свойством permissions, которому присваиваем значение input.checked.
			// 9.5 Кстати, здесь, скорее всего можно обойтись и без доп. рендеринга, т.к. кликнутый чекбокс таким и останется.
			userService.changeUser(id, { permissions: input.checked });
		}
	})
	// todo 9.4.0 -> [user-service.js]
}