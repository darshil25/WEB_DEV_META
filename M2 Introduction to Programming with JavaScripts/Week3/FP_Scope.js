var globalScope = "This is global scope"; //this can be used globally
function fun(){
    var localScope = "This is local scope"; //this can be used in local scope area(fun() area only)
    console.log(globalScope); //print var and have reference to parent
}
fun();
console.log(localScope);  //since no reference to parent can't execute & throw Reference error