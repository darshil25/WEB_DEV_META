//var
//1. var can be acessed if it declared later in code
console.log(hey)
var hey
//2. you can assign same var to different values with same name and it gives last stored value
var op = '1'
var op = '2'
var op = '3'
console.log(op)

//let
//1. let can't be acessed before initialization even it declared later in code
// console.log(a); //give reference error
// let a;
let a;
console.log(a);
//2. same variable can't declared again
// let b = 'op';
// let b = 'bro'; //direct gives syntax error
//3. but we can reassign value
let b = 'op';
b = 'ko';
console.log(b);

//const
//1. const can't be acessed before initialization even it declared later in code 
//also at initialization it can't be empty, we have to declare it with value
// console.log(dar); give syntax error
// const dar;
//2. we can't reassign value in const
// const dar = 'hello'
// dar = 'bhai';   //gives TypesError
// console.log(dar);