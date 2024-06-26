// * == Стиль кода == * \\
// ? 1.0 По правилам код-стиля alert() должен всегда стоять после функциональной части кода, обычно в самом конце. И тогда этой ошибки не произойдёт.
// ? 1.1 Чаще всего на данный ";" в JS не ставится, но пока учимся рекомендуется её ставить после каждой однострочной команды, чтобы избегать подобных проблем. С опытом мы поймём, где их стоит ставить, а где нет.
alert('Hello')
[1, 2, 3].push()

// * == Переменные == * \\
// ? 2.0 Могут начинаться либо с литеры латинского алфавита нижнего регистра, либо с _, либо с $. И не могут начинаться с цифр. Не могут содержать в названиях операторы и повторять ключевые слова, зарезервированные в JS (var, let, const, class, for, if, do, while etc.).
// ? 2.1 Также не рекомендуется называть переменные с большой буквы, т.к. обычно так в JS именуются другие сущности — классы.
// ? 2.2 В новом стандарте было решено заменить var на let & const, чтобы решить проблему, которая позволяла обратиться к переменной var ещё до её объявления. Т.е. даже когда таким переменным ещё не присвоено какое-то значение — они уже занимают ячейки памяти. Теперь такая попытка вызовет ошибку, что заставляет разработчика всегда указывать переменные в самом верху, до их использования. Подобное поведение ключевых слов из нового стандарта называется "всплытие" и помогает избежать многих проблем.
// 2.3.0 Пример как var мог бы помешать в цикле.
for (var i = 0; i < 2; i++) {
	console.log('цикл');
}
// 2.3.1 А теперь выведем переменную i в консоль, но вне цикла. Как видимо она стала доступна вне цикла. Но если заменить var на let, то мы получим ошибку.
console.log(i);
// ? 2.3.2 Почему это плохо? Да потому, что в коде мы очень часто используем циклы и представьте, если бы мы в каждом объявляли бы переменную i через var. Все наши циклы бы поломались, т.к. они каждый раз принимали бы это i, как одну и ту же переменную. Но благодаря let мы теперь можем в каждом отдельном цикле использовать i, т.к. она будет ограничена областью видимости только для этого цикла и никак не мешать остальным. Так код будет намного понятнее, ведь каждый раз i будет означать index внутри цикла.

// todo также см. [00-warm-up-lessons]

/* ||---------------------------------------------->> 
* Links:
* [✓][Правильный выбор имени переменной] https://learn.javascript.ru/variable-names
* [✓][Объект консоль] https://developer.mozilla.org/ru/docs/Web/API/Console
* [✓][Обучение git в игровой форме - LearnGitBranching] https://learngitbranching.js.org/
* [✓][Интерактивный тур по git] https://githowto.com/ru
* [Часто задаваемые вопросы по git] http://firstaidgit.ru/
* [✓][Советы по стилю кода] https://learn.javascript.ru/coding-style
*/ 