let articlesBlock = document.querySelector('.articles-list');

articlesBlock.addEventListener('click', async function(e) {
    if(confirm("Are you sure you want to delete the post?")){
        if(e.target.classList.contains('remove-btn')){
            let id = e.target.parentElement.parentElement.querySelector('.id').value;
            await fetch(`http://localhost:3000/posts/${id}`, {
                method: 'DELETE'
            }).then((response) => response.text()).then((data) => window.location.reload())
        }
    }
})