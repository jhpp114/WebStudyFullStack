let winningScore = 5;

function mainLogic() {
    let currentScore = 0;
    let currentScore2 = 0;
    let player1Board = document.querySelector('#scoreOne');
    let player1Btn = document.querySelector('#playerOne');
    let player2Board = document.querySelector('#scoreTwo');
    let player2Btn = document.querySelector('#playerTwo');
    let winningNumber = document.querySelector('input[type=number]');
    let totalPlayNum = document.querySelector('#playingNum');
    // reset btn
    let resetBtn = document.querySelector('#reset');

    let isDone = false;

    player1Btn.addEventListener("click", function() {
        if (!isDone) {
            currentScore++;
        } 
        if (winningScore <= currentScore) {
            player1Board.textContent = currentScore;
            player1Board.classList.add('winner');
            isDone = true;
        } else {
            player1Board.textContent = currentScore;
        }
    });
    player2Btn.addEventListener("click", function() {
        if (!isDone) {
            currentScore2++;
        }
        if (winningScore <= currentScore2) {
            player2Board.textContent = currentScore2;
            player2Board.classList.add('winner');
            isDone = true;
        } else {
            player2Board.textContent = currentScore2;
        }
    });
    // reset btn
    resetBtn.addEventListener("click", function() {
        reset();
    });

    function reset() {
        isDone = false;
        currentScore = 0;
        currentScore2 = 0; 
        player1Board.textContent = currentScore;
        player1Board.classList.remove('winner');
        player2Board.textContent = currentScore2;
        player2Board.classList.remove('winner');
        // totalPlayNum.textContent = 5;
       
    }
    // change winning number
    winningNumber.addEventListener("change", function() {
        totalPlayNum.textContent = this.value;
        winningScore = this.value;
        reset();
    });
    
}



function init() {
    mainLogic();
}
init();