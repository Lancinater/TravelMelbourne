let createForm = document.querySelector('.create-post-form');
let titleInput = document.querySelector('#title');
let countryInput = document.querySelector('#country');
let imageURLInput = document.querySelector('#imageURL');
let textInput = document.querySelector('#text');

createForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let createText = textInput.value;
    let createDescription;
    if(createText.indexOf('.') === -1) {
        createDescription = createText;
    }else{
        createDescription = createText.substring(0, createText.indexOf('.') + 1);
    }
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: titleInput.value,
            country: countryInput.value,
            imageURL: imageURLInput.value,
            textInput: createText,
            description: createDescription
        })
    }).then((response) => response.text()).then((data) => console.log(data))
})