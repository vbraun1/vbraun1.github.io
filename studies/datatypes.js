// Datatypes
/* Datatypes are the different types of values that we assign to variables.  
They are either simple or complex. Strings, numbers, booleans, undefined and
symbols are all simple datatypes. Arrays and objects are complex.  
*/

//We can re-assign different datatypes to variables.

let someVariable = true;
console.log(someVariable); //<- variable is a boolean

someVariable = 25;
console.log(someVariable); //<- variable is now a number

someVariable = "Saturday Homework";
console.log(someVariable); //<- variable is now a string

/* 1. Number--just like sounds, numbers are numbers! They can be positive or
negative and include decimals and scientific notation.
*/
let age = 36;
console.log(age); //<- prints 36 to console

let hours = 3.5;
console.log(hours); //<-prints 3.5 to console

let x = 5e5;
console.log(x); //<-prtins 500000 to the console

/* 2. String--strings of characters of any length that are enclosed in quotations,
either single or double (both are fine, just use the same throughout code).
*/
let nameFirst = "Veronica";
console.log(nameFirst); //<- prints Veronica to the console

// Put quotes in a string by switching the type of quotation mark, or by breaking out with a \

let string = "I want to use quotes 'here.'";
console.log(string); //<- prints I want to use quotes 'here.' OR:

let thisString = "I want to use quotes \"here.\"";
console.log(thisString); //<- prints the same as above

//Strings can be added together or concatenated:
let firstPart = "My name is Veronica,";

let secondPart = "and I am learning to code."

console.log(firstPart + " " + secondPart); //<- prints My name is Veronica, and I am learning to code.
//the code above must include an empty space--JS will not know to add one unless you tell it

//JS will treat numbers as strings when combined with the + operator:

let greeting = "hello";
let num = 5;
console.log(greeting + 5); //<- will print hello5 to the console

// 3. Boolean--a value that is either true or false, used in conditional statements.

let num1 = 20;
let num2 = 40;

console.log(num1 < num2);//<- logs true to the console
console.log(num1 == num2); //<- logs false to the console

/* 4. Array--An array is a zero-indexed collection of values, called elements--
these values can be any datatype (even other complex datatypes, arrays and
objects). Arrays can hold 0 or multiple values. They are zero-indexed because
computers begin counting at 0, so the first value in an array has an index of 0,
the second value has an index of 1, the third value has an index of 2. The
elements in an array have no association with their index other than they
happen to be at that index. Arrays are held in [] and can be manipulated after
we create them. The square brackets that hold arrays are referred to as bracket
notation. 
*/

// Example of an empty array:

let newArray = [];
console.log(newArray); //<- will print [], not undefined. We have defined the array, just without any values.

//Arrays have properties that we can access:
console.log(newArray.length); //<- will print 0  

//An array with different datatypes (strings, a number and a boolean):

let dogs = ["Lola", "Angus", "Shadow", 3, true];
console.log(dogs); //<-logs all values to the console inside [].

/*Accessing values in an array with bracket notation and index:  we can access a value in an array by calling 
the name of the array and index of the value in brackets.  Using the dogs array above:*/

console.log(dogs[1]); //<- prints "Angus" because this string is at index 1 in the array. 

/*Manipulating arrays with methods: the .push() method will add an element to the end of an array. Put the value to 
add in the (). .push() will RETURN the new length of the array.*/

dogs.push(["Bella", "another puppy"]);
console.log(dogs); //<- ["Lola", "Angus", "Shadow", 3, true, ["Bella", "another puppy"]]
// ^^this added another array to the array.

//.pop() will remove the last element in an array and RETURN the value that was removed:

dogs.pop();
console.log(dogs); //<- removes ["Bella", "another puppy"] from the array
                   //<-this would RETURN ["Bella", "another puppy"]

// Use the .toString method to turn elements in the array into a string:

let newString = dogs.toString();
console.log(newString); //<- prints "Lola,Angus,Shadow,3,true" to console, but does not change the original value of dogs. 


//Use a for loop to loop through all of the elements in an array:

for (let i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);                 //<- will print all elements to console, does not put them in a new array
}

/*NOTE: all arrays are technically objects in JS, though not all objects are arrays. Using the typeof method will 
return “object” for arrays.  Use array.isArray.() to test if a collection of values is an array. 
*/

console.log(Array.isArray(dogs)); //<- will print true

/* 5. Object--Objects are also a collection of values, but they are not indexed or ordered.  They are made up of 
key/value pairs and these are associative, meaning the key is and should be in some way associated with its value.  
Objects are also a complex datatype because they can contain multiple datatypes and we can manipulate them after we create them. 
The key/value pairs are contained in {} and separated by commas. Objects can also be empty after declaration.
*/

let thisObject = {};
console.log(thisObject); //<- [object Object] { ... } prints to console, not undefined or an error. 

//Object containing different data types including an array:

let lolaBraun = {
  species: "K9",
  gender: "female",
  color: "black and tan",
  tail: 1,
  nicknames: ["Sissy", "Little Mama"]
};

