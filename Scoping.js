// Let us differentiate between function scoped and block scoped variables.

// Here is an example to show how to create function scoped variables

var a = 12; // This is accessed globally
 function myFunction(){
   console.log(a);

   var b = 13; // Accessible throughout the Function
   if(true){
     var c = 14; // Accessible throughout the function
     console.log(b);
   }
   console.log(c);
 }

 myFunction();

 /* Output of this above code is :
      12
      13
      14
*/

// Declaring Block Scoped Variables. These varibles are declared by using let keyword

// Here is an example for Block Scoped Variables

let a = 12;
function myFunction(){
  console.log(a);

  let b = 13; // accessible throughout Function
  if(true){
    let c =14; // accessible throughout the if statement
    console.log(b);
  }
  console.log(c);
}

myFunction();

// This code throws an error becasue c is not accessible beyond the blockscope.
