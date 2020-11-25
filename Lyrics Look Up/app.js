const form = document.getElementById('form');
const search = document.getElementById('search');
const resultContainer = document.getElementById('result')
const moreResults = document.getElementById('more');

const apiUrl = 'https://api.lyrics.ovh'

// Functions

async function getSongInfo(term) {
    fetch(`${apiUrl}/suggest/${term}`)
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
        const artist = single.artist.name
        const title =  single.title
        songItem.innerHTML = `
        <span><strong>${artist}</strong> - ${title}</span>
        <button class="btn">Get Lyrics</button>
        `
        list.appendChild(songItem)

        moreResults.innerHTML = `
        <button class="btn">Previous</button> <button class="btn">Next</button>
        `
    })
    
}


// Event Listeners

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resultContainer.innerHTML = '';
    const searchValue = search.value
    
    if (searchValue !== '') {
        getSongInfo(searchValue)
    } else {
        alert('Please fill in all fields')
    }
})
