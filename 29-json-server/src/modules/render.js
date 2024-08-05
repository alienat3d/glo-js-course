export const renderFunc = (users) => {
	const tbody = document.querySelector('#table-body');

	tbody.innerHTML = '';

	const errorMessage =  () => {
		const errorMessage = document.createElement('p');
		errorMessage.classList.add('error-message');
		errorMessage.textContent = 'Произошла ошибка, данных нет! ¯\\_(ツ)_/¯';
		document.querySelector('.table').insertAdjacentElement('afterend', errorMessage);
	}

	if (!users) return errorMessage();

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
}