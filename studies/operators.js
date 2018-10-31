// Operators
/*
Operators do something with our data depending on what type of operator they are
and how many operands they work with. Operands are the values that operators
“use.”
*/

// 1. Assignment operators
/*
Assignment operators assign a value to a variable.  
The assignment operator is a unary operator because it is only using one value
(one operand). 
*/

// Examples:
var num = 13; //<- use the = to assign the value of 13 to the variable num. 
var dog = "Lola"; //<- assigns the string of "Lola" to the variable dog.
var isTrue = true; //<- assigns the boolean of true to the variable is true. 


// There are many assignment operators that assign a value and perform some math at the same time. 

// += will add value and assign at the same time
var x = 3;

x += 2;  //x = x + 2

console.log(x); //<- will print 5 to the console.

// -= will subtract and assign value at the same time
var x = 3;

x -= 2; //x = x - 2

console.log(x); //<- will print 1 to the console.

// *= will multiply and assign value at the same time. 
var x = 3;

x *= 2;  //x = x * 2

console.log(x); // will print 6 to the console.

// /= will divide and assign value at the same time. 
var x = 3;

x /= 2;  //x = x / 2

console.log(x); //<- will print 1.5 to the console.

// %= will assign a remainder to the variable
var x = 3;
x %= 2;  //x = x % 2

console.log(x); //<- will print 1 to the console. 


// 2. Arithmetic operators
/*
The arithmetic operators perform some kind of math (e.g. addition, subtraction, 
multiplication, division, incrementing and decrementing) using two values-which
makes them binary operators.  
*/
// Examples:

var sum = 4 + 8;
console.log(sum); //<- will print 12 to the console.

/* The + operator will also work with strings as well as numbers; this is called
concatenation.
*/

var string1 = "Happy";
var string2 = "Halloween!";

console.log(string1 + " " +  string2); //<- will print "Happy Halloween!" to the console.

// Arithmetic operators follow the conventional order of operations. 

var solution = (5 + 5) * 20 - 50;
console.log(solution); // <- will print 150 to the cosole. 

// Use ++ and -- to increment or decrement a value.
var upByOne = 10;
upByOne++;
console.log(upByOne); //<- prints 11 to the console.

var downByOne = 5;
downByOne--;
console.log(downByOne); //<- prints 4 to the console. 


// 3. Comparison operators
/*
Comparison operators compare two values and return either true or false (a
boolean value). These are binary operators because they compare two values. 
These are operators such as <, >, <=, >=, and != (not equal to). 
*/
// Examples:

console.log(10 < 20); //<- prints true 
console.log(10 > 20); //<- prints false
console.log(5 <= 200); // <- prints true
console.log(5 >= 200); // <- prints false

/*
Strict and loose equality: strict equality (===) will compare the value and type
of two values, while loose (==) equality will compare the value--if the values
are different types, JS will coerce them to the same type and make the
comparison. It is best to use strict equlity unless there is very good reason
not to. 
*/
// Examples:

var num = 7;

console.log(num == 7); // true, because the values are the same
console.log(num == "7"); // true, because JS coerced "7" to behave like 7

console.log(num === 7); // true, becuase the value and type are both equal
console.log(num === "7"); // false, because 7 and "7" are different datatypes (number and string)

// The ! (bang) operator can also negate equality. 

var number = 13;


console.log(number != 13); // false, because the values are equal
console.log(number != "13"); // false, because JS is coercing "13" to a number and the values are equal
console.log(number !== 13); // false, because both type and value are equal
console.log(number !== 130); // true, because the value or type is not equal


// 4. Logical operators
/*
Logical operators compare the logic between two values: they are && (and), || (or) and ! (not). 
They are used to test conditions in code and result in either true or false. These true and false results are 
used in conditional statements to determine if the code block following the statement will execute or not. 
 
*/
// Examples:

console.log(1 + 1 == 2 && 2 + 2 == 4); //<- prints true to the console because the equation on both sides of && are true. 

/* The following example will also print true to the console, because it only requires that one OR the 
other condition is true.  Because the first condition is true, the rest of the code is not 
even evaluated.*/
console.log(1 + 1 == 2 || 2 + 2 == 5);


// 5. Unary operators (!, typeOf, -)
/*
Unary operators only use one value to perform an action.  
*/
// Examples:
// The ! (bang) operator means "not."

console.log(!(5 > 4)); //<- prints false to the console because 5 is greater than 4.


//typeof takes a single value and returns it’s datatype. 

console.log(typeof 42); // <- number

console.log(typeof "42"); //<- string

console.log(typeof false); //<- boolean

console.log(typeof ["Haas", "Mercedes", "Renault", "Red Bull"]); //<- object

// The - operator also turns a value to negative.
// Example:
 let y = 5;

console.log(-y); //<- will print -5

// 6. Ternary operator (a ? b : c)
/*
Ternary operators are they only operators that use three values and are a
shorthand for conditional statements. 
*/
// Example:

var isWeekDay = true;

if (isWeekDay) {                    
  console.log("Go to class!"); // will print "Go to class!"
} else {
  console.log("Have brunch!");
}

// could also be written:
console.log(isWeekDay ? "Go to class!" : "Have brunch!"); // will print the same




