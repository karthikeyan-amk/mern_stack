fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch("Error")


const promise = new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    setTimeout(() => {
        resolve("Resolved");
    }, 10000);
    setTimeout(() => {
        reject("Error");
    }, 4000);
    
})

promise.then(value => console.log(value))
.catch(value => console.log(value));


