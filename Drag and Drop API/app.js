const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const websiteTraffic = [
    'YouTube',
    'Wikipedia',
    'Twitter',
    'Facebook',
    'Amazon',
    'Yelp',
    'Reddit',
    'IMDB',
    'Fandom',
    'Pinterest'
]

//Store Listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert List items into DOM

function createList() {
    [...websiteTraffic]
    .map(a => ({value: a, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map( a => a.value)
    .forEach((website, index) => {
        console.log(website)
        const listItem = document.createElement('li');

        listItem.setAttribute('data-index', index);

        listItem.innerHTML = `
        <span class="number">${index +1}</span>\
        <div class="draggable" draggable="true">
            <p class="website-name">${website}</p>
            <i class="fas fa-grip-lines"></i>
        </div>
        `;

        listItems.push(listItem)

        draggable_list.appendChild(listItem)
    })
}