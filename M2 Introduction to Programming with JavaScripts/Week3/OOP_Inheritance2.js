class Lights {
    constructor(color, lightOn){
        this.color = color;
        this.lightOn = lightOn;
    }

    toggleLight(){
        this.lightOn = !this.lightOn;
    }
    lightStatus(){
        console.log("Lights on ?", this.lightOn);
    }
    self(){
        console.log(this);
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var bike = new Lights("Green", false);
console.log(bike.getPrototype());
