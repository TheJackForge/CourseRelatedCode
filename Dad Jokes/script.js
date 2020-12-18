const btn = document.getElementById('jokeBtn');
const jokeEl = document.getElementById('joke');

getDadJoke();

btn.addEventListener('click', getDadJoke)

// ASYNC AWAIT VERSION

async function getDadJoke() {
    const config = {
        headers: {
        'Accept': 'application/json'
    }
}
const res = await fetch('https://icanhazdadjoke.com/', config)    
const data = await res.json();
jokeEl.innerHTML - data.joke;
}

// .THEN FETCH VERSION

// function getDadJoke() {
//         const config = {
//             headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then(res => res.json())
//     .then(data => {
//         jokeEl.innerHTML = data.joke;
//     })       
// }

// VERSION WITHOUT HEADERS IN CONFIG VARIABLE

// function getDadJoke() {
//     fetch('https://icanhazdadjoke.com', {
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
// }
