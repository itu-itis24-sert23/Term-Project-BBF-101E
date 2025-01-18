const resetButton   = document.getElementById('resetButton');
const submitButton  = document.getElementById('submitButton');
const letter_s      = document.querySelector('.S')
const letter_t      = document.querySelector('.T')
const letter_o      = document.querySelector('.O')
const letter_c      = document.querySelector('.C')
const letter_k      = document.querySelector('.K')
const heart1        = document.getElementById('heart1')
const heart2        = document.getElementById('heart2')
const heart3        = document.getElementById('heart3')
const scoreDisplay  = document.getElementById('score');

let score           = 0;
let lives           = 3;
let Letters         = ['S', 'T', 'O', 'C', 'K'];
let knownLetters    = [];

function startGame() {
    score = 0;
    lives = 3;
    knownLetters = [];
    document.getElementById('input').disabled = false;
    if (letter_s.classList.contains('flipped')) {
        letter_s.classList.toggle('flipped')
    }
    if (letter_t.classList.contains('flipped')) {
        letter_t.classList.toggle('flipped')
    }
    if (letter_o.classList.contains('flipped')) {
        letter_o.classList.toggle('flipped')
    }
    if (letter_c.classList.contains('flipped')) {
        letter_c.classList.toggle('flipped')
    }
    if (letter_k.classList.contains('flipped')) {
        letter_k.classList.toggle('flipped')
    }
    updateScore(score);
    heart1.classList.remove('hidden')
    heart2.classList.remove('hidden')
    heart3.classList.remove('hidden')
    resetButton.classList.add('hidden');
    submitButton.disabled = false;
}

function handleLetter(value) {
    let letter = document.querySelector('.'+ value.toUpperCase());

    if (!letter.classList.contains('flipped')) {
        document.querySelector('.'+ value.toUpperCase()).classList.toggle('flipped');
    }
}

function updateScore(score) {
    scoreDisplay.innerText = "Score: " + score;
}

function endGame(won) {
    if (won && submitButton.disabled === false) {
        alert('You won!');
    } else if(submitButton.disabled === false) {
        alert('You lost!');
    }
    document.getElementById('input').disabled = true;
    submitButton.disabled = true;
}

function game() {
    input = document.getElementById('input');
    value = input.value.toUpperCase();
    input.value = '';
    if (lives === 0) {
        return;
    }
    if (value === '') {
        return;
    } else if (value === 'STOCK' || knownLetters.length === 5) {
        handleLetter('s');
        handleLetter('t');
        handleLetter('o');
        handleLetter('c');
        handleLetter('k');
        knownLetters = ['S', 'T', 'O', 'C', 'K'];
        score = 100;
        updateScore(score);
    } else if (Letters.includes(value) && !knownLetters.includes(value) && value.length === 1){
        knownLetters.push(value);
        score += 20;
        handleLetter(value);
        updateScore(score);
    } else if(!knownLetters.includes(value) && value.length === 1) {
        document.getElementById('heart'+lives).classList.add('hidden');
        lives--;
    } else if(knownLetters.includes(value)) {
        return;
    } else {
        lives = 0;
        document.getElementById('heart'+1).classList.add('hidden');
        document.getElementById('heart'+2).classList.add('hidden');
        document.getElementById('heart'+3).classList.add('hidden');
    }
    if (knownLetters.length === 5) {
        endGame(true);
    } else if (lives === 0) {
        endGame(false);
    }
    resetButton.classList.remove('hidden');
}

addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        game();
    }
});
resetButton.addEventListener('click', startGame);
submitButton.addEventListener('click', game);

startGame();
