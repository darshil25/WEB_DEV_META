//FP
// var shoePrice = 100;
// var tax = 1.2;

// function total(Price, tax){
//     return Price*tax;
// }

// console.log(total(shoePrice, tax));

var shoe = {
    price: 100,
    tax: 1.2,
    total: function(){
        console.log(shoe.price*shoe.tax);
    }
}
shoe.total(); //120

var shoe2 = {
    price: 50,
    tax: 1.2,
    total: function(){
        console.log(this.price*this.tax); //this can be used instead of object name
    }
}
shoe2.total(); //60