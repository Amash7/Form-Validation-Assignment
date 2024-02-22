var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

function validateSignInForm() {
    var username = document.forms["signInForm"]["username"].value;
    var password = document.forms["signInForm"]["password"].value;

    if (username == "" || password == "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, and one special character.");
        return false;
    }

    alert("Operation successful");
    return true;
}

function validateSignUpForm() {
    var firstName = document.forms["signUpForm"]["firstname"].value;
    var lastName = document.forms["signUpForm"]["lastname"].value;
    var dob = document.forms["signUpForm"]["dob"].value;
    var country = document.forms["signUpForm"]["country"].value;
    var email = document.forms["signUpForm"]["email"].value;
    var password = document.forms["signUpForm"]["password"].value;
    var confirmPassword = document.forms["signUpForm"]["confirm_password"].value;
    var terms = document.forms["signUpForm"]["terms"].checked;

    if (firstName == "" || lastName == "" || dob == "" || country == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long, contain at least one uppercase letter, and one special character.");
        return false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (!terms) {
        alert("Please accept the terms and conditions.");
        return false;
    }

    alert("Operation successful");
    return true;
}
