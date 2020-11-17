const search = document.getElementById('search');
const submit = document.getElementById('submit');
const searchBtn = document.querySelector('.search-button');
const resultHeading = document.getElementById('result-heading');
const meals = document.getElementById('meals');
const singleMeal = document.getElementById('single-meal');
const random = document.getElementById('random-button');


function searchMeal(e) {
    e.preventDefault();
    console.log(search.value)
    const item = search.value
    console.log(item);
    if (item !== "") {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then( response => response.json())
        .then( data => {
            console.log(data)
        })
    } else {
        alert('Please enter a search term')
    }



}   

submit.addEventListener('submit', searchMeal)
