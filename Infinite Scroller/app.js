
const postContainer = document.getElementById('post-container')
const post = document.getElementById('post');
const filter = document.getElementById('filter');
const loader = document.querySelector('.loader')

let limit = 5;
let page = 1;

// Load Initial Posts

async function loadPosts() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    let data = await response.json();
    console.log(data);
    return data;
}

async function showPosts() {
    const posts = await loadPosts();

    posts.forEach( item => {
        console.log(item)
        const postNode = document.createElement('div')
        postNode.classList = 'post'
        postNode.innerHTML = `
        <div class="number">${item.id}</div>
            <div class="post-info">
                <h2 class="post-title">${item.title}</h2>
                <p class="post-body">${item.body}</p>
            </div>
        `
        postContainer.appendChild(postNode);
    })
 
}

function showLoading() {
   loader.classList.add('show');
   setTimeout( () => {
       loader.classList.remove('show');
       setTimeout( () => {
        page++;
        showPosts();
    }, 300)
   }, 1000)
}

function filterPosts(e) {
    const searchParam = e.target.value.toUpperCase();
    const searchedPosts = document.querySelectorAll('.post');

    searchedPosts.forEach( post => {
        const titleText = post.querySelector('.post-title').innerText.toUpperCase();
        const bodyText = post.querySelector('.post-body').innerText.toUpperCase();
        
        if (titleText.indexOf(searchParam) > -1 || bodyText.indexOf(searchParam) > -1) {
            post.style.display = 'flex'
        } else {
            post.style.display = 'none'
        }
    })
    console.log(searchParam);
}

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
})

loadPosts();
showPosts();

filter.addEventListener('input', filterPosts)