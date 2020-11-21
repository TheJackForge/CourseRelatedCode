const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const text = document.getElementById('text');


const wordArray = ['Apple', 'Orange', 'Banana', 'Tangerine', 'Lime', 'Cherry']

let word = document.getElementById('word')
let time = document.getElementById('time');
let score = document.getElementById('score');

score.innerText = +0;
time.innerText = 10;

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');
})

function getNewWord() {
    word.innerText = wordArray[Math.floor(Math.random() * wordArray.length)]
    }

function countdown() {
        time.innerText--;
    }

function clearInput() {
    text.value = ''
}

function gamePlay() {
    let answer = text.value;
    const newWord = word.innerText;

    if (answer === newWord) {
        time.innerText + 4;
        score.innerText++;
        clearInput();
        getNewWord();
    }
     console.log(newWord);
}


text.addEventListener('input', gamePlay)

getNewWord();