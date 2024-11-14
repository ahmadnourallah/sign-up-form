const passwdField = document.querySelector("#password");
const confirmPasswdField = document.querySelector("#confirmation");
const passwordWarning = document.querySelector(".warning");

function validatePassword() {
    if (passwdField.value !== confirmPasswdField.value) {
        confirmPasswdField.setCustomValidity("Invalid field.");
        passwdField.setCustomValidity("Invalid field.");
        passwordWarning.style.display = "block";
        console.log("ok")

    } else {
        confirmPasswdField.setCustomValidity("");
        passwdField.setCustomValidity("");
        passwordWarning.style.display = "none";
    }
}

passwdField.addEventListener("keyup", validatePassword);
confirmPasswdField.addEventListener("keyup", validatePassword);