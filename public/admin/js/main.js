async function getPosts() {
    return await fetch('http://localhost:3000/posts')
        .then((response) => response.json()) 
        .then((data) => data)
}

document.addEventListener('DOMContentLoaded', async function() {
    let posts = await getPosts();
    let articles = document.querySelector('.articles-list tbody'); 
    articles.innerHTML = '';
    posts.forEach((post) => {
        let postHTML = `
        <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.date}</td>
            <td>${post.country}</td>
            <td><button class="btn btn-link p-0 text-decoration-none">Edit</button></td>
            <td><button class="btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>
        `;
        articles.insertAdjacentHTML('beforeend', postHTML);
    })

    // Create new post
    let addPostBtn = document.querySelector('.add-post');
    let createPostBtn = document.querySelector('#v-pills-addPost-tab');
    addPostBtn.addEventListener('click', () => createPostBtn.click());
})