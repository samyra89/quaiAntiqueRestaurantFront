// Implémenter le JS de ma page
const inputNom = document.getElementById("nomInput")
const inputPrenom = document.getElementById("prenomInput")
const inputMail = document.getElementById("emailInput")
const inputPassword = document.getElementById("passwordInput")
const inputValidationPassword = document.getElementById("validatePasswordInput")
const btnValidation = document.getElementById("btn-validation-inscription")
inputNom.addEventListener("keyup", validateForm)
inputPrenom.addEventListener("keyup", validateForm)
inputMail.addEventListener("keyup", validateForm)
inputPassword.addEventListener("keyup", validateForm)
inputValidationPassword.addEventListener("keyup", validateForm)

function validateForm() {

    const nomOk = validateRequired(inputNom)
    const prenomOk = validateRequired(inputPrenom)
    const mailOk = validateMail(inputMail)
    const passwordOk = validatePassword(inputPassword)
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword)

    if(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk) {
        btnValidation.disabled = false;
    }else {
        btnValidation.disabled = true;
    }
}

function validateRequired(input) {
    if(input.value !== '') {
        input.classList.add("is-valid")
        input.classList.remove("is-invalid")
        return true
    } else {
        input.classList.remove("is-valid")
        input.classList.add("is-invalid")
        return false
    }
}

function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
function validatePassword(input){
    //Définir mon regex
    const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
function validateConfirmationPassword(inputPwd, inputConfirmPwd ) {
    if(inputPwd.value === inputConfirmPwd.value) {
        inputConfirmPwd.classList.add("is-valid")
        inputConfirmPwd.classList.remove("is-invalid")
        return true
    } else {
        inputConfirmPwd.classList.remove("is-valid")
        inputConfirmPwd.classList.add("is-invalid")
        return false
    }
}
