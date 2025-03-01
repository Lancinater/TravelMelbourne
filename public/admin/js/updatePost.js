{
    let articlesBlock = document.querySelector('.articles-list');
    let updateBtn = document.querySelector('#v-pills-updatePost-tab');
    let updateTitle = document.querySelector('#updateTitle');
    let updateText = document.querySelector('#updateText');
    let updateForm = document.querySelector('.update-post-form');
    let id;

    articlesBlock.addEventListener('click', async function(e) {
        if(e.target.classList.contains('edit-btn')){
            id = e.target.parentNode.parentNode.querySelector('.id').value;
            let postInfo = await fetch('http://localhost:3000/posts/' + id)
                .then((response) => response.json())
                .then((data) => data)
            updateTitle.value = postInfo.title;
            updateText.value = postInfo.text;
            updateBtn.click();
        }
    })

    updateForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        let createDescription;
        if(updateText.value.indexOf('.') === -1) {
            createDescription = updateText.value;
        }else{
            createDescription = updateText.value.substring(0, updateText.value.indexOf('.') + 1);
        }
        await fetch('http://localhost:3000/posts/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: updateTitle.value,
                text: updateText.value,
                description: createDescription
            })
        }).then((response) => response.text()).then(() => window.location.reload())
    })


}