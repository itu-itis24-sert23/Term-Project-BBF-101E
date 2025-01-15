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
    scoreDisplay.value = score;
}

function endGame(won) {
    if (won) {
        alert('You won!');
    } else {
        alert('You lost!');
    }
    submitButton.disabled = true;
}

resetButton.addEventListener('click', startGame);
submitButton.addEventListener('click', function() {
    input = document.getElementById('input');
    value = input.value.toUpperCase();
    input.value = '';
    if (value === 'STOCK' || knownLetters.length === 5) {
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
});
// function startGame() {
//     score = 0;
//     lives = 3;
//     resetButton.classList.add('hidden');
//     letter_s.classList.add('hidden')
//     letter_t.classList.add('hidden')
//     letter_o.classList.add('hidden')
//     letter_c.classList.add('hidden')
//     letter_k.classList.add('hidden')
//     heart1.classList.remove('hidden')
//     heart2.classList.remove('hidden')
//     heart3.classList.remove('hidden')
//     box_s.classList.remove('showText');
//     box_t.classList.remove('showText');
//     box_o.classList.remove('showText');
//     box_c.classList.remove('showText');
//     box_k.classList.remove('showText');
//     scoreDisplay.value = score;
// }

// function endGame(won) {
//     if (won) {
//         alert('You won!');
//     } else {
//         alert('You lost!');
//     }
//     lives = 3;
// }

// resetButton.addEventListener('click', startGame);
// submitButton.addEventListener('click', function() {
//     const input = document.getElementById('input');
//     const value = input.value;
//     console.log(value);
//     if (Letters.includes(value) && !knownLetters.includes(value) && value.length === 1) {
//         knownLetters.push(value);
//         score += 20;
//         document.getElementById('image_' + value).classList.remove('hidden');
//         document.getElementById('box' + value).classList.add('showText');
//     } else if (value === 'stock' || knownLetters.length === 5) {
//         letter_s.classList.remove('hidden');
//         letter_t.classList.remove('hidden');
//         letter_o.classList.remove('hidden');
//         letter_c.classList.remove('hidden');
//         letter_k.classList.remove('hidden');
//         score = 100;
//     } else if (value.length > 1) {
//         lives = 0;
//     } else {
//         document.getElementById('heart'+lives).classList.add('hidden');
//         lives--;
//     }
//     if (lives === 0) {
//         endGame(false);
//     } else if (score === 100) {
//         endGame(true);
//     }
//     scoreDisplay.value = score;
//     resetButton.classList.remove('hidden');
// });
// document.querySelector('.C').addEventListener('click', function () {
//     this.classList.toggle('flipped');
// });
// document.querySelector('.K').addEventListener('click', function () {
//     this.classList.toggle('flipped');
// });
// document.querySelector('.O').addEventListener('click', function () {
//     this.classList.toggle('flipped');
// });
// document.querySelector('.T').addEventListener('click', function () {
//     this.classList.toggle('flipped');
// });
// document.querySelector('.S').addEventListener('click', function () {
//     this.classList.toggle('flipped');
// });
startGame();
