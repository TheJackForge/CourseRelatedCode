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
}

console.log(data);

