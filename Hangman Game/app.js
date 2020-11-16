const word = document.getElementById('word');
const wrong = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playBtn = document.getElementById('play-button');
const notification = document.getElementById('notification-container');
const finalMsg = document.getElementById('final-message');
const figureParts = document.querySelectorAll('.figure-part')

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

function showNotification() {
    notification.classList.add('show');

    setTimeout( () => {
        notification.classList.remove('show')
    }, 1500)
}

function updateWrongLetters() {
    console.log(wrongLetters)
    wrong.innerHTML = `
    ${wrongLetters.length > 0 ? '<h3>Wrong Letters</h3>' : ''}
    ${wrongLetters.map( letter => `<span>${letter}</span>`)}
    `
    
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;
        if (index < errors) {
            part.style.display = 'block'
        } else {
            part.style.display = 'none'
        }
    })
if (figureParts.length === wrongLetters.length) {
            console.log('GAME OVER');
            finalMsg.innerText = "Sorry, please try again!"
            popup.style.display = 'flex'
        }
}

playBtn.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
    popup.style.display = 'none'
    displayWord();
    updateWrongLetters();
})

window.addEventListener('keydown', e => {
    if (e.keyCode >= 65 && e.keyCode <= 90) {

        const letter = e.key.toLowerCase();

        if (selectedWord.includes(letter)) {
                if (!correctLetters.includes(letter)) {
                    correctLetters.push(letter)
                } else {
                    showNotification();
                }
            } else {
                
                    if (!wrongLetters.includes(letter)) {
                        wrongLetters.push(letter)

                        updateWrongLetters();
                    } else {
                        showNotification();
                    
                }
        }
        displayWord();
    }
})

displayWord();
