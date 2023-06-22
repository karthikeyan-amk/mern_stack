//To print hello world 
console.log("Hello");

//Variables are losely bonded

let a="777"+"Karthi";
console.log(a);

//after 2016:ES6 (In the context of JavaScript, "ES" stands for ECMAScript. )feature:let const
//Before that var

const name ='karthi';
console.log(name);


//Hoisting

var x = 10;
{
    var x = 20;
    console.log(x,typeof x);
}
console.log(x);

//Output: 20 20

let n = 10;
{
    let m = 20;
    console.log(m); 
}
console.log(n);

//Output: 20 10

// When you declare a variable using the var keyword, the declaration is hoisted to the top of its scope, but not the initialization. This means that the variable is effectively "moved" to the top, allowing you to access it before the actual declaration in the code. However, its value will be undefined until it is assigned a value. 

//------------------------------

//DATA TYPES:
//numbers - integers,float,NaN,Infinity,-Infinity,BigInt,

let c=1/0;
console.log(c);

// Output:Infinity


let d="1"*0;
console.log(d);

//Output: 0

let e = "Raghul"*5;
console.log(e);

//Output: NaN

let f = "Karthi"*"Raghul";
console.log(f);

//Output: NaN


let g = 10n;
console.log(g,typeof g);

//Output: 10n 'BigInt'

let h = 10;
let i = 10;
console.log(h+"+"+i+"="+(h+i));

//-------------------------

// String
// Back tick operation is a ES6 feature:
console.log(`HI
    I am karthi ${h}
    Performing backtick operation that`);

// Output:
// HI
//  I am karthi 10
//  Performing backtick operation

// null

let j = null;
console.log(j,typeof j);
// Output: null 'object'

// undefined

let k;
console.log(k,typeof k);
// Output: undefined 'undefined'


//TASK  :What is the output?
console.log(l);
var l = "Hello";

// Output: undefined
// Concept: Hoisting-Whenever the var is used it will declear the variable and it will be moved to the top and it will be initialized in that particular line

// an object is a composite data type that represents a collection of key-value pairs, where each value can be of any data type, including other objects. Objects are used to store and organize related data and functionality.Objects in JavaScript are created using curly braces ({}) and can contain properties and methods. A property is a key-value pair, where the key is a string (or symbol) that uniquely identifies the property, and the value can be any valid JavaScript value.
let person = {
    name: "John",
    age: 30,
    isStudent: true
  };
  person.school = "RGM";
  person.name = "Karthi";
  console.log(person);

  delete person.isStudent;
  console.log(person);

//   FREZZE

// Object.freeze(person);
person.school = "RGM HSS ";
person.name = "Karthikeyan";
console.log(person);

let keys = Object.keys(person);
console.log();
//  All values changing
let person1 = person;
person1.school = "RGM";

console.log(person1);
console.log(person);

// Clone then it will not change at all locations

const person2 = {
    ...person, 
    // Spread operator
    // can add 
    url : "www.ammk.in",
    address:{
        street:"MGR NAGAR",
        city:"Poolavadi",
    }

};
console.log(person2.address.city); // Output: Poolavadi


// console.log(person.address?.city); 
// The optional chaining operator ?. 

function sum(num1,num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        return num1+num2;
    }
    else{
        return "Invalid number";
    }

}

console.log(sum(10,20));
console.log(sum('tyo',90));

// ----------------

// == loose and === strong

// 5 == '5' returns true because the string '5' is converted to the number 5 before the comparison.
// true == 1 returns true because true is converted to the number 1 before the comparison.

// 5 === '5' returns false because the operands have different types.
// true === 1 returns false because the operands have different types.

// -----------------

// Arrow Functions

const square1 = (num) => {
    return num * num;
  };
  
  console.log(square1(5)); // Output: 25
  
  //without return

const square2 = (num) => num * num;
  
  console.log(square2(5)); // Output: 25


//IIFE stands for Immediately Invoked Function Expression.

/*(function() {
    // Code enclosed within the IIFE
  })();
*/

(function(name) {
    console.log('Hello, ' + name + '!'); //return can't be used
  })('John');


// Anonomys
  let add = function(a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5


// 

const sub = (n1,n2) =>{
    return n1-n2;
}

function print(operation,a,b) {
    return operation(a,b);
} 

console.log(print(sum,10,20));

// -----------------------

let str = '   Hello, World!   ';
let trimmedStr = str.trim();

console.log(trimmedStr); // Output: 'Hello, World!'


let str1 = 'Hello,World!';
let reString = str1.replace('o','H');

console.log(reString); // Output: 'HellH,World!'

reString = reString.replaceAll('o','H');
console.log(reString); // Output: HellH,WHrld!

//---------------

let fruits = ['apple', 'banana', 'orange', (num3)=>num3*3, {a:1,b:2,say_hello:()=>"Hello"}];
console.log(fruits[3](5));
console.log(fruits[4].say_hello());

// to print the objects in array
for (let key in fruits[4]){
    console.log(key,fruits[4][keys]);
}

//TASK
let numberArray = [1,2,3,4,5];
numberArray.push(6,7,8,9,10);
console.log(numberArray);

numberArray.shift();
console.log(numberArray);

numberArray.unshift(-1,0,1);
console.log(numberArray);

console.log(numberArray.slice(2,5));

numberArray.splice(numberArray.length , 0 , 11 , 12 , 13);

console.log(numberArray);

// TASK
let name1 = "Karthi keyan";
console.log(name1.slice(1))

console.log(name1.split(" "));

let str2 = [1,2,3,4,5,'karthi','keyan'];
console.log(str2.join(" "));
console.log(str2.join(""));

name1.toLocaleLowerCase();
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());


// TASK
let name2 = "karthi mith raghul sakthi";
name2 = name2.split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
console.log(name2);

