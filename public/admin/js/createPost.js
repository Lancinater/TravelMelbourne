let createForm = document.querySelector('.create-post-form');
let titleInput = document.querySelector('#title');
let countryInput = document.querySelector('#country');
let imageURLInput = document.querySelector('#imageURL');
let textInput = document.querySelector('#text');
let imageFile = document.querySelector('#image-file');

createForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let createText = textInput.value;
    let createDescription;
    if(createText.indexOf('.') === -1) {
        createDescription = createText;
    }else{
        createDescription = createText.substring(0, createText.indexOf('.') + 1);
    }

    let data = new FormData();
    data.append('title', titleInput.value);
    data.append('country', countryInput.value);
    data.append('imageURL', imageURLInput.value);
    data.append('text', createText);
    data.append('description', createDescription);
    data.append('imageFile', imageFile.files[0]);

    fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: data
    }).then((response) => response.text()).then((data) => window.location.reload())
})

function disableInput(input1, input2){
    if(input1.value){
        input2.disabled = true;
    }else{
        input2.disabled = false;
    }
}

imageFile.addEventListener('change', () => {
    disableInput(imageFile, imageURLInput);
})

imageURLInput.addEventListener('input', () => {
    disableInput(imageURLInput, imageFile);
})

