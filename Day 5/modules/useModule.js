const USER_DATA = [
    {id : 1,
    name :'kar',
    age : 20,
    email: 'kar@gmail.com'}
];

// CURD OPERATION

const addUser = (new_user) =>{
    USER_DATA.push(new_user);
    console.log(USER_DATA);
    console.log("Added");
}

const editUser = (id, key, val) =>{
    const index = USER_DATA.findIndex(user => user.id ===id);
    if(index  !== -1){
        USER_DATA[index][key] = val;
        console.log("Edited");
    }else{
        console.log("Not Edited");
    }
    console.log(USER_DATA);
    
}

const deleteUser = (id)=>{
    const index = USER_DATA.findIndex(user => user.id ===id);
    if(index !==-1){
        USER_DATA.splice(index,1);
        console.log(USER_DATA);
        console.log("Deleted");
    }
    else{
        console.log("Invalid user id");
    }
}

const editMultiple = (id,val) =>{
    const index = USER_DATA.findIndex(user => user.id ===id);
    USER_DATA[index] = { ...USER_DATA[index], ...val};
    console.log(USER_DATA);
}

const sampledata = 
{id : 2,
    name :'sak',
    age : 20,
    email: 'sak@gmail.com'
};


// addUser(sampledata);
// editUser(2,'name','sakthi'); 
// deleteUser(2)
// editMultiple(2,{name:'sakthi santhosh',age : 19});

export default USER_DATA;
export {
    addUser,
    editUser,
    editMultiple,
    deleteUser
}