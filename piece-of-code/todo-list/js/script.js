'use strict';

// * === Список дел (ToDo List) === * \\

// * 1.0 Сперва, как всегда получим необходимые в работе элементы
const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

// 1.3.1 [...] У каждого такого объекта будет два свойства: текст и булево значение (выполнено задание или ещё нет)
const toDoData = [
	/* 	{
			text: 'Сделать урок по JavaScript',
			completed: false
		},
		{
			text: 'Сварить обед',
			completed: true
		} */
]

// 1.3.0 Создадим функцию render(), которая будет отображать все наши задачи списка дел. Отображать она будет перебором определённого массива. Значит нам также нужно создать массив, где каждая задача будет храниться в виде объекта. [...] ↑
// 1.5.0 Сама же функция render() будет выводить на экран содержимое массива toDoData. Перебирать мы будем методом forEach().
// 1.5.1 В каждую итерацию в коллбэк-функцию мы поместим объект списка дел.
// 1.5.2 Далее мы интегрируем вёрстку внутрь этого перебора, для этого быстренько взглянем из чем состоит каждая строчка списка дел.
// 1.5.3 Итак, нам нужно создать родительский элемент <li>, назначить ему такой же класс "todo-item" и затем наполнить его содержимым объекта задачи из списка дел. А затем добавить на страницу.
// 1.5.4 Сделаем также проверку на то, сделана ли задача или нет и если у объекта задачи стоит completed: true, то мы будем помещать её в лист выполненных задач.
const render = function () {
	// 1.5.6 Чтобы вёрстка не множилась нужно обязательно обнулять списки перед новым рендером.
	todoList.innerHTML = '';
	todoCompleted.innerHTML = '';

	toDoData.forEach(function (item) {
		const li = document.createElement('li');
		li.classList.add('todo-item');
		li.innerHTML = '<span class="text-todo">' +
			item.text +
			'</span><div class="todo-buttons">' +
			'<button class="todo-remove">' +
			'</button><button class="todo-complete">' +
			'</button></div>';
		if (item.completed) {
			todoCompleted.append(li);
		} else {
			todoList.append(li);
		}

		// 1.6.0 Обработаем клик по кнопке с "✓" для возможности отметки задания выполненным. Для этого найдём класс кнопки "todo-complete" и повесим на него обработчик события клик. И в коллбэк-функции мы поменяем этому объекту свойство "completed' на противоположное, сделав из неё переключатель готовности задачи.
		li.querySelector('.todo-complete').addEventListener('click', function () {
			item.completed = !item.completed;
			// 1.6.1 После чего мы снова запустим render();
			render();
		});
	});
}

// 1.1 Теперь повесим обработчик события на форму
// 1.2 И отменим привычное поведение события "submit", чтобы страница не перезагружалась
// 1.4.0 Что же нужно выполнять при событии "submit"? Т.к. функция "render()" будет перебирать массив toDoData, то при событии "submit" нам надо добавлять новый объект в массив toDoData. Текстом этого объекта станет значение, введённое в строку ввода, а булево значение будет изначально "false".
todoControl.addEventListener('submit', function (evt) {
	evt.preventDefault();
	// 1.4.1 Создадим новый объект, где вместо значения свойства "text" будет value строки ввода, а значение булево значения "completed" — false.
	const newToDo = {
		text: headerInput.value,
		completed: false
	}
	// 1.4.2 После того, как объект создан мы добавляем его в массив с помощью метода push()
	toDoData.push(newToDo);
	// 1.4.3 Ну, а саму строку ввода мы будем очищать для удобства пользования
	headerInput.value = '';

	render();
})

render();