const addUser = document.getElementById('add-user');
const double = document.getElementById('double');
const showMillion = document.getElementById('show-millionaires');
const sortPoor = document.getElementById('sort-poor')
const sortRich = document.getElementById('sort-rich');
const wealth = document.getElementById('calculate-wealth')
const main = document.getElementById('main');
const sortAlphabet = document.getElementById('sort-alphabet')

let data = [];

// Pull a random person from API

async function getRandomPerson() {
    const response = await fetch('https://randomuser.me/api/') 
    const data = await response.json()
    const user = data.results[0]
    console.log(user);
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1400000)
    }
addData(newUser)
}

// Add a random person to the data Array variable

function addData(user) {
    data.push(user);
    updateDom()
}

// Add's the random person the DOM and repopulates the main div

function updateDom(providedData = data) {
        main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
        providedData.forEach( (item) => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML += `<strong>${item.name}</strong> ${convertMoney(item.money)}`
        main.appendChild(element);
        })
    }

// Converts a number to a dollar amount

function convertMoney(number) {
    return '$' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
}

// Doubles one of the items money

function doubleMoney() {
    data = data.map((user) => {
        return {
            ...user,
            money: user.money * 2
        }
    })
    updateDom()
}

// Filters the people that have over $1,000,000

function filterMillion() {
    data = data.filter(function (user) {
        return user.money > 1000000;
    })
    updateDom()
}

// Sort Users in Alphabetical Order

function sortAlphabetically() {
    data = data.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        }
    })
    updateDom()
}

// Sort by Richest

function sortRichest() {
    data = data.sort((a, b) => {
        if (b.money > a.money) {
            return 1
        } else {
            return -1
        }
    })
    updateDom()
}

function sortPoorest() {
    data = data.sort((a, b) => {
    if (a.money > b.money) {
        return 1
    } else {
        return -1
    }
    })
    updateDom()
}


addUser.addEventListener('click', getRandomPerson)
double.addEventListener('click', doubleMoney);
showMillion.addEventListener('click', filterMillion)
sortAlphabet.addEventListener('click', sortAlphabetically)
sortRich.addEventListener('click', sortRichest)
sortPoor.addEventListener('click', sortPoorest)
