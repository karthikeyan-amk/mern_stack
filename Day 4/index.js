//  TASK 1

let pali = "Malayalam";
pali = pali.toLowerCase();
if(pali.split("").reverse().join("") == pali){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}

// For in loop

let obj1 ={
    a:1,
    b:2,
    c:3
}

for(let key in obj1){
    console.log(key ,":", obj1[key]);
}

let arr1 = [1,2,3,4,5];
for(let key in arr1){
    console.log(key);
    console.log(arr1[key]);
}


// For of loop -ES6 for array

for(let key of arr1){
    console.log(key);
}

// forEach

let str1 = ["sometext ","hi "];
str1.forEach((char) => {console.log(char.repeat(2))});
// here the () for char is optional when one argument is given, the {} also optional when we use 1 statement

// Map

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); 

// Using arrow func

doubledNumbers = numbers.map(number => number * 2); // If we use {} with one return statement then we want to use return statement 
console.log(doubledNumbers); 

// Filter method

// Using arrow

console.log(numbers.filter(num => num%2==0));

// Using function

console.log(numbers.filter(function (num) {
    return num%2 != 0 
}));

// Task 2

let friends = [
    {name :"Karthi",
    year : 2003
    },
    {
        name: "Mith",
        year: 2002
    },
    {
        name: "Sakthi",
        year: 1999
    },
    {
        name: "Raghul",
        year: 2004
    },
    {
        name: "Sanjay",
        year: 2005
    },
    {
        name: "krish",
        year: 2002
    }
];

console.log(friends.filter((el)=> el.year>=2003).map(name => name.name));

// Shallow copy- Array's object will be like a reference so if we change the value in one position then it will be reflected in both the pointers which are referring to the same memory location

const numbers1 = numbers;
numbers1[0] = 10;
console.log(numbers , numbers1);

// deep copy - This will not let the variable to point to the same memory location

let numbers2 = [...numbers];
numbers2[0] = 1
console.log(numbers, numbers2);

// Interesting

const obj2 ={
    name : "Karthikeyan",
    age : 19,
    name : "karthi-amk"
}

console.log(obj2);

// Here the order of key value pair is not changed the lastly used value is replaced for the key ie it is re initialized  

// TASK 3

let employee = [
    {
        name : "Karthi",
        age : 18,
        salary : 100000,
        phone_number : 29622595
    },
    {
        name : "mith",
        age : 18,
        salary : 40000,
        phone_number : 26584561
    },    {
        name : "sakthi",
        age : 18,
        salary : 30000,
        phone_number : 56111413
    },    {
        name : "raghul",
        age : 18,
        salary : 25000,
        phone_number : 48582156
    },    {
        name : "sanjay",
        age : 18,
        salary : 20000,
        phone_number : 5148485
    },
    {
        name : "krishna",
        age : 18,
        salary : 15000,
        phone_number : 29622595
    }   
];

console.log(employee.filter(ele => ele.salary>25000).map(ele => ({NAME:ele.name,SALARY:ele.salary})));

employee.forEach(element => {
    if(element.salary>25000){
        console.log("NAME:"+element.name,"\nSALARY:"+element.salary);
    }
}
)
    
// Destructing - unpacking result will be in variables

{//for objects
    let {name,age,salary,phone_number} = employee[0];
    console.log(name,age,salary,phone_number);
}
{//for array
    let [a,b,c,d,e] = numbers;
    console.log(a,b,c,d,e);
}
{//for array
    let [a,b,c,d,...e] = numbers; //rest operator ...e to all the rest of data in it
    console.log(a,b,c,d,e);
}

// TASK 4
{
    let [a,b,,d,e] = numbers; //to skip some elements
    console.log(a,b,d,e);
}
// TASK 5
{
    let arr = [10,20,30,40,50,60,70,80,90,100];
    let [a1,a2,,a3,a4,...a5] = arr;
    console.log(a1,a2,a3,a4,a5);
}

{
    let employee = [
        {
            name : "Karthi",
            age : 18,
            salary : 100000,
            phone_number : 29622595
        },
    ]
    let {name : firstname,age,...rest} = employee[0]; //Rename operator
    console.log(firstname,age,rest);
}

{
    let employee = [
        {
            name : "Karthi",
            age : 18,
            salary : 100000,
            phone_number : 29622595
        },
    ]
    let {name : firstname,age,gender="M"} = employee[0]; //Default parameter
    console.log(firstname,age,gender);
}
function hello() {
    console.log("HEllo")
}
setTimeout(hello,3000);

    setTimeout(() => {
        console.log("Hello");
    }, 3000);


// Async task happening 

// program have two parts 
// 1.sync stask
// 2.Async task 

// the sync task will be firsst moved to stack then if a async task arrives then it will push it to webapi 
// it will wait till the timeout 
// then after the timeout it will added in task queue 
// after all the task is done on stack the task queue will be 

// https://kamronbekshodmonov.github.io/JELoop-Visualizer/


// Promise 

/* 
    State's
        1.pending
        2.resolve
        3.reject
*/

// const abc = new Promise((resolve,reject)=>{
//     console.log("hello");
// })

// abc.then(()=>())
// .catch(()=>())

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

