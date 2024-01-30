function addTwo(a, b){
    return a + b;
}
function addThree(a, b, c){
    return a + b + c;
}
function addFour(a, b, c, d){
    return a + b + c + d;
}
export default addFour; //can be used only one time in export
export {addTwo, addThree}; //can be used multiple times for different part of code in export