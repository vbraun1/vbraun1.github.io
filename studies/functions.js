// Functions--blocks of code we save so we can use whenever we need them. 


/* 1. The two phases to using functions: First we must DECLARE a function. Next 
we can execute (or two other words for executing a function?) a function by?
Invoke or call. 
*/
//Example:
function simpleGreeting () { //<-declared with function keyword and given a name
  console.log("Hello!");
 }

simpleGreeting(); //<--calling or invoking the function


// 2. What’s the difference between a function’s parameters and arguments PASSED to a function?

/*A function's parameters are placeholders for writing the code.  Arguments are 
the actual values that will be passed through the function when it is invoked. 
*/
//Example:
function simpleAddition (a, b) { //<--a and b are placeholders, we'll use actual values when we call the function
  console.log(a + b);
 }

simpleAddition(3, 8); //<--now we can input any two values we like 3 and 8 are the arguments--prints 11 to the console

// 3. What’s the syntax for a NAMED function?

/* The function keyword followed by the name of the function, followed by (), 
followed by {}, which contain the code we want to execute.
*/
//Example:
function namedFunction () {    //<--function keyword, name, (), {}
  //code to execute goes here
}
namedFunction(); //<-calling our named function

// 4.How do we assign a function to a variable?

/*This is a function expression. Rather than beginning with the function
keyword, we declare a variable and assign it the value of ourfunction using the 
function keyword.  We can also assign anonymous functions to variables. 
*/
//Examples:

let concat = function(string1, string2) {
  console.log(string1 + " " + string2);
}

concat("good", "morning"); //<-  prints "good morning"

let sayWhat = function concat(string1, string2) {
  console.log(string1 + " " + string2);
}

sayWhat("good", "morning"); //<- prints the same

//Can also use shorthand syntax:
let sayThis = (string1, string2) => {console.log(string1 + " " + string2);};

sayThis("good", "morning"); ////<-  prints "good morning"


/* 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single
value. How do we specify inputs, and how do we specify outputs?

If our function accepts inputs, we insert placeholders called parameters in the
() following the functions name.  When we call our function, we do so with the
function name followed by the actual values we want the function’s code to use
when executing.  These values are the arguments.  If we want the function to
produce a specific value, we have to provide a return statement in the code 
block inside of the {}. Some functions might require us to collect values into
an object and the we can return that object. 
*/
//Example:

function printNumbers () {  //does not take arguments
  for (let i = 1; i <= 10; i++) {
    console.log(i); //prints numbers 1-10 to the console
  }
} 
printNumbers();


function printNumbers () {
  let array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(i);
    }
  console.log(array);
} 

printNumbers(); //<-- will put numbers 1-10 in an array and print the array

// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
//Example:

let dogName = "Angus"; //<-declared outside of the function, has global scope

function myDog () {
  console.log(dogName); //<- code in the function can reach out and use the variable
}

myDog(); //<--will print "Angus to the console"


function myDog () {
  let dogName = "Angus"; //<--declared inside the function, it has local scope
  console.log(dogName);
}
myDog(); //<- will print "Angus" to the console

console.log(dogName); //<--this will throw a reference error, it can not reach in to the function to get the value of the dogName


/*If you fail to declare a variable but still assign a value to it, JS will
automatically give it a global scope, unless you use strict mode:
*/

circuit = "Mexico City";

function raceDay () {
  console.log(circuit);
}
raceDay();  //<- will log "Mexico City" to the console

console.log(circuit); //<- will log "Mexico City" to the console


/* 7. Closures: Functions form closures around the data they house. 
If an object returned from the Function and is held in memory somewhere (referenced), 
that closure stays ALIVE, and data can continue to exist in these closures! 
(See: our meeting-room app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)
*/

function addition (num1, num2) {
  
  function sum () {
    return num1 + num2; //<--the inner function has access to the variable and parameters of the outer function.
  }
  return sum();
}

console.log(addition (8, 9));

