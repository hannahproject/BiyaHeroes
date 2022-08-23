var form = document.getElementById('form');
var email = document.getElementById('email');
var password = document.getElementById('password');

form.addEventListener('submit', inputValidation);

function inputValidation(){
    event.preventDefault();

    var getEmail = email.value.trim();
    var getPassword = password.value.trim();
    // .trim() removes extra whitespace

    if(getEmail==='') {
        errorMsg(email, 'This field cannot be blank.');
    } else {
        successMsg(email);
    }

    if(getPassword==='') {
        errorMsg(password, 'This field cannot be blank.');
    } else {
        successMsg(password);
    }
}

function errorMsg(input, message) {
    var formItem = input.parentElement;
    var msg = formItem.querySelector('small'); //selects the small tag from the HTML doc

    msg.innerText = message;

    formItem.className = 'form-item error';
}

function successMsg(input) {
    var formItem = input.parentElement;
    formItem.className = 'form-item success';
}