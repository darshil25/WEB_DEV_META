//here i type code that will give error and by using try and catch we will handle it

// console.log(a+b);
// console.log("Now this line finally printed");

//we can throw error by intentionally

// throw new ReferenceError();

try { //in try block code will entered that can throw error
    console.log(a+b);
} catch (error) { //in catch block object have to be inserted here it is 'error'
    console.log(error);
    console.log("This code has errors and it saved in log")
}
console.log("Now this line finally printed");