const word = document.getElementById('word');
const wrong = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playBtn = document.getElementById('play-button');
const notification = document.getElementById('notification-container');
const finalMsg = document.getElementById('final-message');

const wordsArray = ['javascript', 'python', 'syntax', 'programming', 'constructor', 'boolean', 'nested', 'operator', 'variable', 'truthy', 'falsy', 'console', 'function', 'array', 'hoisting', 'loops', 'modulus', 'objects', 'alert', 'strings', 'prompt', 'concatenation']

let selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]

let correctLetters = [];
let wrongLetters = [];


function displayWord() {
    word.innerHTML = `
    ${selectedWord
    .split('')
    .map( 
        letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </span>
            `
    )
    .join('')}
    `;

    const innerWord = word.innerText.replace(/\n/g, '');

    if (innerWord === selectedWord) {
        finalMsg.innerText = "Congratulations! You won!";
        popup.style.display ='flex'
    }
}

function playAgain() {
    popup.style.display = 'none'
}

playBtn.addEventListener('click', playAgain)


displayWord()
