let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 4;
let position = 0;
let movSpeed = speed;
let radius = 40;

function moveball(){
    if(position + radius > 640){
        movSpeed = -speed;
    }
    else if(position - radius < 0){
        movSpeed = speed;
    }
    position += movSpeed;
}

function drawball(){
    context.clearRect(0, 0, 640, 480);
    context.fillStyle = "#62667f";
    context.beginPath();
    context.arc(position, 50, radius, 0, 2*Math.PI);
    context.fill();
}

function animate(){
    moveball();
    drawball();
    window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);