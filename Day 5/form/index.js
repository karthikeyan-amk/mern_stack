let user = document.getElementById('username');
let pass = document.getElementById('password');
let button = document.getElementById('but');
let form = document.getElementById('form');

button.addEventListener('click' , (e)=>{
    e.preventDefault()
    console.log(user.value ,pass.value);
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(user.value,pass.value);
})