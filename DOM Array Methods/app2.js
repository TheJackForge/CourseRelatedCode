const addUser = document.getElementById('add-user');
const double = document.getElementById('double');
const showMillion = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const wealth = document.getElementById('calculate-wealth')
const main = document.getElementById('main');

let data = [];


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


function addData(user) {
    data.push(user);
    updateDom()
}

function updateDom(providedData = data) {
        main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`;
        providedData.forEach( (item) => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML += `<strong>${item.name}</strong> ${convertMoney(item.money)}`
        main.appendChild(element);
        })
    }

function convertMoney(number) {
    return '$' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
}

function doubleMoney() {
    data = data.map((user) => {
        return {
            ...user,
            money: user.money * 2
        }
    })
    updateDom()
}

addUser.addEventListener('click', getRandomPerson)
double.addEventListener('click', doubleMoney);