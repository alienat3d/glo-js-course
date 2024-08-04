export const changePermissionsFunc = () => {
	const tbody = document.querySelector('#table-body');

	tbody.addEventListener('click', (evt) => {
		const tgt = evt.target;
		if (tgt.closest('input[type=checkbox]')) {
			const tr = tgt.closest('tr');

			const id = tr.dataset.key;
			const input = tr.querySelector('input[type=checkbox]');
			
			userService.changeUser(id, { permissions: input.checked });
		}
	})
}