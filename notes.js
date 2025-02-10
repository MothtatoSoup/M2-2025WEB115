
// L O G S //

//console.log('This message will show up in the console! Yippeee')
//console.log(document) // Document means HTML, this will show the html code in the console
//console.dir(document) // more in depth 



// A L E R T S //

// alert("WEEEWOOOWEEEWOOOO") // brings up an alert box on page. Everytime you save it'll show up

//window.onload = function(){ // shows alert only when loading the first time
//    alert("YIPEEEEEE") // `you can use back ticks` if quotes dont work
//}



// W R I T E   T O   I D //

//document.getElementById("myH1").innerHTML = "I Love JavaScript" ; // gets the header and ovverides it with this
//document.getElementById("myP").textContent = "YIPPPPEEEEEEEEEEEEEEEEEE" ; // does the same as ^ 



// S T Y L I N G   P A G E   E L E M E N T S //

//document.body.style.color = "purple"
//document.body.style.backgroundColor = "black"
//document.body.style.fontSize = "2em"



// P R O M P T S //

// 'let' is a normal var that you want to change
// 'const' is static, cant change
//const student = prompt("What is ur Name?") //Asks a question and stores the answer in the var
//console.log(student)

// writes a paragraph on the page w/ student name (need back ticks when using variable)

// Old Ver
//document.write(`<p>hello ${student}</p>`) // Writes to docuemnt but doesnt work with script differ

// New Ver (Modern web dev)
//const student = prompt("What is ur name?")
//const messageElement = document.createElement('p') //Creating new 'p' element
//messageElement.textContent = `Hello, ${student}` // Sets text content of the new 'p' element
//document.body.appendChild(messageElement) // ataches the element to the end of the doc
// This ensures the content is added w/o overidding any page content


// E V E N T   L I S T E N E R S //
/*
document.getElementById("myH1").addEventListener("click", function(){
    // what happens when you click the header
    document.getElementById("myH1").style.color = "red"
})

document.getElementById("myH1").addEventListener("mouseover", function(){
    document.getElementById("myH1").style.color = "purple"
})

document.getElementById("myP").addEventListener("dblclick",function(){
    document.getElementById("myP").style.fontSize = "2em"
})

document.getElementById("MyButton").addEventListener("click", function(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
})

// D I F F   B E T W E E N .innerHTML and .textContent //

// .textContent would output: This is a paragraph!
// .innerHTML would output: <p>This is a paragraph!<p>
// If getting input, use textContent. If you use innerHTML, ppl could type in html code and the site would acccept it and run it! 


// V A R I A B L E S //

let x; // Declaring
const y = 10; //Init to a val b4 use, inizilization
let z = 5;

x = "yippee  ";
z = true; // boolean

// don't use name for var name

let online = false;
console.log(online)
console.log(`Online status ${online}`)

// M A T H  O P E R A T O R S //
// +,-,**,*,/,%,++,--
let student = 24;
student = student+1;
console.log(student)
student++;


//PEMDAS order
// typeof thing tells you the type of te thing isssss

let myAge = window.prompt("How old are u?5 555")
console.log(myAge)
console.log(typeof myAge)
myAge = Number(myAge) //nuuuummmberrererer converts to
console.log(typeof myAge)
// if you convert a strimnbg to boolean its is just checking 9fid string is emptyd
// boolean ceck if number is 0 r- not                          yipreeee



*/









// M O D U L E   3 //

/*
//DEBUGGING IN JAVA//
//4 TYPES OF ERRORS//

1. load-time ERRORS (aka syntax errors)
    grammer, spell mistakes, inclomplete {}
    happens when page first loads (load-time error)

2. Logic Error
    Code runs properly but unexspectidly
    doesn't work the way you want to

3.Run-Time error
    Code is correct syntax, but the data (vars, numbers, etc..) is wrong
    Interpreter is unable to run the code
    Exection of code throws an errr
    EX: refrencing an undeclared var, / 0,

4. User Error
    When the user does smthing unexpecdid 



//DEBUGING METHODS + TOOLS//
1. Tracing: The examination of individual statements of an executing program.
Displaying alert boxes at diff. Points to show results intermittenly

2. logging - console.log() instead of alerts (tracing)

3. commenting out code

4. Break Mode and Break Points
    Break mode: mode for running a program in which execution is paused/suspended to allow you to revive the current state of variables and functions
    little red dots

5. scope window - scope of vars when pause
6. watch window 
7. Call Stack - Shows order/hierchy of functions


Try - Tries potentially buggy code (will still run code)
Catch - Catches Errors and outputs something else (need w/ try)
Finally - Always execute (no matter what) Used to close files. connecrions and release reasources. Used to clean up after
    Not neccesary but useful


Try{
throw new Error ("") throw will output the error
}
catch(error){
still need a catch though


console.error(error) > console.log(error)

"use strict"; all syntax errors will be flagged (ending ;)


}

*/

