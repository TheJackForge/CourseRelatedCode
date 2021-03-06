const main = document.getElementById('main');
const addUser = document.getElementById('add-user');
const double = document.getElementById('double');
const showMillion = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const wealth = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();


async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json();
    
    const user = data.results[0]
    
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1300000)
    }
    addData(newUser)
}

function addData(obj) {
    data.push(obj);
    updateData();
}

function doubleMoney() {
    data = data.map((user) => {
        return { 
            ...user, 
            money: user.money * 2
        }
    })
    updateData();
}

function sortByRichest() {
    data = data.sort(function (a,b) {
        return b.money - a.money
    })
    updateData();
}

function filterMillion() {
    data = data.filter(function(user) {
        return user = user.money > 1000000;   
    })
    updateData();
}

function updateData(providedData = data) {
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`
    data.forEach((item) => {
        const element = document.createElement('div')
        element.classList.add('person')
        element.innerHTML = `<strong>${item.name}</strong> ${convertNumber(item.money)}`
        
        main.appendChild(element)
    })
}

function convertNumber(number) {
return '$' + number.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}

addUser.addEventListener('click', getRandomUser)
double.addEventListener('click', doubleMoney)
sort.addEventListener('click', sortByRichest)
showMillion.addEventListener('click', filterMillion)

console.log(data);

