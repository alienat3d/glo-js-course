import { renderFunc } from "./render";

export const filterUsersFunc = () => {
	const btnHaveChildren = document.querySelector('#btn-have-children');
	const btnHavePermission = document.querySelector('#btn-have-permission');
	const btnAll = document.querySelector('#btn-all');

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