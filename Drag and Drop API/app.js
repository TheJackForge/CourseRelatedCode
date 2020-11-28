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
    });

    addEventListeners();
}

function dragStart() {
    // console.log('Event: ', 'dragstart');
    dragStartIndex = +this.closest('li').getAttribute('data-index');

    
}

// Swap list items that are drag and drop

function swapItems(fromIndex, toIndex) {
    console.log(fromIndex)
    console.log(toIndex)
    const itemOne = listItems[fromIndex].querySelector('.draggable')
    const itemTwo = listItems[toIndex].querySelector('.draggable')

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function dragEnter() {
    // console.log('Event: ', 'dragenter');
    this.classList.add('over')
}

function dragOver(e) {
    // console.log('Event: ', 'dragover');
    e.preventDefault();
}

function dragLeave() {
    // console.log('Event: ', 'dragleave');
    this.classList.remove('over')
}

function dragDrop() {
    // console.log('Event: ', 'drop');
    const dragEndIndex = +this.getAttribute('data-index');

    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over')
}

// Check the order of list items

function checkOrder() {
    listItems.forEach((listItem, index) => {
        const websiteName = listItem.querySelector('.draggable').innerText.trim();

        if (websiteName !== websiteTraffic[index]) {
            listItem.classList.add('wrong');
        } else {
            listItem.classList.remove('wrong');
            listItem.classList.add('right');
        }
    })
}

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable')
    const dragListItems = document.querySelectorAll('.draggable-list li')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart)
    })

    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver)
        item.addEventListener('drop', dragDrop)
        item.addEventListener('dragenter', dragEnter)
        item.addEventListener('dragleave', dragLeave)
    })
}

check.addEventListener('click', checkOrder)