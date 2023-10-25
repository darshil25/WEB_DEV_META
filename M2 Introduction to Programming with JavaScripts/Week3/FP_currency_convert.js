//in Functional programming data and functions are separed, while in OOP data are in functions

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function currencyConvert(amount, rate){
    return amount*rate;
}

currencyTwo = currencyConvert(currencyOne, exchangeRate);
console.log(currencyTwo);