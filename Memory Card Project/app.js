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

function createCard() {
    const questionText = question.value
    const answerText = answer.value
    if (questionText === '' || answerText === '') {
        alert('Please Fill In All Fields')
    } else {
    let card = document.createElement('div')
    card.classList.add('card');
    card.classList.add('active')
    console.log(cardsContainer.innerHTML)
    card.innerHTML = `
            <div class="inner-card">
                <div class="inner-card-front">
                    <p>
                        ${questionText}
                    </p>
                </div>
                <div class="inner-card-back">
                    <p>
                        ${answerText}
                    </p>
                </div>
            </div>
        `
    console.log(card);
    cardsContainer.appendChild(card)
    addContainer.classList.remove('show')
    question.value = '';
    answer.value = '';
        
    }
}




prevBtn.addEventListener('click', () => {
    let previousCard = document.querySelector('.card')
    previousCard.classList.remove('active')
    previousCard.classList.add('left')
    console.log(previousCard)
})

nextBtn.addEventListener('click', () => {
    console.log('next')
})

showBtn.addEventListener('click', () => {
    addContainer.classList.add('show')
})

hideBtn.addEventListener('click', () => {
    addContainer.classList.remove('show')
})

addCard.addEventListener('click', createCard)

clear.addEventListener('click', () => {
    cardsContainer.innerHTML = '';
})