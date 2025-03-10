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

async function getEmails() {
    return await fetch('http://localhost:3000/emails')
        .then((response) => response.json())
        .then((data) => data)
}

document.addEventListener('DOMContentLoaded', async function() {
    insertPosts();
    insertCallbackRequests();
    insertEmails();
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

let callbackBlock = document.querySelector('.callback-requests-list');

callbackBlock.addEventListener('click', async function(e) {
        let removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            console.log('remove');
            if (confirm("Are you sure you want to delete the request?")) {
                let row = removeBtn.closest('tr');
                let id = removeBtn.closest('tr').querySelector('.id').value; 
                try {
                    let response = await fetch(`http://localhost:3000/callbackRequests/${id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        row.remove();
                    }
                } catch (error) {
                    console.log("Error deleting callback request:", error);
                    alert("An error occurred. Please try again.");
                }
                
            }
        }
});


async function insertEmails(){
    let emails = await getEmails();
    let emailList = document.querySelector('.email-list tbody'); 
    emailList.innerHTML = '';
    let i = 1;
    emails.forEach((email) => {
        let emailHTML = `
        <tr>
            <td>${i++}<input class="id" type="hidden" value="${email.id}"></td>
            <td class="name">${email.name}</td>
            <td class="email">${email.email}</td>
            <td class="message">${email.message}</td>
            <td class="date">${email.date}</td>
            <td><button class="remove-btn btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>
        `; 
        emailList.insertAdjacentHTML('beforeend', emailHTML);
    })
}


let emailBlock = document.querySelector('.email-list');

emailBlock.addEventListener('click', async function(e) {
        let removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            console.log('remove');
            if (confirm("Are you sure you want to delete the email?")) {
                let id = removeBtn.closest('tr').querySelector('.id').value; 
                let row = removeBtn.closest('tr');
                try {
                    let response = await fetch(`http://localhost:3000/emails/${id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        row.remove();
                    } else {
                        alert('Failed to delete the email');
                    }
                } catch (error) {
                    console.error("Error deleting post:", error);
                    alert("An error occurred. Please try again.");
                }
                
            }
        }
});