// M O D U L E   4 //

/*
// I F //
let age = 25;
if (age >= 21){
    console.log("You are legale");
}
else{
    console.log("Yall is minr");
}


//Nested//
let hasLicense = true
if (age >= 16){
    console.log("ur old enough to drive");
    if (hasLicense == true){
        console.log("You have a license");
    }
    else{
        console.log("U dont have license");
    }
}
else{
    console.log("ur not old enough to drive");
}


// else if //
// Social media //

age = 101

if (age >= 13 && age < 100){ // && doesn't work
    console.log("Old enough to watch brain rot")
}
else if(age < 0){
    console.log("Your wayyyy to young. You haven'y even been born yet. Bad Parenting  right there");
}
else if(age = 0){
    console.log("Wow your Parents let a baby on TikTok? Shame...");
}
else if(age >= 100){
    console.log("You old. Congrats on living that long.");
}
else{
    console.log("You must be 13+ to use TikTok");
}



// Functions //
// resuable
//function functionName(parameters) {
 //   
//}

function HappyBDay(bdAge,userName) {
    console.log("Happy Birthday to you!");
    console.log("You belong in a zoo");
    console.log("You look like a monkey");
    console.log("Happy Birthday to you!");
    console.log(`Congrats on turning ${bdAge}, ${userName}`);
}

HappyBDay(45,"Evan");
HappyBDay(61,"Mr.Gardner");
HappyBDay(56,"Marcus");


function add(x,y) {
    let result = x + y;
    return result;
}
let answer = add(2+3);
console.log(answer);

function evenOdd(x) {
    if (x % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}


//shorthand

function isEven(x) {
    return x % 2 == 0 ? true : false; //ternary operator
}

function isvalidemail(email) {
    return email.includes("@") ? true : false;
}
*/


// WHile loops
// repeats code WHILE something is true
/*
let myUsername = "";
while (myUsername == ""){
    console.log('username not found');
    myUsername = window.prompt('enter your name');
}


// do while
// Run code first, then check condition

let myName;

do {
    myName = window.prompt("Enter ur name");
} while (myName == "" || myName == null); // || or

*/
let loggedIn = false;
let myNewUser;
let myPass;

while (!loggedIn) {
    myNewUser = window.prompt("Enter your username?");
    myPass = window.prompt("Enter your pass");
    if (myNewUser == "user" && myPass == "pass") {
        loggedIn = true;
    }else{
        console.log("invalid credintials");
    }
}


// For loops
// Run a loop LIMITED AMNT OF TIMES

for (let i = 0; i <= 10; i+=2) { // let i = 0; 1 < x; i ++ (up one each loop)
    console.log(i);
}

// continue skips a loop
// break exits the loop

// M O D U L E    5 

// Lists in Python = 1D Arrays in Java Script
// 1D array
let fruits = ["dragonfruit","banana","Durian"]

fruits.push("coconut") // add element to the end
fruits.pop() // removes the end element
fruits.unshift("mango") // adds element to the begining
fruits.shift() // removes the first element

let fruitLen = fruits.length // the length of the 1D array "fruits"

let index = fruit.indexOf("dragonfruit") // gets the index of an element
// if the element doesn't exists it will return -1
// You can use this in an if statment to check if smthing is in a list (if .indexOf() == -1 ..)

//Iterate thru loop
for(let i = 0; i < fruitLen; i++){
    console.log[1];
}

//Backwards
for (let i = fruitLen -1; i >= 0; i--){
    console.log[i];
}

//Enhanced for loop
for(let fruit of fruits){
    console.log(fruit);
}

// Sort methods
fruits.sort(); // sorts alphabetacally A-Z
fruits.sort().reverse(); // sorts reverse Z-A

