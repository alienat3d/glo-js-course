// * === Задача 1 "Получите данные о пользователях GitHub" === * \\

// ? Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// ? Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME

// Важные детали:
// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

/* describe("getUsers", function() {

  it("gets users from GitHub", async function() {
    let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
    assert.equal(users[0].login, 'iliakan');
    assert.equal(users[1].login, 'remy');
    assert.equal(users[2], null);
  });

}); */

// ? Решение:

async function getUsers(names) {
  const jobs = [];

  for(const name of names) {
    const job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  const results = await Promise.all(jobs);
	
  return results;
}

console.log(getUsers(['alienat3d', 'alienated', 'somestuff']));

/* ||---------------------------------------------->>
* Link: https://learn.javascript.ru/fetch
*/