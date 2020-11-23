const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const text = document.getElementById('text');
const difficulty = document.getElementById('difficulty');
const startbtn = document.getElementById('start-btn')

const wordArray = ['Apple', 'Orange', 'Banana', 'Tangerine', 'Lime', 'Cherry']


let word = document.getElementById('word')
let timer = document.getElementById('time')
let score = document.getElementById('score')

score.innerHTML = 0;
time.innerText = 10;


getNewWord();

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');
    console.log('test')
})

function getNewWord() {
    word.innerText = wordArray[Math.floor(Math.random() * wordArray.length)]
    }

function clearInput() {
    text.value = ''
}

function difficultySelect() {
    let difficultyValue = difficulty.value;
    gamePlay(difficultyValue);
}

function gamePlay(difficultyValue) {
    let answer = text.value;
    const newWord = word.innerText;
    console.log(typeof difficultyValue);
    if (answer === newWord) {
        if (difficultyValue === 'Easy') {
            time.innerText = +time.innerText + 4;2
            console.log('Easy Mode')
        } else if (difficultyValue === 'Medium') {
            time.innerText = +time.innerText + 3;
            console.log('Medium Mode')
        } else if (difficultyValue === 'Hard') {
            time.innerText = +time.innerText + 2;
            console.log('Hard Mode')
        }


        score.innerText++;
        clearInput();
        getNewWord();
    }
    
}

function startTimer() {
    setInterval(function () {
        time.innerText--;
    }, 1000)
}

difficulty.addEventListener('change', difficultySelect)
text.addEventListener('input', difficultySelect)
startbtn.addEventListener('click', startTimer)
