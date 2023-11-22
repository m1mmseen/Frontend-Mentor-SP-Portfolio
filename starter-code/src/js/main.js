const form = document.querySelector("form");
const submitButton = document.getElementById("formSubmit");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".errorMessage");
const errorSign = document.querySelector(".errorSign");
const messageInput = document.getElementById("message");

let error = "";

form.addEventListener("submit", e => e.preventDefault());
emailInput.addEventListener("input", e => {
    if(e.target.classList.contains("invalidInput")) {
        e.target.classList.remove("invalidInput");
        errorMessage.innerHTML = "";
        errorSign.classList.remove("visible");
    }
} )
submitButton.addEventListener("click", test);

function test(){
    if (!validateEmail()) {
        emailInput.classList.add("invalidInput");
        errorMessage.innerHTML = error;
        errorSign.classList.add("visible");
    }
}

function validateEmail()
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value))
    {
        return true;
    }
    error = "Sorry, invalid format here";
    return false;
}