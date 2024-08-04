import { UserService } from "./modules/user-service";
import { renderFunc } from "./modules/render";
import { addUsersFunc } from "./modules/add-users";
import { removeUsersFunc } from "./modules/remove-users";
import { changePermissionsFunc } from "./modules/change-permissions";
import { editUsersFunc } from "./modules/edit-users";
import { filterUsersFunc } from "./modules/filter-users";
import { sortUsersFunc } from "./modules/sort-users";
import { searchUsersFunc } from "./modules/search-users";

window.userService = new UserService;

userService.getUsers().then(data => renderFunc(data));

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
