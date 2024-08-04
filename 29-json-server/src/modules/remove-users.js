import { renderFunc } from "./render";

export const removeUsersFunc = () => {
	const tbody = document.querySelector('#table-body');

	tbody.addEventListener('click', (evt) => {
		const tgt = evt.target;

		if (tgt.closest('.btn-remove')) {
			const tr = tgt.closest('tr');
			const id = tr.dataset.key;

			userService.removeUser(id).then(() => 
				userService.getUsers().then(users => renderFunc(users))
			);
		}
	})
}