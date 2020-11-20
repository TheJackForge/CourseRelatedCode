
const postContainer = document.getElementById('post-container')
const post = document.getElementById('post');
const filter = document.getElementById('filter');
const loader = document.querySelector('.loader')

let limit = 3;
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

loadPosts();
showPosts();