// first of all get canvas movement.
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

let controlColor = document.getElementsByClassName('js_Colors');
let rangeControler = document.getElementById('js_Range');

let modeBtn = document.getElementById('jsMode');
let saveBtn = document.getElementById('jsSave');
// context basic setup
const CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

const DEFAULT_COLOR = '#2c2c2c'; 
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function canvasMovementHandler(event) {
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    // when the painting is false
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function startPainting() {
    painting = true;
}

function canvasStopDrawing() {
    painting = false;
}

// change color
function handleColorClick(event) {
    let color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

// handle range to get linewidth
function handleRange(event) {
    let brushSize = event.target.value;
    // console.log(brushSize);
    ctx.lineWidth = brushSize;
}


// handle click event on canvas
function cavasClickHandler(event) {
    if (filling === false) {

    } else {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }    
}
// to prevent user right click canvas
function canvasContextHandler(event) {
    event.preventDefault();
}

// save image
function saveImageHandler(event) {
    const a = document.createElement('a');
    const image = canvas.toDataURL("image/png");
    a.href = image;
    a.download = "DownImageFromPaintJS";
    a.click();
}

// handle the btn mode either fill or paint
function modeHandler(event) {
    // means the btn is currently filling
    if (filling === false) {
        filling = true;
        modeBtn.innerText = 'Paint';
    } else {
        filling = false;
        modeBtn.innerText = 'Fill';
    }
}

function init() {
    if (canvas) {
        canvas.addEventListener("mousemove", canvasMovementHandler);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", canvasStopDrawing);
        canvas.addEventListener("mouseleave", canvasStopDrawing);
        canvas.addEventListener("click", cavasClickHandler);
        canvas.addEventListener("contextmenu", canvasContextHandler);
    }
    // assign event listener
    Array.from(controlColor).forEach(color => 
        color.addEventListener("click", handleColorClick));

    if (rangeControler) {
        rangeControler.addEventListener('input', handleRange);
    }
    if (modeBtn) {
        modeBtn.addEventListener('click', modeHandler)
    }
    if (saveBtn) {
        saveBtn.addEventListener('click', saveImageHandler);
    }
}

init();