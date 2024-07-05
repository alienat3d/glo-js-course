// Взято из https://doka.guide/js/debounce/
// ? Пример применения debounce на поиске
'use strict';

const searchForm = document.getElementById('search-form')
const searchInput = searchForm.querySelector('[type="search"]')
const searchResults = document.querySelector('.search-results')

// По этому массиву мы будем искать названия,
// которые содержат пользовательский запрос
const pizzaList = [
	'Маргарита',
	'Пепперони',
	'Гавайская',
	'4 Сыра',
	'Диабло',
	'Сицилийская'
]

// А дальше создадим объект, который будет имитировать асинхронный ответ
function contains(query) {
	return pizzaList.filter((title) =>
		title.toLowerCase().includes(query.toLowerCase())
	)
}
// В функции contains() будем проверять, содержится ли пользовательский запрос в каком-либо из названий Мок-объект сервера будет содержать метод .search(), который возвращает промис. Таким образом, мы будем эмулировать «асинхронность», как будто мы «сходили на сервер, он подумал и ответил». Таймаут нужен исключительно для того, чтобы иметь возможность настраивать время задержки. В виде ответа отправим объект с отфильтрованным массивом в качестве значения поля list.
const server = {
	search(query) {
		return new Promise((resolve) => {
			setTimeout(
				() =>
					resolve({
						list: query ? contains(query) : [],
					}),
				150
			)
		})
	},
}
// Вызываем этот метод
/* (async () => {
	const response = await server.search('Peppe')
})() */
// Или так
server.search('Peppe').then(() => {
	/* … */
})
// Затем напишем обработчик события ввода с клавиатуры в поле поиска:
/* searchInput.addEventListener('input', (e) => {
	// Получаем значение в поле,
	// на котором сработало событие
	const { value } = e.target

	// Получаем список названий пицц от сервера
	server.search(value).then(function (response) {
		const { list } = response

		// Проходим по каждому элементу списка
		// и составляем строчку с несколькими элементами <li>…
		const html = list.reduce((markup, item) => {
			return `${markup}<li>${item}</li>`
		}, ``)

		// …которую потом используем как содержимое списка
		searchResults.innerHTML = html
	})
}) */
// Сперва немного порефакторим. Вынесем обработчик события в отдельную функцию. Внутри она будет такой же, но так нам удобнее оборачивать её в debounce().
function handleInput(e) {
	const { value } = e.target

	server.search(value).then(function (response) {
		const { list } = response

		const html = list.reduce((markup, item) => {
			return `${markup}<li>${item}</li>`
		}, ``)

		searchResults.innerHTML = html
	})
}

// ? debounce() — это функция высшего порядка, принимающая аргументом функцию, которую надо «отложить».
// Аргументами будут функция, которую надо «откладывать», и интервал времени, спустя который следует вызывать функцию. Как результат возвращаем другую функцию. Это нужно, чтобы мы могли не менять другие части кода. Чуть позже увидим, как это помогает. В переменной previousCall мы храним временную метку предыдущего вызова, а в переменной текущего вызова — временную метку нынешнего момента. Это нужно, чтобы потом сравнить, когда функция была вызвана в этот раз и в предыдущий. Если разница между вызовами меньше, чем указанный интервал, то мы очищаем таймаут, который отвечает за непосредственно вызов функции-аргумента. Обратите внимание, что мы передаём все аргументы ...args, которые получаем в функции perform(). Это тоже нужно, чтобы не приходилось менять другие части кода. Если таймаут был очищен, вызова не произойдёт. Если он не был очищен, то вызовется callee. Таким образом, мы как бы «отодвигаем» вызов callee до тех пор, пока «снаружи всё не подуспокоится».
function debounce(callee, timeoutMs) {
	return function perform(...args) {
		let previousCall = this.lastCall

		this.lastCall = Date.now()

		if (previousCall && this.lastCall - previousCall <= timeoutMs) {
			clearTimeout(this.lastCallTimer)
		}

		this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
	}
}
// Теперь обернём вынесенную функцию и обновим addEventListener. Укажем, что нам нужно ждать 250 мс, прежде чем запустить обработчик. Дальше передаём новую debounced-функцию в addEventListener.
const debouncedHandle = debounce(handleInput, 250)

searchInput.addEventListener('input', debouncedHandle)

/* Используйте debounce(), чтобы оптимизировать операции, которые можно выполнить единожды в конце.

Например, для формы поиска это подойдёт. Однако для отслеживания движения мыши — нет, потому что будет странно ждать, пока пользователь остановит курсор.

Для таких задач, которые можно выполнять раз в какое-то количество времени, лучше подходит throttle. */