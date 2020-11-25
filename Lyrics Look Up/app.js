const form = document.getElementById('form');
const search = document.getElementById('search');
const resultContainer = document.getElementById('result')
const moreResults = document.getElementById('more');

const apiUrl = 'https://api.lyrics.ovh'
let songTemp;

// Functions

async function getSongInfo(term) {
    fetch(`${apiUrl}/suggest/${term}`)
    .then (response => response.json())
    .then (data => populateDOM(data.data))
}

async function getSongInfoNext(term) {
    fetch(`${apiUrl}/suggest/search?limit=15&q=${term}&index=15`)
    .then (response => response.json())
    .then (data => populateDOM(data.data))
}

async function getSongInfoPrev(term) {
    fetch(`${apiUrl}/suggest/search?limit=15&q=${term}&index=15`)
    .then (response => response.json())
    .then (data => populateDOM(data.data))
}


function populateDOM(results) {
    const list = document.createElement('ul');
    list.classList.add('songs')
    resultContainer.appendChild(list)
    const searchResults = results
    searchResults.forEach(single => {
        const songItem = document.createElement('li')
        const id = single.id
        const artist = single.artist.name
        const title =  single.title
        songItem.innerHTML = `
        <span><strong>${artist}</strong> - ${title}</span>
        <button class="btn" id="${id}">Get Lyrics</button>
        `
        list.appendChild(songItem)

        moreResults.innerHTML = `


        <button class="btn" id="prev">Previous</button> <button class="btn" id="next">Next</button>
        `
    })
    
}


// Event Listeners

form.addEventListener('submit', (e) => {
    e.preventDefault();
    moreResults.innerHTML = '';
    resultContainer.innerHTML = '';
    const searchValue = search.value
    
    if (searchValue !== '') {
        songTemp = searchValue;
        getSongInfo(searchValue)
    } else {
        alert('Please fill in all fields')
    }
})

moreResults.addEventListener('click', (e) => {
    if (e.target.id === 'next') {
        moreResults.innerHTML = ''
        resultContainer.innerHTML = ''
        getSongInfoNext(songTemp)
    }
})

moreResults.addEventListener('click', (e) => {
    if (e.target.id === 'prev') {
        moreResults.innerHTML = ''
        resultContainer.innerHTML = ''
        getSongInfoPrev(songTemp)
    }
})

resultContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        console.log(e.target.id)
    }
})
