//Take the solution of the previous task 1. Modify it by extracting the script content into an 
//external file alert.js, residing in the same folder

alert("I'm JavaScript!")

//Variable declaration
//a. Declare two variables: admin and name.
//b. Assign the value "John" to name.
//c. Copy the value from name to admin.
//d. Show the value of admin using alert (must output “John”).

//let admin = 'john'
//let name = 'john'
//alert("Hello " + admin)

//What is the output of the script?
//a. let name = "Ilya";
//b. alert( `hello ${1}` ); // ?
//c. alert( `hello ${"name"}` ); // ?
//d. alert( `hello ${name}` ); // ?

//let name = "Ilya"
//alert( `hello ${1}` );// hello 1
//alert( `hello ${"name"}` );//hello name
//alert( `hello ${name}` );//hello ilya


//Create a web-page that asks for a name and outputs it.

//let a = prompt("Enter your name")
//alert("Hello "+ a)

//Here’s a code that asks the user for two numbers and shows their sum.It works 
//incorrectly. The output in the example below is 12 (for default prompt values).Why? Fix 
//it. The result should be 3.
//a. let a = prompt("First number?", 1);
//b. let b = prompt("Second number?", 2);
//c. alert(a + b); // 12

//let a = prompt("First number?", 1);
//let b = prompt("Second number?", 2);
//let c = Number(a)
//let d = Number(b)
//let e = c+d
//alert("Addition of two number "+ e); 


//if ("0") {
// alert( 'Hello' );
// } // Hello 


//10. Using if..else, write the code which gets a number via prompt and then shows in alert:
//a. 1, if the value is greater than zero,
//b. -1, if less than zero,
//c. 0, if equals zero.

//let b = prompt("Enter your number 1,-1,0")
//let a = parseInt(b)
// if (a>0){
//    alert("the value is greater than zero")
// }
// else if (a<0) {
//    alert("less then zero")    
// } else if (a == 0){
//    alert("Equals zero")
// }
//


//let result;
//let x = prompt("Enter any number between 1 to 10")
//let y = prompt("Enter any number between 1 to 10")
//let a = Number(x)
//let b = Number👍
// if (a + b < 4 ) {
// result = 'Below';
// } else {
// result = 'Over';
// }//


//alert( null || 2 || undefined );//2
//alert( alert(1) || 2 || alert(3) );//1, 2
//alert( 1 && null && 2 );//null
//alert( null || 2 && 3 || 4 );// 3


//Write an if condition to check that age is between 14 and 90 inclusively

//let age = prompt("Enter your age")
//let age1 = Number(age)
//if (age1>14 && age1<90){
//    alert("Your age is full file")
//}
//else{
//    alert("Not now")
//}


//if (-1 || 0) alert( 'first' );//1
//if (-1 && 0) alert( 'second' );
//if (null || -1 && 1) alert( 'third' );//2


//Write the code which asks for a login with prompt.

//let login = "Admin"
//let passw = "Pass@123"
//
//let pagel = prompt("Enter admin name")
//let pass = prompt("Enter password for login" )
//
//if (pagel == login && passw == pass){
//    alert("Welcome admin")
//}

//else{
//    alert("Incorrect password or name")
//}


//let userName = prompt("Who's there?", "");
//
//if (userName == "Admin") {
//  let password = prompt("Enter your password", "");
//
//  if (password == null || password == "") {
//    alert("Canceled");
//  } else if (password == "TheMaster") {
//    alert("Welcome!");
//  } else {
//    alert("Wrong password");
//  }
//} else if (userName == null || userName == "") {
//  alert("Canceled");
//} else {
//  alert("I don't know you");
//}


//What is the last value alerted by this code? Why?
 //let i = 3;

// while (i) {
// alert( i-- );
// }// 3, 2, 1


//Use the for loop to output even numbers from 2 to 10

//let i = 2
//while (i<=10){
//    console.log(i)
//    i=i+2
//}

//Output prime numbers
//a. For n = 10 the result will be 2,3,5,7


//for(i = 2; i<=10; i=i+1) {
//    if(i%2==1){
//        console.log(i)
//    }
//    else if (i == 2){
//        console.log(i)
//    }
//}