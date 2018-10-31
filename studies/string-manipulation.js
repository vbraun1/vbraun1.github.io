// String Manipulation
/*Strings in JavaScript are strings of characters between quotations (double or single, just use them same through code).  
They are simple data types meaning they can not hold any other value. Generally simple data types can not be changed, 
but we can manipulate strings-in some ways they behave like Arrays. We can also use arithmetic operators to manipulate strings.  
 */

// 1. With operators
//Strings can be combined (concatenated) with the + operator.  

let firstName = "Lola";
let lastName = "Braun";

console.log(firstName + " " + lastName); //<- prints Lola Braun to the console

//Strings can be evaluated with the < and > operators. 
let x = "x";
let y = "y";

console.log(x < y); //<- prints true to the console.

// 2. With string methods
//We can use methods to access information about a string or to manipulate it. 

// Use .length to the the length of a string:

let saints = "Who Dat!"
console.log(saints.length); //<- prints 8 to the console (counts the empty space).

//Access a character in a string with Array syntax:

let favoriteDriver = "Kimi";
console.log(favoriteDriver[0]); //<- prints K to console

//Another method for accessing a character in a string:

let favoriteTeam = "Haas";
console.log(favoriteTeam.charAt(2)); //<-prints a to console

//Accessing the last character in a string like accessing the last element in an array:

let neighborhood = "Saint Roch";
console.log(neighborhood[neighborhood.length - 1]); //<- prints h to the console

//Removing characters in a string with .slice():

let name = "Veronica";
console.log(name.slice(2, 6)); //<- prints roni to the console

//Replacing characters in a string with the .replace() method:

let city = "We live in Charlotte";
let newCity = city.replace("Charlotte", "New Orleans");

console.log(newCity); 

/*^^prints "We live in New Orleans" to the console--this method returns a new
string, it does not alter the origianl.We can still log city to the console and
get "We live in Charlotte".
*/








