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

// Init Time

let time = 10;

// Init Points

let points;

function getRandomWord() {
    word.innerHTML = words[(Math.floor(Math.random() * words.length))]
    console.log(getRandomWord);
}

function updateWord() {
    getRandomWord();
}

getRandomWord();

// Add Event Listener

text.addEventListener('input', e => {
    const answer = e.target.value;
    if (answer === word.innerHTML) {
        console.log('match');

        updateWord();

        //Clear Input
        text.value = '';
    }

    // clear input
    
})