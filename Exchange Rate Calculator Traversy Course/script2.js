
const currency1 = document.getElementById('currency-1');
const currency2 = document.getElementById('currency-2');
const amount1 = document.getElementById('amount-one');
const amount2 = document.getElementById('amount-two');

const swap = document.getElementById('swap');
const rate = document.getElementById('rate');

function calculate() {

    const currencyOne = currency1.value; 
    const currencyTwo = currency2.value;

    fetch(`https://v6.exchangerate-api.com/v6/4ce858c0a1273ff306b0378a/latest/${currencyOne}`)
        .then(response => response.json())
        .then(data => {
            const rates = data.conversion_rates[currencyTwo]
            amount2.value = amount1.value * rates
            const amountTwo = amount2.value
            const amountOne = amount1.value
            rate.innerHTML = `${amountOne} ${currencyOne} is currently worth ${amountTwo} ${currencyTwo}`
        })
        
        
}

function swapCurrency() {
    const temp = currency2.value;
    currency2.value = currency1.value
    currency1.value = temp;
    calculate();
}

currency1.addEventListener('change', calculate)
amount1.addEventListener('input', calculate)
currency2.addEventListener('change', calculate)
amount2.addEventListener('input', calculate)
swap.addEventListener('click', swapCurrency)

window.addEventListener('DOMContentLoaded', calculate)

