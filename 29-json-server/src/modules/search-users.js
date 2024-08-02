import { renderFunc } from "./render";
import { debounce } from "./helpers";

// * 13.0 Задача этого модуля: поиск пользователей по части строки
export const searchUsersFunc = () => {
	// 13.1 Получим саму строку ввода поиска
	const searchInput = document.querySelector('#search-input');

	// 14.2 Теперь мы создадим новую функцию debounceSearch, внутри которой будет производится запрос. И ещё мы обернём эту функцию в функцию-обёртку debounce из модуля "helpers"
	const debounceSearch = debounce(() => {
		userService.getSearchUsers(searchInput.value)
			.then(users => renderFunc(users))
	}, 3000);

	// 13.2 И повесим обработчик события "input". Здесь можно получать значения и с evt.target и c input.value, но последний подойдёт нам здесь лучше.
	// 13.3 Теперь при каждом вводе нужно отправлять запрос в базу данных с параметром search. И здесь у нас есть два варианта: искать по полному совпадению и по неполному
	// * 14.0 Однако такой поиск нас не совсем устраивает и лучше пропускать его через debounce, который создадим в модуле утилит [helpers.js]
	// * 14.1 Теперь при каждом вводе будет вызываться функция debounce()
	/* searchInput.addEventListener('input', () => 
		userService.getSearchUsers(searchInput.value)
			.then(users => renderFunc(users))
	) */

	// 14.3 А уже по событию 'input' мы вызовем нашу новую функцию debounceSearch()
	// ? 14.4 И теперь, когда будет вызвана функция debounceSearch, будет вызываться функция debounce(), которая принимает коллбэк, который будет обрабатываться внутри этой функции.
	searchInput.addEventListener('input', debounceSearch);
}