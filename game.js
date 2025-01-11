const resetButton = document.getElementById('resetButton');
const submitButton = document.getElementById('submitButton');
const letter_s    = document.getElementById('image_s')
const letter_t    = document.getElementById('image_t')
const letter_o    = document.getElementById('image_o')
const letter_c    = document.getElementById('image_c')
const letter_k    = document.getElementById('image_k')
const box_s       = document.getElementById('boxs')
const box_t       = document.getElementById('boxt')
const box_o       = document.getElementById('boxo')
const box_c       = document.getElementById('boxc')
const box_k       = document.getElementById('boxk')
const heart1      = document.getElementById('heart1')
const heart2      = document.getElementById('heart2')
const heart3      = document.getElementById('heart3')
const scoreDisplay = document.getElementById('score');

let score = 0;
let lives = 3;
let Letters = ['s', 't', 'o', 'c', 'k'];
let knownLetters = [];

function startGame() {
    score = 0;
    lives = 3;
    resetButton.classList.add('hidden');
    letter_s.classList.add('hidden')
    letter_t.classList.add('hidden')
    letter_o.classList.add('hidden')
    letter_c.classList.add('hidden')
    letter_k.classList.add('hidden')
    heart1.classList.remove('hidden')
    heart2.classList.remove('hidden')
    heart3.classList.remove('hidden')
    box_s.classList.remove('showText');
    box_t.classList.remove('showText');
    box_o.classList.remove('showText');
    box_c.classList.remove('showText');
    box_k.classList.remove('showText');
    scoreDisplay.value = score;
}

function endGame(won) {
    if (won) {
        alert('You won!');
    } else {
        alert('You lost!');
    }
    lives = 3;
}

resetButton.addEventListener('click', startGame);
submitButton.addEventListener('click', function() {
    const input = document.getElementById('input');
    const value = input.value;
    console.log(value);
    if (Letters.includes(value) && !knownLetters.includes(value) && value.length === 1) {
        knownLetters.push(value);
        score += 20;
        document.getElementById('image_' + value).classList.remove('hidden');
        document.getElementById('box' + value).classList.add('showText');
    } else if (value === 'stock' || knownLetters.length === 5) {
        letter_s.classList.remove('hidden');
        letter_t.classList.remove('hidden');
        letter_o.classList.remove('hidden');
        letter_c.classList.remove('hidden');
        letter_k.classList.remove('hidden');
        score = 100;
    } else if (value.length > 1) {
        lives = 0;
    } else {
        document.getElementById('heart'+lives).classList.add('hidden');
        lives--;
    }
    if (lives === 0) {
        endGame(false);
    } else if (score === 100) {
        endGame(true);
    }
    scoreDisplay.value = score;
    resetButton.classList.remove('hidden');
});
document.querySelector('.C').addEventListener('click', function () {
    this.classList.toggle('flipped');
});
document.querySelector('.K').addEventListener('click', function () {
    this.classList.toggle('flipped');
});
document.querySelector('.O').addEventListener('click', function () {
    this.classList.toggle('flipped');
});
document.querySelector('.T').addEventListener('click', function () {
    this.classList.toggle('flipped');
});
document.querySelector('.S').addEventListener('click', function () {
    this.classList.toggle('flipped');
});
startGame();
