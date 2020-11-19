const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const deleteBtn = document.querySelectorAll('.delete-btn')

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// let transactions = [
//     {id: 1, text: 'Flowers', amount: 30},
//     {id: 2, text: 'Flowers', amount: -40},
//     {id: 3, text: 'Flowers', amount: 300},
//     {id: 4, text: 'Flowers', amount: -30}
// ];


function initApp() {
    list.innerHTML = ''
    transactions.forEach(addTransactionsDOM)
    updateValue();
}

function addTransactionsDOM(transaction) {  
    const item = document.createElement('li')
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')
    const sign = `${transaction.amount}` < 0 ? '-' : '+';
    item.innerHTML =
    `${transaction.text} 
    <span>${sign}$${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `
    list.appendChild(item);
}

function updateValue() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0)

    const income = amounts.filter( item => item > 0)
                            .reduce((acc, item ) => (acc += item), 0)

    const expense = amounts.filter( item => item < 0)
                            .reduce((acc, item) => (acc += item), 0)

    balance.innerText = total.toFixed(2);
    moneyPlus.innerText = income.toFixed(2);
    moneyMinus.innerText = expense.toFixed(2);
    console.log(total);
}

function getIdNumber() {
    return Math.floor(Math.random() * 1000000);
}

function addTransaction(e) {
    e.preventDefault();
    if (amount.value.trim() === '' || text.value.trim() === '') {
        alert('Please fill in all fields')
    } else {
        const transaction = {
            id: getIdNumber(),
            text: text.value,
            amount: +amount.value,
        }

        transactions.push(transaction)

        addTransactionsDOM(transaction)

        updateLocalStorage();

        updateValue();

        text.value = ''
        amount.value = ''
    }
    
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function removeTransaction(id) {
    transactions = transactions.filter( item => item.id !== id)

    updateLocalStorage();

    initApp();
}

form.addEventListener('submit', addTransaction)

initApp();