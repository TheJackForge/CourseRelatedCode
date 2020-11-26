const form = document.getElementById('form');
const search = document.getElementById('search');
const resultContainer = document.getElementById('result')
const moreResults = document.getElementById('more');

const apiUrl = 'https://api.lyrics.ovh'

// Functions

async function getSongInfo(term) {
    fetch(`${apiUrl}/suggest/${term}`)
    .then (response => response.json())
    .then (data => populateDOM(data))
}

async function getMoreSongs(url) {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    const data = await response.json();
    populateDOM(data)
}
function getLyrics(artist, songTitle) {
    fetch(`${apiUrl}/v1/${artist}/${songTitle}`)
    .then (response => response.json())
    .then (data => {
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
        resultContainer.innerHTML = `
        ${lyrics}
        `
        moreResults.innerHTML = ''
    })

    
}


function populateDOM(results) {
    moreResults.innerHTML = ''
    resultContainer.innerHTML = ''
    console.log(results.next)
    const list = document.createElement('ul');
    list.classList.add('songs')
    resultContainer.appendChild(list)
    const searchResults = results.data
    searchResults.forEach(single => {
        const songItem = document.createElement('li')
        const id = single.id
        const artist = single.artist.name
        const title =  single.title
        songItem.innerHTML = `
        <span><strong>${artist}</strong> - ${title}</span>
        <button class="btn" id="${id}" data-artist="${artist}" data-songtitle="${title}">Get Lyrics</button>
        `
        list.appendChild(songItem)      
})
        if (results.prev || results.next) {
            more.innerHTML = `
            ${results.prev ? `<button class="btn" onclick="getMoreSongs('${results.prev}')">Previous</button>` : ''} 
            ${results.next ? `<button class="btn" onclick="getMoreSongs('${results.next}')">Next</button>` : ''} 
            `
        } else {
            more.innerHTML = '';
}
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


// moreResults.addEventListener('click', (e) => {
//     if (e.target.id === 'next') {
//         moreResults.innerHTML = ''
//         resultContainer.innerHTML = ''
//         getSongInfoNext(results.next)
//     }
// })

// moreResults.addEventListener('click', (e) => {
//     if (e.target.id === 'prev') {
//         moreResults.innerHTML = ''
//         resultContainer.innerHTML = ''
//         getSongInfoPrev(results.prev)
//     }
// })


resultContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        const artist = e.target.getAttribute('data-artist')
        const songTitle = e.target.getAttribute('data-songtitle')
        getLyrics(artist, songTitle)
    }
})
