// Control flow
/*When we write a program, we are writing a set of instructions.  We use control 
flow to tell our program what to do IF a certain condition is true, ELSE what to
do if it false, and possibly what to do if none of our conditions are true.
*/

/* 1. If statements begin with a condition and the code in the block executes if
the condition is true.  If the condition is not met, i.e. it is false, then the
rest of the code would run--if there is code to run:
*/

let thisFact = true;

if (thisFact === true) { //<--- the condition in the () was true, code executes
  console.log("I speak the truth!");  //<--prints to the console
} else {console.log("I'm telling lies!"); 
    }
                  /*^^--this code never runs, but it would if our 
                                       variable had a value of false*/


// 2. Else-if
//If we have more than one condition to check, we use an ELSE IF statement.

let dayOfWeek = "Friday";

if (dayOfWeek === "Monday") {
  console.log("It's Monday, do some homework!");
} else if (dayOfWeek === "Tuesday") {
  console.log("Tuesday's grey, do some homework!");
} else if (dayOfWeek === "Wednesday") {
  console.log("Yep, more homework.");
} else if (dayOfWeek === "Thursday") {
  console.log("Yay, homework!");
} else if (dayOfWeek === "Friday") {   //<--condition is met, code executes
  console.log("I'll still study.");
}


/* 3. Else--If none of our conditions are met, we an append a default to the end
of the if-else-if chain.  This block of code will execute if none of the 
preceding conditions were true. We do this with an ELSE statement.  
*/

let today = "Sunday"; // <--meets none of the conditions

if (today === "Monday") {
  console.log("It's Monday, do some homework!");
} else if (today === "Tuesday") {
  console.log("Tuesday's grey, do some homework!");
} else if (today === "Wednesday") {
  console.log("Yep, more homework.");
} else if (today === "Thursday") {
  console.log("Yay, homework!");
} else if (today === "Friday") {
  console.log("I'll still study.");
} else {
  console.log("I can't keep track anymore."); //<--this block of code runs, 
}                             //becuase none of the other conditions were true.

/* 4. Switch--If we are testing for many conditions, if-else-if chains work, but
can sometimes make for hard to read code.  The example above is simple code, but
not the easiest to read.  A switch statement will accomplish the same goal, but
with code that’s easier to read. We begin with a switch statement and test it 
against cases.  When one is true, the code will execute (think like turning the 
switch on).  There is a break statement after each case to ensure that the rest 
of the code does not run. End the switch statement with a default which will
run if none of the conditions are met. 
*/


switch (dayOfWeek) {
  
  case "Monday":
    console.log("It's Monday, do some homework!");
    break;
  
  case "Tuesday":
    console.log("Tuesday's grey, do some homework!");
    break;
    
  case "Wednesday":
    console.log("Yep, more homework.");
    break;
    
  case "Thursday": 
    console.log("Yay, homework!");
    break;
    
  case "Friday": 
    console.log("I'll still study.");
    break;
    
  default:
    console.log("I can't keep track anymore.");  //<--this executes
 }
//^^^ Much easer to read