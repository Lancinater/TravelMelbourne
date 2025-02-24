async function getPosts() {
    return await fetch('http://localhost:3000/posts')
        .then((response) => response.json()) 
        .then((data) => data)
}

async function getCallbackRequests() {
    return await fetch('http://localhost:3000/callbackRequests')
        .then((response) => response.json())
        .then((data) => data)
}

document.addEventListener('DOMContentLoaded', async function() {
    insertPosts();
    insertCallbackRequests();

    // Create new post
    let addPostBtn = document.querySelector('.add-post');
    let createPostBtn = document.querySelector('#v-pills-addPost-tab');
    addPostBtn.addEventListener('click', () => createPostBtn.click());
})

async function insertPosts(){
    let posts = await getPosts();
    let articles = document.querySelector('.articles-list tbody'); 
    articles.innerHTML = '';
    let i = 1;
    posts.forEach((post) => {
        let postHTML = `
        <tr>
            <td>${i++}<input class="id" type="hidden" value="${post.id}"></td>
            <td class="title">${post.title}</td>
            <td class="date">${post.date}</td>
            <td class="country">${post.country}</td>
            <td><button class="edit-btn btn btn-link p-0 text-decoration-none">Edit</button></td>
            <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>
        `;
        articles.insertAdjacentHTML('beforeend', postHTML);
    })
}

async function insertCallbackRequests(){
    let callbackRequests = await getCallbackRequests();
    let requestList = document.querySelector('.callback-requests-list tbody'); 
    requestList.innerHTML = '';
    let i = 1;
    callbackRequests.forEach((callbackRequest) => {
        let callbackRequestHTML = `
        <tr>
            <td>${i++}<input class="id" type="hidden" value="${callbackRequest.id}"></td>
            <td class="phone">${callbackRequest.phone}</td>
            <td class="date">${callbackRequest.date}</td>
            <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>
        `;
        requestList.insertAdjacentHTML('beforeend', callbackRequestHTML);
    })
}