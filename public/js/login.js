let signInForm = document.querySelector('.sign-in-form');
let registerForm = document.querySelector('.register-form');

signInForm.addEventListener('submit', function(e){
    e.preventDefault();
    let email = document.querySelector('#sign-in-email').value;
    let password = document.querySelector('#sign-in-password').value;
    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    }).then(response => response.text())
    .then(result => {
        if(result === 'Success'){
            alert('Successfully logged in!');
        } else {
            alert('Failed to log in!');
        }
    });
});

registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    let email = document.querySelector('#register-email').value;
    let password = document.querySelector('#register-password').value;
    let confirmPassword = document.querySelector('#register-confirm-password').value;

    fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password, confirmPassword: confirmPassword})
    }).then(response => response.text())
    .then(result => {
        if(result === 'Success'){
            alert('Successfully registered!');
        } else {
            alert('Failed to register!');
        }
    });
});