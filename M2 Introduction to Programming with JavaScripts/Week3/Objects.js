const car1 = {
    color: "pink",
    speed: 100
}
console.log(Object.keys(car1)); //object.keys() return key of object
console.log(Object.values(car1)); //object.values() return key of object
console.log(Object.entries(car1)); //object.entries() return key&value of object in [key, value] format

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}