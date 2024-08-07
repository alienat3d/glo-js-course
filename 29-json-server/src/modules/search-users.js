import { renderFunc } from "./render";
import { debounce } from "./helpers";

export const searchUsersFunc = () => {
	const searchInput = document.querySelector('#search-input');

	const debounceSearch = debounce(() => {
		userService.getSearchUsers(searchInput.value)
			.then(users => renderFunc(users))
	}, 300);

	searchInput.addEventListener('input', debounceSearch);
}