import { UserService } from "./modules/user-service";
import { renderFunc } from "./modules/render";
import { addUsersFunc } from "./modules/add-users";
import { removeUsersFunc } from "./modules/remove-users";
import { changePermissionsFunc } from "./modules/change-permissions";
import { editUsersFunc } from "./modules/edit-users";
import { filterUsersFunc } from "./modules/filter-users";
import { sortUsersFunc } from "./modules/sort-users";
import { searchUsersFunc } from "./modules/search-users";

// * 3.0 Создадим новый экземпляр класса UserService. Т.к. на не требуется передавать параметры, поэтому можно без "()"
// const userService = new UserService;

// * 4.0 Но есть и иной способ работы с глобальным сервисом, мы можем записать его в глобальный объект window. И теперь в каждом модуле ниже данной строчке будет доступен, созданный нами, userService из глобального объекта Window и теперь уже не придётся принимать и передавать этот сервис в каждый модуль.
window.userService = new UserService;

// 3.1 Теперь мы можем его передавать в любой другой модуль
// render(userService);

// 6.1 Теперь мы запустим этот метод здесь и поместим результат его выполнения data в render().
userService.getUsers().then(data => renderFunc(data));

// render(userService.users);

addUsersFunc();
removeUsersFunc();
changePermissionsFunc();
editUsersFunc();
filterUsersFunc();
sortUsersFunc();
searchUsersFunc();

/* ||---------------------------------------------->>
* Links:
* [✓][https://github.com/typicode/json-server] JSON-server
*/
