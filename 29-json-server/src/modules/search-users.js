import { renderFunc } from "./render";
import { debounce } from "./helpers";

export const searchUsersFunc = () => {
	const searchInput = document.querySelector('#search-input');

	const debounceSearch = debounce(() => {
		userService.getSearchUsers(searchInput.value)
			.then(users => renderFunc(users))
	}, 3000);

	searchInput.addEventListener('input', debounceSearch);
}