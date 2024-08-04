// export const render = (service) => {
// 5.1 Это и будет нашим модулем, который будет рендерить пользователей в нашем приложении. Его главная функция будет принимать массив "users", а дальше внутри тела функции перебирать массив с пользователями. Ну, а в index.js нам нужно будет передать в этот модуль "userService.users" для доступа к массиву с пользователями.
// 5.2 Далее мы получим таблицу и будем заполнять информацию каждого из пользователей в виде строки. 
export const renderFunc = (users) => {
	const tbody = document.querySelector('#table-body');
	
	tbody.innerHTML = '';

	users.forEach((user, index) => {
		tbody.insertAdjacentHTML('beforeend', `
			<tr data-key="${user.id}">
				<th scope="row">${index + 1}</th>
				<td>${user.name}</td>
				<td>${user.email}</td>
				<td>${user.children ? 'Есть' : 'Нет'}</td>
				<td>
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" role="switch" name="user-${index + 1}" ${user.permissions ? 'checked' : ''}>
					</div>
				</td>
				<td>
					<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
						<button type="button" class="btn btn-warning btn-edit">
							<i class="bi-pencil-square"></i>
						</button>
						<button type="button" class="btn btn-danger btn-remove">
							<i class="bi-person-x"></i>
						</button>
					</div>
				</td>
			</tr>
		`)
	});



	// 3.2 Так мы, например, записали в наш пустой массив новый объект, содержащий свойство id со значением 0 при помощи сеттера.
/* 	service.users = [{
		id: 0
	}]
	service.logger(); */
	// 4.1 Теперь мы можем просто обращаться к сервису в любом модуле просто по его имени, т.к. это метод объекта window и "window." в JS писать не обязательно. Поэтому мы можем работать методами, геттерами и сеттерами напрямую.
	// userService.logger();
}