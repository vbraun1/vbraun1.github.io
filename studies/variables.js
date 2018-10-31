/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable. This name can include numbers, but can not start with one. They can not include spaces.
*/

var formula1Race = "Keep hearts racing"; // <- valid variable name
console.log(formula1Race);

// 2. There are 2 phases of using variables: declaration and initialization (or assignment).
// 1. declaration //

var myName;

/*
*At the declaration phase, we have created the variable myName, however it is
undefined because we have NOT initialized it by assigning a value.
*/

console.log(myName); // prints => undefined

// 2. initialization or assignment //

myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //

myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //

var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var, let, const
/*
var: var is only one keyword we can use to declare a variable. Variables 
declared with the var keyword have 'global scope,' which means that we can call 
them from anywhere in our code and they will return their value. */
//Example:

var myDog = "Lola";  
function printDogName () {
    console.log(myDog);  
    // ^^ We can access myDog even though it was declared outside the function.
}
printDogName(); // <- will print "Lola"

/*let: variables declared with the let keyword can also be declared without
being defined, and can later be redefined.
*/
//Example:

let myNameIs; // <- valid
console.log(myNameIs); // <- will print "undefined"

myNameIs = "Veronica"; // <- valid
console.log(myNameIs); // <- will print "Veronica"

myNameIs = "Number Five"; // <- able to re-assign
console.log(myNameIs); // <- will print "Number Five"

/*Variables declared with the keyword let, have a "local scope," which means
that they are only accessible from within the code block 
in which they have been declared.*/
//Example:

function printPetName () {
    let name = "Shadow";
    console.log(name);
}
printPetName(); // <- will print "Shadow"

//console.log(name); <- name is not accessible outside of the printPetName function.

/*const: variables declared with the keyword const must be initialized at the 
time of declaration--you must assign a value when you declare the variable--and 
you can not re-assign a different value to the variable.
*/
//Example:

//const city; <---would throw an error
const city = "New Orleans"; // <- must assign value when declaring value

//city = "Charlotte"; <--error, you can not change the value of this variable

/*Const variables are block-scoped, meaning they are only available in the block
of code in which they were declared (the code in between the curly brackets: 
{ code here }) and they can not be accessed until AFTER they have been 
declared/defined. 
*/
//Example:

function printPetName() {
    
  //console.log(name); <- gives error that name has not been defined
  
  const name = "Angus"; //<-only available in block between curly brackets
  
  console.log(name); 
}

printPetName(); //<- Prints Angus to the console.

//console.log(name); <-- error, undefined.


// 5. Hoisting

/*JavaScript interpreters read code from top to bottom. Hoisting refers to JS
pulling variable declarations and function declarations to the top of the code. 
This means that we can access them without getting errors before they have been 
declared.
*/

//Variable declarations are hoisted, but not their definitions/values.
//Example:

function simpleAddFunction() {
var a = 1;
var b = 2;
  console.log(a + b);
}
simpleAddFunction(); //<- will print 3 to the console because JS knows the value of a and b when it executes.

//BUT: 

function simpleAddFunction() {
    console.log(a + b);
var a = 1;
var b = 2;
  }
simpleAddFunction(); //<- this will return NaN because JS knows a and b exist, but not their values. 

//Function declarations are hoisted to the top of the code.

simpleFunction(); //<- this function will execute even though I declared the function after this line. 

function simpleFunction() {
  
  console.log("I'm a simple function.");
  }

/*If functions are assigned to a variable (a function expression), the variable
declaration gets hoisted to the top, but not the value (the function).Calling
the function before the variable definition would give you an error because JS
knows you have this variable declared, but it’s not reading the function code, 
because this didn’t get pulled to the top with the definition.  

Example:

 product(); <-- will return a type error; JS knows this exists, but not that it is a function. 
*/

var product = function() {
  
  var x = 5;
  var y = 2;
  
  console.log(x * y);
}
//BUT:
var product = function() {
  
  var x = 5;
  var y = 2;
  
  console.log(x * y);
}

product();  // Calling the function on this line will execute the function and print 10. 

 // Plan ahead! Best practice is to declare variables at top of function scope. 
