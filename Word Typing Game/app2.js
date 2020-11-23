const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');
const body = document.querySelector('body');

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
    'body'
]

// Init Time and Timer

let time = 10;
const timer = setInterval(updateTimer, 1000)

// Init Points

let points = 0;

function getRandomWord() {
    word.innerHTML = words[(Math.floor(Math.random() * words.length))]
    console.log(getRandomWord);
}

function updateWord() {
    getRandomWord();
}

function updateScore() {
    points++;
    scoreEl.innerHTML = points;
}

function updateTimer() {
    time--;
    timeEl.innerHTML = time;

    if (time === 0) {
        clearInterval();
        gameOver();
    }
}

function gameOver() {
    endgameEl.innerHTML = `
    <h1>Game Over!</h1>
    <h4>Your final score was ${points}</h4>
    <button id="reload">Play Again!</button>
    `
    endgameEl.style.display = 'flex'
    const reload = document.getElementById('reload')
    reload.addEventListener('click', () => {
        location.reload();
    })
}

function backgroundChange() {
    if (points === 5) {
        body.style.backgroundColor = "pink";
    } else if (points === 10) {
        body.style.backgroundColor = "purple";
    } else if (points === 15) {
        body.style.backgroundColor = "blue";
    }
}


getRandomWord();
updateTimer();
text.focus();

// Add Event Listener

text.addEventListener('input', e => {
    const answer = e.target.value;
    if (answer === word.innerHTML) {
        time += 2;
        updateScore();
        updateWord();
        backgroundChange();
        
        //Clear Input
        text.value = '';


    }
})

settingsBtn.addEventListener('click', () =>  {
    settings.classList.toggle('hide')
})