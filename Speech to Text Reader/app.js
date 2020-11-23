const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn= document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        image:'/img/drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image:'/img/food.jpg',
        text: "I'm Hungry"
    },
    {
        image:'/img/happy.jpg',
        text: "I'm Happy"
    },
    {
        image:'/img/angry.jpg',
        text: "I'm Angry"
    },
    {
        image:'/img/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image:'/img/scared.jpg',
        text: "I'm Scared"
    },
    {
        image:'/img/sad.jpg',
        text: "I'm Sad"
    },
    {
        image:'/img/tired.jpg',
        text: "I'm Tired"
    },
    {
        image:'/img/home.jpg',
        text: "I want to go home"
    },
    {
        image:'/img/grandma.jpg',
        text: "I want to go to grandma's house"
    },
    {
        image:'/img/outside.jpg',
        text: "I want to go outside"
    },
    {
        image:'/img/school.jpg',
        text: "I don't want to go to school"
    },
];

data.forEach(createBox);

// Create Speech Boxes

function createBox(item) {
    const speechBox = document.createElement('div');
    //Using Destructuring
    const { image, text} = item;
    speechBox.classList.add('box')
    speechBox.innerHTML = `
    <img src="${image}" alt="${text}">
    <p class="info"> ${text}</p>
    `;

    // @todo - speak event

    main.appendChild(speechBox);
    
}

let voices = [];

function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
        console.log(voice);
        let option = document.createElement('option')
        option.value = voice.name
        option.innerText = `${voice.name} (${voice.lang})`;
        voicesSelect.appendChild(option)
    })
}

function toggleTextBox() {
    const textbox = document.getElementById('text-box')
    textbox.classList.toggle('show');
    
}


// Voices Changed

speechSynthesis.addEventListener('voiceschanged', populateVoiceList)

// Toggle Text Box
toggleBtn.addEventListener('click', toggleTextBox)

// Close Button
closeBtn.addEventListener('click', toggleTextBox)

populateVoiceList();
