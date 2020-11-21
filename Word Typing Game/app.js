const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const text = document.getElementById('text');
const difficulty = document.getElementById('difficulty');

console.log(difficulty.value)
const wordArray = ['Apple', 'Orange', 'Banana', 'Tangerine', 'Lime', 'Cherry']

let word = document.getElementById('word')
let timer = document.getElementById('time')
let score = document.getElementById('score')

score.innerHTML = 0;
time.innerText = +10;

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');
    
})

function getNewWord() {
    word.innerText = wordArray[Math.floor(Math.random() * wordArray.length)]
    }

function clearInput() {
    text.value = ''
}

function difficultySelect() {
    console.log(difficulty.value)
}

function gamePlay() {
    let answer = text.value;
    const newWord = word.innerText;

    if (answer === newWord) {
        score.innerText++;
        time.innerText = +time.innerText + 5;
        clearInput();
        getNewWord();
    }
     console.log(newWord);
}

difficulty.addEventListener('change', difficultySelect)
text.addEventListener('input', gamePlay)

getNewWord();