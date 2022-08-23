var form = document.getElementById('form');
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var birthday = document.getElementById('birthday');
var address = document.getElementById('address');
var phoneNum = document.getElementById('phone-num');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPass = document.getElementById('confirm-pass');

form.addEventListener('submit', inputValidation);

function inputValidation() {

    event.preventDefault();

    var getFirstName = firstName.value.trim();
    var getLastName = lastName.value.trim();
    var getBirthday = birthday.value.trim();
    var getAddress = address.value.trim();
    var getPhoneNum = phoneNum.value.trim();
    var getEmail = email.value.trim();
    var getPassword = password.value.trim();
    var getConfirmPass = confirmPass.value.trim();

    if(getFirstName==='') {
        errorMsg(firstName, 'This field cannot be blank.');
    } else {
        successMsg(firstName);
    }

    if(getLastName==='') {
        errorMsg(lastName, 'This field cannot be blank.');
    } else {
        successMsg(lastName);
    }

    if(getBirthday==='') {
        errorMsg(birthday, 'This field cannot be blank.');
    } else {
        successMsg(birthday);
    }

    if(getAddress==='') {
        errorMsg(address, 'This field cannot be blank.');
    } else {
        successMsg(address);
    }

    if(getPhoneNum==='') {
        errorMsg(phoneNum, 'This field cannot be blank.');
    } else {
        successMsg(phoneNum);
    }

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

    if(getConfirmPass !== getPassword){
        errorMsg(confirmPass, 'Your passwords do not match.');
    } else if(getConfirmPass===''){
        errorMsg(confirmPass, 'This field cannot be blank.');
    } else {
        successMsg(confirmPass);
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