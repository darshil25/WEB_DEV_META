const car = {
    engine: true,
    steering: true,
    speed: "Slow"
}

const supercar = Object.create(car); //inherite properties from car object
supercar.speed = "Fast";
console.log("The sportsCar object: ", supercar);

//two for type loop 1.for each 2.for in

console.log('----- for-in is unreliable -----');
for (i in supercar){
    console.log(i);
}

console.log('🤨', "Iterating over object AND its prototype!");

console.log('----- for-of is reliable -----');
for(i of Object.keys(supercar)){
    console.log(i, ':', supercar[i]);
}
console.log('@', "Iterating over object's OWN PROPERTIES only!"); //acessing supercar properties only not car's