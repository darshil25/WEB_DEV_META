var birds = {
    haswings: true,
    canfly: true,
    hasFeathers: true
}

var eagle = Object.create(birds);
console.log(eagle);
console.log(eagle.hasFeathers);
console.log(eagle.canfly);
console.log(eagle.haswings);

var penguin = Object.create(birds);
penguin.canfly = false;
console.log(penguin)