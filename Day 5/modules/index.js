// Today's topic modules and DOM Manipulations

// Task

// perform curd operations - done in scr"./useModule.js"

import USER_DATA,{
    addUser,
    editUser,
    editMultiple,
    deleteUser} from "./useModule.js";

console.log(USER_DATA);

const data={id:3,name:'KEYAN',age:19,email:'keyan@gmail.com'};
addUser(data);

editUser(3,name,'karthi');

editMultiple(3,{name:'karthi',email:'karthi@gmail.com'});

deleteUser(3);


document.body.innerText = 'Hello';
document.body.style = 'backgr'