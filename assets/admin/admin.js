// //for validating email in login

function adminLoginName() {
    var username = document.getElementById('username').value;
    if (username.length <= 0) {
        // document.getElementById('LoginEmailError').style.display = 'block';
        document.getElementById('usernameError').innerHTML = 'Please enter your Username';
        // return false;
    } else {
        document.getElementById('usernameError').innerHTML = '';
        // return true;
    }
}

// //for validarting password in login

function adminLoginPassword() {
    var password = document.getElementById('password').value;
    if (password.length <= 0) {
        // document.getElementById('LoginPasswordError').style.display = 'block';
        document.getElementById('passwordError').innerHTML = 'Please enter your password';
        // return false;
    } else {
        document.getElementById('passwordError').innerHTML = '';
        // return true;
    }
}

function validateLogin() {
    var validEmail = adminLoginName();
    var validpassword = adminLoginPassword();
    return validEmail && validpassword ? true : false;
}

let submitBtnLogin = document.getElementById("adminLogin");
submitBtnLogin.addEventListener("click", (e) => {
    validateLogin();
});