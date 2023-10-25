function ex(){
    console.log(num);
    num--;
    if(num === 0){ //=== return true if both side have same datatype and same value
        return;
    }
    ex();
}
var num = 5;
ex();