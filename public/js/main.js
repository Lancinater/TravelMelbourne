async function getPosts() {
    return await fetch('http://localhost:3000/posts')
        .then((response) => response.json()) 
        .then((data) => data)
}

document.addEventListener('DOMContentLoaded', async function() {
    let posts = await getPosts();
    let articles = document.querySelector('.landmarks'); 
    articles.innerHTML = '';
    posts.forEach((post) => {
        let postHTML = `
        <div class="card">
            <img src="${post.imageURL}" alt="${post.title}">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.description}</p>
                <button class="btn btn-primary">Details</button>
            </div>
        </div>
        `;
        articles.insertAdjacentHTML('beforeend', postHTML);
    })
})