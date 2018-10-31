/* Loops--Loops repeat a block of code as many times as we want--we can set them
to repeat a certain number of times, or until a certain condition is met. 
*/

// 1. Explain while, for, and for-in loops. 

/*WHILE Loops: While loops will continue to execute WHILE a certain condition is
true.  Use these when you don’t know how many times the loop will need to run.
Use the keyword, while and don't forget to increment the variable--failing to do
so could cause an infinite loop and crash computer:
*/

//Examples:

let x = 0;  //<- x starts at 0

while (x < 10) { //<- the loop will run as long as the value of x is less than 10
  console.log("I count " + x); //<- code to execute while condition is true
  x++; //<- ensures that the value of x will increase each loop--w/o it, would be infinite loop
}

//If we want to be sure that our code executes at least once, even if the condition is false, we can use a DO-WHILE loop:

let a = 15;

do {
  console.log(a);
  a++;
}
while (a < 10); //<-a will always be greater than 10, but will print once to the console


/*FOR Loops: For loops are good for when we know how many times we want the code
to repeat.  We have to give the loop a starting condition (initialize it), a
condition for when to stop looping and an incrementation of our variable. These
are what we use when we want to loop through all the elements of an array, even
if we can’t be sure of the length of the array. Loop through array example below. 
*/
//Example:

for (let i = 0; i <= 10; i++) {  //<-our 3 requirements: initializer, condition and incriment
  console.log(i); //<- The code to execute--will print numbers 0 - 10 to the console
}

/*FOR-IN Loops: If we need to loop through an object, we use a for-in loop. 
We can loop through all the keys in an object and get their values as well:
*/
//Example:

let pets = {
  dogOne: "Lola",
  dogTwo: "Angus",
  dogThree: "Shadow",
  newPet: "Should we get a cat?"
};

for (var key in pets) { //<--JS knows that key is the variable for the object's keys, we could have named it something else
  console.log("This is the key: " + key);
  console.log("This is the value: " + pets[key]);  //Must use bracket notation here!
}


// 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0

//Forward a number of times:
let hour = 1;
while (hour < 5) { //<-will loop the number of times it takes to reach 5, if 5 changes, it will loop that number of times
  console.log("Keep working!");
  hour++;
}

//Back a number of times: 
let y = 12;
while (y > 5) { //<--will loop and count down
  console.log("number" + " " + y);
  y--;
}

//forward a number of times:
for (let i = 0; i < 10; i++) {
  console.log(i);           
}

//back a number of times:
for (let i = 10; i > -1; i--) { //<-will count down until 0 (and print 0).
  console.log(i);    
}


// 3. Loop over an Array, forwards and backwards

let thisArray = [1, 2, 3, 4, 5];

for (let i = 0; i < thisArray.length; i++) {  //<--i is for index, this.Array.length ensures we go to end of array
  console.log(thisArray[i]);
}

for (let i = thisArray.length - 1; i > -1; i--) { //<--this.Array.length - 1 ensures we start at end of arry
  console.log(thisArray[i]);
}


// 4. Loop over an Object

let contact = {
  firstName: "Aaron",
  lastName: "Braun",
  city: "New Orleans"
};

for (var key in contact) { //<-prints keys to console
  console.log(key);
}

for (var key in contact) {
  console.log(contact[key]); //<- prints the values to the console
}

for (var key in contact) {
  console.log(key + ": " + contact[key]); //<-prints both!
}

