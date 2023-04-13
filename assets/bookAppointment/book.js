function validateName() {
    let formname = document.getElementById("name").value;
    
    if (formname.length <= 0) {
        document.getElementById("nameError").innerHTML = "Enter Your Name";
        // return false;
    }
    else if (formname.length <= 2) {
        document.getElementById("nameError").innerHTML = "Enter More then 2 character";
        // return false;
    }
    else {
        document.getElementById("nameError").innerHTML = " ";
        return true;
    }
}

function validateEmail() {
    let formemail = document.getElementById("email").value;
    var formart = /^([a-zA-Z])+([a-zA-Z0-9_.-])+\@(([a-zA-Z])+\.+?(com|co|in|org|net|edu|info|gov|vekomy))\.?(in|org|net|edu|info|gov)?$/;

    if (formemail.length <= 0) {
        document.getElementById("emailError").innerHTML = "Enter Your Email Id";
        // return false;
    }
    else if (!formemail.match(formart)) {
        document.getElementById("emailError").innerHTML = "Enter Valid Email";
        // return false;
    }
    else {
        document.getElementById("emailError").innerHTML = " ";
        return true;
    }
}

function validateNumber() {
    let formnumber = document.getElementById("number").value;
    var formart = /^[0]?[6789]\d{9}$/; 

    if (formnumber.length <= 0) {
        document.getElementById("mobNoError").innerHTML = "Enter Your mobile number";
        // return false;
    }
    else if(!formnumber.match(formart)){
        document.getElementById("mobNoError").innerHTML = "Enter Only Number";  
    }
    else if (formnumber.length < 10) {
        document.getElementById("mobNoError").innerHTML = "Enter valid mobile number";
        // return false;
    }
    else {
        document.getElementById("mobNoError").innerHTML = " ";
        return true;
    }
}

function validateDoctor() {
    let formservices = document.getElementById("selectDoctor").value;

    if (formservices.length <= 0) {
        document.getElementById("genderError").innerHTML = "Select A Doctor";
        // return false;
    }
    else {
        document.getElementById("genderError").innerHTML = " ";
        return true;
    }
}

function validateServices() {
    let formmessage = document.getElementById("selectServices").value;

    if (formmessage.length <= 0) {
        document.getElementById("servicesError").innerHTML = "Select Your Service";
        // return false;
    }
    else {
        document.getElementById("servicesError").innerHTML = " ";
        return true;
    }
}

function validateDate() {
    let formmessage = document.getElementById("date").value;

    if (formmessage.length <= 0) {
        document.getElementById("dateError").innerHTML = "Select the Date";
        // return false;
    }
    else {
        document.getElementById("dateError").innerHTML = " ";
        return true;
    }
}

function validateTime() {
    let formmessage = document.getElementById("selectTime").value;

    if (formmessage.length <= 0) {
        document.getElementById("timeError").innerHTML = "Select from the available Time list";
        // return false;
    }
    else {
        document.getElementById("timeError").innerHTML = " ";
        return true;
    }
}


function validate() {
    var validName = validateName();
    var validEmail = validateEmail();
    var validNumber = validateNumber();
    var validDoctor = validateDoctor();
    var validServices = validateServices();
    var validDate = validateDate();
    var validTime = validateTime();

    // return validName && validEmail ? true : false;
    return validName && validEmail && validNumber && validDoctor && validServices && validDate && validTime ? true : false;
}

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', (e) => {
    validate();
    var valid = validate();
    if (valid) {
        function sendEmail() {
            var name = $('#name').val();
            var email = $('input[type="email"]').val()
            var mobileNo = $('#number').val();
            var doctorEmail = $('#selectDoctor').val();
            var sel = document.getElementById("selectDoctor");
            var text= sel.options[sel.selectedIndex].text;
            var service = $('#selectServices').val();
            var date = $('#date').val();
            var time = $('#selectTime').val();
            console.log(name,email,mobileNo, doctorEmail, service, date, time);

            var temp = {
                from_name: "Dental Clinic",
                to_mail: email,
                to_drmail: `${doctorEmail}@gmail.com`,
                to_name: name,
                name: name,
                email: email,
                mobileNo: mobileNo,
                doctor: text,
                service: service,
                date: date,
                time: time,
            }
            emailjs.send('service_sgtczjq', 'template_ugcl2sq', temp).then(function(res) {
                console.log(res);
            });
        }
    }
    sendEmail();
});


const navbar = document.querySelector('#header');
window.onscroll = () => {
    if (window.scrollY > 30) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};

const selectDoc = document.getElementById("selectDoctor");
var $j = jQuery.noConflict();
$j('#date').datepicker({
    beforeShowDay: disableSunday,
    minDate: -0,
});

function disableSunday(sunday) {
    var customday = sunday.getDay();
    return [customday > 0];
}


