import { renderFunc } from "./render";

export const addUsersFunc = () => {
	const form = document.querySelector('form');
	const nameInput = form.querySelector('#form-name');
	const emailInput = form.querySelector('#form-email');
	const childrenCheckbox = form.querySelector('#form-children');

	form.addEventListener('submit', (evt) => {
		evt.preventDefault();

		if (!form.dataset.user) {
			const user = {
				name: nameInput.value,
				email: emailInput.value,
				children: childrenCheckbox.checked,
				permissions: false
			}
			userService.addUser(user).then(() => {
				userService.getUsers().then(users => renderFunc(users));
				form.reset();
			});
		}
	})
}