const currencyEl_one = document.getElementById('currency-1');
const currencyEl_two = document.getElementById('currency-2');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const swap = document.getElementById('swap');
const rate = document.getElementById('rate');

function calculate() {
    
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/4ce858c0a1273ff306b0378a/latest/${currency_one}`)
        .then(response => response.json())
        .then(data => {
            const rates = data.conversion_rates[currency_two]
            console.log(rate);

            const amount_one = amountEl_one.value;
            const amount_two = (amountEl_one.value * rates)
            console.log(amount_one);
            console.log(amount_two);
            rate.innerText = `${amount_one} ${currency_one} is currently worth ${amount_two} ${currency_two}.`
        });
    
}

function swapCurrency() {
    console.log('SWAP')
    const temp = currencyEl_one.value
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
}

currencyEl_one.addEventListener('change', calculate)

amountEl_one.addEventListener('input', calculate)

currencyEl_two.addEventListener('change', calculate)

amountEl_two.addEventListener('input', calculate)

swap.addEventListener('click', swapCurrency)

window.addEventListener('DOMContentLoaded', () => {
    calculate();
})