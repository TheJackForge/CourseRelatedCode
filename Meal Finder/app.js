const search = document.getElementById('search');
const submit = document.getElementById('submit');
const searchBtn = document.querySelector('.search-button');
const resultHeading = document.getElementById('result-heading');
const meals = document.getElementById('meals');
const singleMeal = document.getElementById('single-meal');
const random = document.getElementById('random');


function searchMeal(e) {
    e.preventDefault();  
    const item = search.value
    if (search.value.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        .then( response => response.json())
        .then( data => {
            if (data.meals !== null) {
                resultHeading.innerHTML = `<h2>There are ${data.meals.length} recipes available for "${item}"</h2>`
                meals.innerHTML = data.meals.map( meal => `
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                    <h4>${meal.strMeal}</h4>
                    </div>
                </div>
                `).join('')
                search.value = '';
                } else {
                resultHeading.innerHTML = `<h4>Sorry, ${item} was not found. Please try again...</h4>`
            }
            })
        } else {
        alert('Please enter a search term')
    }
}   

function createMealById(mealId) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then( response => response.json())
        .then( data => {
        const meal = data.meals[0];
        addMealToDom(meal)
        })
}

function addMealToDom(meal) {

    let ingredients = [];

    for (let i=1; i<=20; i++) {
    if (meal[`strIngredient${i}`]) {
    ingredients.push( `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
        break;
    }
}
console.log(ingredients)
singleMeal.innerHTML = `
<div class="single-meal">
<h1>${meal.strMeal}</h1>
<img src="${meal.strMealThumb}">
<div class="single-meal-info">
${meal.strCategory ? `<p>${meal.strCategory}</p>` : `<p>''</p>`}
${meal.strArea ? `<p>${meal.strArea}</p>` : `<p>''</p>`}
</div>
    <div class="main">
        <p>${meal.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
        ${ingredients.map( ing => `<li>${ing}</li>` ).join('')}
        </ul>
    </div>
</div>
`
}

function searchRandom() {
    resultHeading.innerHTML = '';
    meals.innerHTML = '';
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then( response => response.json())
    .then( data => {
        const meal = data.meals[0]
        addMealToDom(meal)
    })
}


submit.addEventListener('submit', searchMeal)

meals.addEventListener('click', (e) => {
    const mealInfo = e.path.find( item => {
        if (item.classList) {
            return item.classList.contains('meal-info');
        } else {
            return false;
        }
    })
    if (mealInfo) {
        const mealId = mealInfo.dataset.mealid;
        createMealById(mealId);
    }

})

random.addEventListener('click', searchRandom)