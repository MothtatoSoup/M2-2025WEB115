
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