//Access keys in an element with dot and bracket notation:

console.log(lolaBraun.species);

console.log(lolaBraun["species"]);  /*<- both print K9 to console, but key must be in quotes for bracket notation, 
                                         because keys are strings!*/

//Add key/value pairs to objects with the = operator and dot notation:

lolaBraun.legs = 4;
console.log(lolaBraun); /*[object Object] {
                            color: "black and tan",
                            gender: "female",
                            legs: 4,
                            nicknames: ["Sissy", "Little Mama"],
                            species: "K9",
                            tail: 1
                            }*/

//Pull out all of an objects keys with the Object.keys method

console.log(Object.keys(lolaBraun)); // prints an array of the keys to the console

//For-in loops are for looping through objects:

for (var key in lolaBraun) {
  console.log(key);
}                      //<- will print all of the keys to the console(not in an arry like Object.keys)

for (var key in lolaBraun) {
  console.log(lolaBraun[key]);
}
/*^^ also use a for-in loop to get the values from an object with bracket notation. Here you must use
bracket notation! Using dot notation will have JS looking for a key named "key" and will
return undefined.
*/

/* 6. Function--A function is a block of code that does something--they allow us to save the code to use 
any time without have to rewrite it.  We declare a function with a name or assign it to a variable.  
Functions can either accept arguments or not--these arguments can be any data type, even other functions. Fucntions themselves
have a data type of 'function.'
*/
//Declaring a simple function:
function easyFunc () {          //<---no arguments need to pass through the ()
  console.log("That was easy.") //<---it will simply excute this code
}

easyFunc();  //<-the syntax for calling a function; will print "That was easy." to the console.

//a function with parameters and arguments:

function addTwoNums (num1, num2) {  //num1 and num2 are parameters-placeholders for the values we'll use later
  return num1 + num2;               //this will RETURN 9, not print it to the console.
}

addTwoNums(3, 6); //<- calling the function with the values we want to add

console.log(addTwoNums(3, 6));  //<- this will print 9 to the console

//NOTE: the return statment will end the function! Code following the return statement will not execute!

//A function as a variable: a function expression:

let add = addTwoNums (3, 6);

console.log(add); //<- will print 9 to the console


/* 7. undefined--if we declare a variable, but do not assign a value, it is undefined. 
If we use typeof, it will return “undefined.”  This is another simple data type--it can not hold any other values.
This is NOT the same thing as an empty value, like an empty array or an empty string.
*/
//Examples:

let race;
console.log(race); //<--prints undefined be we did not assign a value to race.  We can assign one later. 

race = "Circuit of the Americas";
console.log(race); //<--race now has a value of "Circuit of the Americas"

/* 8. null--is similar to undefined, they have the same value, but not the same type. Null is an object.  
*/

console.log(typeof null); //<-prints "object" to the console

/* 9. NaN Is Not a Number.  This value can be used to test if a value is a number or not.  
If JS can’t coerce a value in to a number it will return NaN. 
*/
let a = "five";

console.log(isNaN(a)); //<- prints true to the console


/* 10. Infinity and -Infinity: the numeric values of infinity and negative infinity. This is used to represent a number
larger than any possible number. Anything added to Infinity will equal Infinity.
*/
console.log(Infinity + 1); //<- prints Infinity

// 11. What is the difference between primitive/simple and complex data types?

/*Primitive/simple data are:  boolean, number, undefined, string, symbol and null.  They can not hold any 
other value other than themselves and they are immutable--they can not be altered.  For example, 5 will 
always be 5, undefined will always be undefined.  You may assign 5 or undefined to a variable and then re-assign 
a different value to that variable later on, but you have altered the value of 5 or undefined. 

They are of a definite size and that size can fit in a variable. Because of their definite size, they can 
be stored directly “into” a variable. */

let house = 'Creole Cottage'; //<- the string is stored directly in the variable

/*Complex data types are objects, arrays and functions-which are themselves objects.  
These are complex because they can contain other types of values.  They may empty, or they may 
contain every other data type. They are NOT immutable, they can be changed:
*/

let flowers = ['rose', 'tulip', 'lily', 'hydrangea'];
console.log(flowers.pop());

//We have altered the value of the object. 

/*Because they can be any size, they are not stored directly in a variable.  
The variable stores a reference to the object (like storing an address). 
*/

// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?

/*Because simple data types are of a definite size and stored directly in a variable, they are copied by value.  
This means that the value of that variable can be copied into another variable.  However, only a copy is stored 
in the new variable; the original remains unchanged. 
*/
//Example:

let c = 1;
let b = c;

b = 3;

console.log(c); //<- still prints 1 to the console

/*Complex data types have values of an indefinite size, so they could grow larger than the variable 
container--this is why variables only store a reference to the value for the data types. If you copy the 
value into a new variable you have only copied the reference to the value.  Unlike copying by value, 
copying by reference will alter the original object. 
*/

let array = [1, 2, 3, 4];

let newerArray = array;

newArray.push(5);

console.log(newerArray);
console.log(array);     //<--both print [1, 2, 3, 4, 5] to the console


