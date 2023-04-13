// for Login Register Form Show
function loginRegBtn() {
    let loginBtn = document.getElementById("loginRegBtn");
    loginBtn.classList.toggle("activeForm");
}

function cross() {
    let loginRegBtn = document.getElementById("loginRegBtn");
    loginRegBtn.classList.remove("activeForm")
}

// for top button to change login to register

function registerTopBtn() {
    let login = document.getElementById("loginTop");
    let register = document.getElementById("registerTop");
    register.style.display = "flex";
    login.style.display = "none";
    let loginbtn = document.getElementById("loginbtn");
    let registerbtn = document.getElementById("registerbtn");
    loginbtn.classList.remove("activeFormBtn");
    registerbtn.classList.add("activeFormBtn");
}

// for top button to change register to login

function loginTopBtn() {
    let login = document.getElementById("loginTop");
    let register = document.getElementById("registerTop");
    register.style.display = "none";
    login.style.display = "flex";
    let loginbtn = document.getElementById("loginbtn");
    let registerbtn = document.getElementById("registerbtn");
    loginbtn.classList.add("activeFormBtn");
    registerbtn.classList.remove("activeFormBtn");
}

// For Hambuger And Nav

let hamburger = document.getElementById("nav-icon2");
hamburger.addEventListener("click", () => {
    let nav = document.getElementById("nav");
    nav.classList.toggle("navactive");
    var mob = document.getElementById("mob");
    hamburger.classList.toggle('open');
    mob.classList.toggle("mobactive")
});


// //for validating email in login

function LoginValidateEmail() {
    var emailId = document.getElementById('LoginEmail').value;
    if (emailId.length <= 0) {
        document.getElementById('LoginEmailError').innerHTML = 'Please enter your Email Id';
    } else {
        document.getElementById('LoginEmailError').innerHTML = '';
    }
}

//for validarting password in login

function LoginValidatepassword() {
    var password = document.getElementById('LoginPassword').value;
    if (password.length <= 0) {
        document.getElementById('LoginPasswordError').innerHTML = 'Please enter your password';
    } else {
        document.getElementById('LoginPasswordError').innerHTML = '';
    }
}

//for validating name in register

function RegValidateName() {
    var name1 = document.getElementById("RegName");
    let isName = /^[a-zA-Z\s]+$/.test(name1.value);

    if (name1.value == '') {
        document.getElementById('RegNameError').innerHTML = 'Please enter name';
        return false;
    } else if (!isName) {
        document.getElementById('RegNameError').innerHTML = 'Please enter valid name';
        return false;
    } else {
        document.getElementById('RegNameError').innerHTML = '';
        return true;
    }
}

//for validating email in register

function RegValidateEmail() {
    var regemail = document.getElementById("regemail");
    let isEmail = /^([a-zA-Z])+([a-zA-Z0-9_.-])+\@(([a-zA-Z])+\.+?(com|co|in|org|net|edu|info|gov|vekomy))\.?(in|org|net|edu|info|gov)?$/.test(regemail.value);

    if (regemail.value == '') {
        document.getElementById('regEmailError').innerHTML = 'Please enter your Email Id';
        return false;
    } else if (!isEmail) {
        document.getElementById('regEmailError').innerHTML = 'Please enter valid Email Id';
        return false;
    } else {
        document.getElementById('regEmailError').innerHTML = '';
        return true;
    }
}

//for validating password in register

function RegValidatePassword() {
    var regpassword = document.getElementById("regpassword");
    let isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(regpassword.value);

    if (regpassword.value == '') {
        document.getElementById('regPasswordError').innerHTML = 'Please enter your Password';
        return false;
    }
    else if (regpassword.length < 3) {
        document.getElementById('regPasswordError').innerHTML = 'Password Sholud be 4 Alpha-Numeric long!';
        return false;
    }
    else {
        document.getElementById('regPasswordError').innerHTML = '';
        return true;
    }
}

//for validating all fields in login

function validateLogin() {
    var validEmail = LoginValidateEmail();
    var validpassword = LoginValidatepassword();
    return validEmail && validpassword ? true : false;
}

//for validating all fields in reigster

function validateRegister() {
    var validName = RegValidateName();
    var validEmail = RegValidateEmail();
    var validpassword = RegValidatePassword();
    return validName && validEmail && validpassword ? true : false;
}

// submit button for login

let submitBtnLogin = document.getElementById("login");
submitBtnLogin.addEventListener("click", (e) => {
    validateLogin();
});

// submit button for register

let submitBtnRegister = document.getElementById("register");
submitBtnRegister.addEventListener("click", (e) => {
    validateRegister();
});



function validateName() {
    let formname = document.getElementById("name").value;

    if (formname.length <= 0) {
        document.getElementById("nameError").innerHTML = "Enter Your Name";
    }
    else {
        document.getElementById("nameError").innerHTML = " ";
        return true;
    }
}

function validateEmail() {
    let formemail = document.getElementById("email").value;

    if (formemail.length <= 0) {
        document.getElementById("emailError").innerHTML = "Enter Your Email Id";
    }
    else {
        document.getElementById("emailError").innerHTML = " ";
        return true;
    }
}

function validateNumber() {
    let formnumber = document.getElementById("number").value;

    if (formnumber.length <= 0) {
        document.getElementById("mobNoError").innerHTML = "Enter Your mobile number";
    }
    else {
        document.getElementById("mobNoError").innerHTML = " ";
        return true;
    }
}

function validateServices() {
    let formservices = document.getElementById("contactservices").value;

    if (formservices.length <= 0) {
        document.getElementById("servicesError").innerHTML = "Enter The Service You Want";
    }
    else {
        document.getElementById("servicesError").innerHTML = " ";
        return true;
    }
}

function validateMessage() {
    let formmessage = document.getElementById("mailmessage").value;

    if (formmessage.length <= 0) {
        document.getElementById("messageError").innerHTML = "Enter Your Message For Us";
    }
    else {
        document.getElementById("messageError").innerHTML = " ";
        return true;
    }
}

function validate() {
    var validName = validateName();
    var validEmail = validateEmail();
    var validNumber = validateNumber();
    var validServices = validateServices();
    var validMessage = validateMessage();

    return validName && validEmail && validNumber && validServices && validMessage ? true : false;
}


let submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validate();
    var valid = validate();
    if (valid) {
        function sendEmail() {
            var name = $('#name').val();
            var email = $('#email').val();
            var services = $('#contactservices').val();
            var number = $('#number').val();
            var mailmessage = $('#mailmessage').val();
            $.ajax({
                url: "https://formsubmit.co/ajax/3d69d53cca0d056eaa2e011d029b140c",
                method: "POST",
                data: {
                    Name: name,
                    Email: email,
                    Service: services,
                    Number: number,
                    Message: mailmessage
                },
                success: () => {
                    alert("Thank You For Connecting with Us..")
                }
            });
        }
        sendEmail();
    }
});

// For view more or view less customer Review

var viewMore = document.getElementById("viewMore").addEventListener("click", function() {
    var lastThree = document.getElementById("lastThree");
    lastThree.classList.toggle("activecardList")
    var viewMoreText = document.getElementById("viewMore");
    if (viewMoreText.innerHTML == "View More") {
        viewMoreText.innerHTML = "View Less";
    } else if (viewMoreText.innerHTML == "View Less") {
        viewMoreText.innerHTML = "View More";
    }
});