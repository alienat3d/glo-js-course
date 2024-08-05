export class UserService {
	SERVER_URL = 'http://localhost:3333/users';

	getData(url, method) {
		return fetch(url, {
			method: method
		})
			.then(res => {
				if (res.status === 200) {
					return res.json();
				} else {
					throw new Error("Произошла ошибка, данных нет!");
				}
			})
			.catch(error => {
				console.error(error.message);
			});
	}
	saveData(url, method, obj) {
		return fetch(url, {
			method: method,
			body: JSON.stringify(obj),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			if (res.status === 201) {
				return res.json();
			} else {
				throw new Error("Произошла ошибка, данные не были сохранены!");
			}
		}).catch(error => {
			console.error(error.message);
		});
	}

	getUsers() {
		return userService.getData(userService.SERVER_URL);
	}

	addUser(user) {
		return userService.saveData(userService.SERVER_URL, 'POST', user);
	}

	removeUser(id) {
		return userService.getData(`${userService.SERVER_URL}/${id}`, 'DELETE');
	}

	changeUser(id, data) {
		return userService.saveData(`${userService.SERVER_URL}/${id}`, 'PATCH', data);
	}

	getUser(id) {
		return userService.getData(`${userService.SERVER_URL}/${id}`);
	}

	editUser(id, user) {
		return userService.saveData(`${userService.SERVER_URL}/${id}`, 'PUT', user);
	}

	filterUsers(filterOption) {
		return userService.getData(`${userService.SERVER_URL}?${filterOption}=true`);
	}

	// Для версии JSON-server 0.17.3
	getSortUsers(sortOption) {
		return userService.getData(`${userService.SERVER_URL}?_sort=${sortOption.name}&_order=${sortOption.value}`);
	}
	// Для последней версии JSON-server
	/* 	getSortUsers(sortOption) {
			return userService.getData(`${userService.SERVER_URL}?_sort=${sortOption}`);
		} */

	getSearchUsers(str) {
		return userService.getData(`${userService.SERVER_URL}?name_like=${str}`);
	}
}