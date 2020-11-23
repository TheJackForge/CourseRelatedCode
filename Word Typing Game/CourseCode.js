const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game

const words = [
    'bind',
    'biological',
    'bird',
    'birth',
    'birthday',
    'bit',
    'bite',
    'black',
    'blade',
    'blame',
    'blanket',
    'blind',
    'block',
    'blood',
    'blow',
    'blue',
    'board',
    'boat',
    'body']

// Init word
let randomWord;

// Init Score
let score;

// Init time
let time = 10;

// Set difficulty to value in LS or medium
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generater random word from array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

// Add word to DOM
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

// Update score

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

// Update Time
function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';

    if (time === 0) {
        clearInterval(timeInterval);
        // End game
        gameOver();
    }
}

// Game over, show end screen

function gameOver() {
    endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
        `;
    endgameEl.style.display = 'flex';
    }

addWordToDOM();

// Event Listeners

// Typing
text.addEventListener('input', e => {
    const insertedText = e.target.value;
    
    if(insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        // Clear
        e.target.value = '';

        if(difficulty === 'hard') {
            time += 2;
        } else if (difficulty === 'medium') {
            time += 3;
        } else (difficulty === 'easy') {
            time += 5;
        }

        updateTime();
    }
})

// Settings Button Click

settingsBtn. addEventListener('click', () => {
    settings.classList.toggle('hide')
})

// Settings Select
settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
})