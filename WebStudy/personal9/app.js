/*
colors to use for hardcode parts
255, 0, 0
255, 255, 0
0, 255, 0
0, 255, 255
0, 0, 255
255, 0, 255
*/
// let ascolors = [
//     "rgb(255, 0, 0)"
//     ,"rgb(255, 255, 0)"
//     ,"rgb(0, 255, 0)"
//     ,"rgb(0, 255, 255)"
//     ,"rgb(0, 0, 255)"
//     ,"rgb(255, 0, 255)"
// ];
let numsSquare = 6;
let colors = randColorGenerator(numsSquare);
let squares = document.querySelectorAll('.square');
let answerColor = document.querySelector('#colorPick');
let colorChoose = colorTarget();
let asnwerMessage = document.querySelector('#message');
let myH1 = document.querySelector('h1');
answerColor.textContent = colorChoose;

let easyBtn = document.querySelector('#easyMode');
let hardBtn = document.querySelector('#hardMode');
// easy mode
easyBtn.addEventListener('click', function() {
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    // generating colors 3
    numsSquare = 3;
    colors = randColorGenerator(numsSquare);
    // choose the target color
    colorChoose = colorTarget();
    answerColor.textContent = colorChoose;
    // we also hide other 3 colors
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    asnwerMessage.textContent = "";
});
// hard mode
hardBtn.addEventListener('click', function() {
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    numsSquare = 6;
    colors = randColorGenerator(numsSquare);
    // choose the target color
    colorChoose = colorTarget();
    answerColor.textContent = colorChoose;
    // we also hide other 3 colors
    for (let i = 0; i < squares.length; i++) {
       
            squares[i].style.backgroundColor = colors[i];
        
            squares[i].style.display = 'block';
        
    }
    asnwerMessage.textContent = "";
});


// reset
let refresh = document.querySelector('#resetBtn');
refresh.addEventListener('click', function() {
    // set the text when user click the btn
    this.textContent = "New Colors";
    // regenerate colors
    colors = randColorGenerator(numsSquare);
    // repick the target color
    colorChoose = colorTarget();
    // restate the target color
    answerColor.textContent = colorChoose;
    // reset the background color
    myH1.style.backgroundColor = "steelblue";
    // place them into squres
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    asnwerMessage.textContent = "";
}); 

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    // add click event listener
    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        if (clickedColor === colorChoose) {
            asnwerMessage.textContent = "Correct";
            changeCorrectColors(clickedColor);
            myH1.style.backgroundColor = clickedColor;
            refresh.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            asnwerMessage.textContent = "Try Again";
        }
    });
}

// function to change all colors
function changeCorrectColors(correctColor) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = correctColor;
    }
}

// write a function that generate random color target
function colorTarget() {
    let colorPicked = Math.floor(Math.random() * colors.length);
    return colors[colorPicked];
}

function randColorGenerator(numOfColors) {
    let arr = new Array();
    for (let i = 0; i < numOfColors; i++) {
        arr.push(rgbCreator());
    }
    return arr;
}

// function crate random rgb values
function rgbCreator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let finalColor = `rgb(${r}, ${g}, ${b})`;
    console.log(finalColor);
    return finalColor;
}