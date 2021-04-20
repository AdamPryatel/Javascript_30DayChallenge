const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';          // blends color, this can be optional in the code

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event){
    if(!isDrawing) return;  // stop the function from running when they are not moused down
    console.log(event);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;                                             // initiates hsl() color. inputs "0" for red.
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);   // start from
    ctx.lineTo(event.offsetX, event.offsetY);   // go to
    ctx.stroke();
    [lastX, lastY] = [event.offsetX, event.offsetY];     // Array

    hue++                                                                                   // initiates hsl()color red and increments it after each time the function runs
    if(hue >= 360){
        hue = 0;
    }        

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
    {
        direction = !direction;      // flips the direction
    }

    if(direction){              // if direction = true
        ctx.lineWidth++         // increments the line width
    }
    else{
        ctx.lineWidth--         // decrements line width
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];     // Array
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);