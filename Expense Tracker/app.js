const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
{ id: 1, text: 'Flower', amount: -20 },
{ id: 2, text: 'Salary', amount: 300 },
{ id: 3, text: 'Book', amount: -10 },
{ id: 4, text: 'Camera', amount: 150 }
]

let transactions = dummyTransactions;

function initApp() {
    list.innerHTML = ''
    transactions.forEach(addTransactionsDOM)

    updateValue();
   
}

function addTransactionsDOM(transaction) {
    console.log(transaction)
    
    const item = document.createElement('li')

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

    const sign = `${transaction.amount}` < 0 ? '-' : '+';

    item.innerHTML =
    `${transaction.text} 
    <span>${sign}$${Math.abs(transaction.amount)}</span>
    <button class="delete-btn">x</button>
    `
    list.appendChild(item);
}

function updateValue() {
    const amounts = transactions.map( item => item.amount)

    const total = amounts.reduce(( acc, item ) => acc += item );
    balance.innerText = `$${(total).toFixed(2)}`
    
    const income = amounts.filter( item => item > 0).reduce((acc, item) => acc += item)
    moneyPlus.innerText = `$${(income).toFixed(2)}`
    console.log(income);

    const expense = amounts.filter( item => item < 0).reduce((acc, item) => acc += item)
    moneyMinus.innerText = `$${(expense * -1).toFixed(2)}`
    console.log(expense);
}

initApp();