import { renderFunc } from "./render";

export const editUsersFunc = () => {
	const tbody = document.querySelector('#table-body');
	const form = document.querySelector('form');
	const nameInput = form.querySelector('#form-name');
	const emailInput = form.querySelector('#form-email');
	const childrenCheckbox = form.querySelector('#form-children');

	tbody.addEventListener('click', (evt) => {
		const tgt = evt.target;

		if (tgt.closest('.btn-edit')) {
			const tr = tgt.closest('tr');
			const id = tr.dataset.key;

			userService.getUser(id).then(user => {
				nameInput.value = user.name;
				emailInput.value = user.email;
				childrenCheckbox.checked = user.children;
				form.dataset.user = id;
			});
		}
	})

	form.addEventListener('submit', (evt) => {
		evt.preventDefault();

		if (form.dataset.user) {
			const id = form.dataset.user;
			const user = {
				name: nameInput.value,
				email: emailInput.value,
				children: childrenCheckbox.checked,
				permissions: false
			}

			userService.editUser(id, user).then(() => {
				userService.getUsers().then(users => renderFunc(users))
				form.reset();
				form.removeAttribute('data-user');
			});
		}
	})
}