/* let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C:", c); 

let username = window.prompt("what's your name?");
console.log(username);
*/

/*let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myLabel").innerHTML = "Hello " + username;
};  */

/* *********************************************************

//Type Conversion = change the datatyoe of a value to another
//                  (strings, numbers, booleans)
/*
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");
*/

/*

let x;
let y;
let z;
let z1;

x = Number("3.14");
y = String(3.14);
z = Boolean("Pizza");
z1 = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(z1, typeof z1);  */

//const = a variable that can't be changed

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2 * pi * radius;

console.log("The circumference is:", circumference);
