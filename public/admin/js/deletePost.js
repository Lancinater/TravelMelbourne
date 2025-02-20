{
    let articlesBlock = document.querySelector('.articles-list');

    articlesBlock.addEventListener('click', async function(e) {
        let removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            console.log('remove');
            if (confirm("Are you sure you want to delete the post?")) {
                let id = removeBtn.closest('.post-item').querySelector('.id').value; 
                await fetch(`http://localhost:3000/posts/${id}`, {
                    method: 'DELETE'
                }).then(response => response.text())
                .then(() => window.location.reload());
            }
        }
    });
    
}