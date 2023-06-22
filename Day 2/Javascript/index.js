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


//Random task :What is the output?
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