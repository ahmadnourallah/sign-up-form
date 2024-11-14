const passwdField = document.querySelector("#password");
const confirmPasswdField = document.querySelector("#confirmation");
const passwordWarning = document.querySelector(".warning");

function validatePassword() {
    if (passwdField.value !== confirmPasswdField.value) {
        confirmPasswdField.setCustomValidity("Invalid field.");
        passwdField.setCustomValidity("Invalid field.");
        passwordWarning.style.visibility = "visible";

    } else {
        confirmPasswdField.setCustomValidity("");
        passwdField.setCustomValidity("");
        passwordWarning.style.visibility = "hidden";
    }
}

passwdField.addEventListener("keyup", validatePassword);
confirmPasswdField.addEventListener("keyup", validatePassword);