const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkInputs()

});



function checkInputs() {
    const emailValue = email.value.trim();
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const passwordValue = password.value.trim();



    if (firstnameValue === '') {
        setErrorfor(firstname, 'First name can not be empty');
    } else {
        setSuccessfor(firstname);
    }

    if (lastnameValue === '') {
        setErrorfor(lastname, 'Last name can not be empty');
    } else {
        setSuccessfor(lastname);
    }



    if (emailValue === '') {
        setErrorfor(email, 'This email can not be  blank');
    } else if (!isEmail(emailValue)) {
        setErrorfor(email, 'Looks like this is not valid');
    } else {
        setSuccessfor(email);
    }


    if (passwordValue === '') {
        setErrorfor(password, 'Password can not be blank');
    } else {
        setSuccessfor(password);
    }

}


function setErrorfor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessfor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}