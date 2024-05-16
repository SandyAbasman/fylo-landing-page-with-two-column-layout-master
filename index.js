let emailInputField = document.getElementById("email_input"); 
let emailErrorAlert = document.getElementById("error_alert");
let button = document.getElementById("button");


let secondEmailInputField = document.getElementById("Second_email_input")
let SecondEmailAlert = document.getElementById("second error_alert")
let secondButton = document.getElementById("second_button")



function validateEmailInputField(email, errorAlert){

    let emailAddress = email.value;
    
    if (emailAddress.length === 0){
        errorAlert.innerText = "Enter your email address";
        email.style.border = "none";
        email.style.outline = "1px solid red";

    }else if (!emailAddress.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        errorAlert.innerText = "Please enter a valid email address";
        email.style.outline = "1px solid red";
    }else {
        errorAlert.innerText = " ";
        email.style.outline = "1px solid green";
    }
}


button.addEventListener ("click", function(e){
    validateEmailInputField(emailInputField, emailErrorAlert)
        e.preventDefault;
})

secondButton.addEventListener ("click", function(e){
    validateEmailInputField(secondEmailInputField, SecondEmailAlert)
        e.preventDefault;
})















