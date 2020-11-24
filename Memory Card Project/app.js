const showBtn = document.getElementById('show')
const hideBtn = document.getElementById('hide')
const addContainer = document.getElementById('add-container')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
const addCard = document.getElementById('add-card')
const cardsContainer = document.getElementById('cards-container')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const clear = document.getElementById('clear')
const current = document.getElementById('current')


// Keep track of current card
let currentCard = 0;

// Store the DOM cards

const cardsEl = [];

// Store the cards data

const cardsData = getCardsData();

function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'))
    return cards === null ? [] : cards ;
}

function setCardsData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
    window.location.reload();
}

function createNewCard() {

        const cardQuestion = question.value
        const cardAnswer = answer.value

        console.log(cardQuestion)
        console.log(cardAnswer)

    if (question && answer) {
        const newCard = {
            question: cardQuestion,
            answer: cardAnswer
        }
        createCards(newCard);
        question.value = ''
        answer.value = ''

        addContainer.classList.remove('show')

        cardsData.push(newCard)
        setCardsData(cardsData);
    }
}

function createCards() {

 cardsData.forEach((card, index) => createCard(card, index))

}

function updateCurrentText() {
    console.log(currentCard)
    current.innerText = `${currentCard + 1} / ${cardsEl.length}`
}

function createCard(data, index) {

    let card = document.createElement('div')
    if (index === 0) {
        card.classList.add('active')
    }

    card.classList.add('card');
    card.innerHTML = `
            <div class="inner-card">
                <div class="inner-card-front">
                    <p>
                        ${data.question}
                    </p>
                </div>
                <div class="inner-card-back">
                    <p>
                        ${data.answer}
                    </p>
                </div>
            </div>
        `
    cardsEl.push(card)

    card.addEventListener('click', ()=> {
        card.classList.toggle('show-answer')
    })

    cardsContainer.appendChild(card)
    addContainer.classList.remove('show')

    updateCurrentText();
}

prevBtn.addEventListener('click', () => {

    cardsEl[currentCard].className = 'card right'

    currentCard = currentCard - 1;

    if (currentCard < 0) {
        currentCard = 0;
    }

    cardsEl[currentCard].className = 'card active'

    updateCurrentText();
    console.log('next')
})

nextBtn.addEventListener('click', () => {
 
    cardsEl[currentCard].className = 'card left'
    
    currentCard = currentCard + 1;

    if (currentCard > cardsEl.length - 1) {
        currentCard = cardsEl.length - 1;
    }
    cardsEl[currentCard].className = 'card active'
 
    updateCurrentText();
    console.log('next')
})

showBtn.addEventListener('click', () => {
    addContainer.classList.add('show')
})

hideBtn.addEventListener('click', () => {
    addContainer.classList.remove('show')
})

addCard.addEventListener('click', createNewCard)

clear.addEventListener('click', () => {
    cardsContainer.innerHTML = '';
})

createCards();