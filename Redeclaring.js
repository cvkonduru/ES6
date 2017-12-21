// Let us see how to redeclare the variables.
/*When we generally declare a variable with var keyword that is already declared using var keyword in the same scope
   then it is overwritten.*/

   var a = 0;
   var a = 1;

   console.log(a); // value of a will be 1.

   function myFunction() {
     var b = 2;
     var b = 3;
     console.log(b); // value of b will be 3
   }

   myFunction();



/*If we declare the varibles using let keyword they don't behave in the same way*/

let a = 0;
let b = 0; // Type Error

function myFunction(){
  let b = 2;
  let b = 3; // Type Error
  if(true){
    let c  = 4;
    let c = 5; // Type Error
  }
}

myFunction();


// Now let us consider an other example

var a = 1;
let b = 2;

function myFunction() {
  var a = 3; // different variable
  let b = 4;// different variable

  if(true){
    var a = 5; // overwritten
    let b = 6; // different variables

    console.log(a);
    console.log(b);
  }

  console.log(a);
  console.log(b);

}

myFunction();

console.log(a);
console.log(b);
