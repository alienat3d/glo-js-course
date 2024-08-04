import { renderFunc } from "./render";

export const sortUsersFunc = () => {
	const tableHeaders = document.querySelectorAll('thead th');
	const headerName = tableHeaders[1];
	const headerEmail = tableHeaders[2];
	const headerHaveChildren = tableHeaders[3];
	const headerHavePermissions = tableHeaders[4];
	let isSort = false;

	headerHaveChildren.addEventListener('click', () => {
		// Для последней версии JSON-server
		// userService.getSortUsers(isSort ? 'children' : '-children')
		// 	.then(users => renderFunc(users));
		// Для версии JSON-server 0.17.3
		tableHeaders.forEach(th => {
			if (th.classList.contains('sort-asc')) {
				th.classList.remove('sort-asc');
			} else if (th.classList.contains('sort-desc')) {
				th.classList.remove('sort-desc');
			}
		});
		userService.getSortUsers({
			name: 'children',
			value: isSort ? 'asc' : 'desc'
		}).then(users => renderFunc(users));

		if (isSort) {
			headerHaveChildren.classList.remove('sort-desc');
			headerHaveChildren.classList.add('sort-asc');
		} else {
			headerHaveChildren.classList.remove('sort-asc');
			headerHaveChildren.classList.add('sort-desc');
		}

		isSort = !isSort;
	})
	headerHavePermissions.addEventListener('click', () => {
		tableHeaders.forEach(th => {
			if (th.classList.contains('sort-asc')) {
				th.classList.remove('sort-asc');
			} else if (th.classList.contains('sort-desc')) {
				th.classList.remove('sort-desc');
			}
		});
		userService.getSortUsers({
			name: 'permissions',
			value: isSort ? 'asc' : 'desc'
		}).then(users => renderFunc(users));

		if (isSort) {
			headerHavePermissions.classList.remove('sort-desc');
			headerHavePermissions.classList.add('sort-asc');
		} else {
			headerHavePermissions.classList.remove('sort-asc');
			headerHavePermissions.classList.add('sort-desc');
		}

		isSort = !isSort;
	})
	headerName.addEventListener('click', () => {
		tableHeaders.forEach(th => {
			if (th.classList.contains('sort-asc')) {
				th.classList.remove('sort-asc');
			} else if (th.classList.contains('sort-desc')) {
				th.classList.remove('sort-desc');
			}
		});
		userService.getSortUsers({
			name: 'name',
			value: isSort ? 'asc' : 'desc'
		}).then(users => renderFunc(users));

		if (isSort) {
			headerName.classList.remove('sort-desc');
			headerName.classList.add('sort-asc');
		} else {
			headerName.classList.remove('sort-asc');
			headerName.classList.add('sort-desc');
		}

		isSort = !isSort;
	})
	headerEmail.addEventListener('click', () => {
		tableHeaders.forEach(th => {
			if (th.classList.contains('sort-asc')) {
				th.classList.remove('sort-asc');
			} else if (th.classList.contains('sort-desc')) {
				th.classList.remove('sort-desc');
			}
		});
		userService.getSortUsers({
			name: 'email',
			value: isSort ? 'asc' : 'desc'
		}).then(users => renderFunc(users));

		if (isSort) {
			headerEmail.classList.remove('sort-desc');
			headerEmail.classList.add('sort-asc');
		} else {
			headerEmail.classList.remove('sort-asc');
			headerEmail.classList.add('sort-desc');
		}

		isSort = !isSort;
	})
}