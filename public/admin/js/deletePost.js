{
    let articlesBlock = document.querySelector('.articles-list');

    articlesBlock.addEventListener('click', async function(e) {
        let removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            console.log('remove');
            if (confirm("Are you sure you want to delete the post?")) {
                let row = removeBtn.closest('tr');
                let id = removeBtn.closest('tr').querySelector('.id').value; 
                try {
                    let response = await fetch(`http://localhost:3000/posts/${id}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        row.remove();
                    }
                } catch (error) {
                    console.log("Error deleting post:", error);
                    alert("An error occurred. Please try again.");
                }
                
            }
        }
    });
    
}