// function validateForm(){
//     const name=document.getElementById("name").value;
//     const email=document.getElementById("email").value;
//     const phone=document.getElementById("phone").value;
//     const addr=document.getElementById("address").value;
//     const city=document.getElementById("city").value;
//     const state=document.getElementById("state").value;
//     const postal=document.getElementById("postal").value;
//     const empid=document.getElementById("employeeid").value;
//     const dep=document.getElementById("department").value;

//     const nameErr=document.getElementById("name-error");
//     const emailErr=document.getElementById("email-error");
//     const phoneErr=document.getElementById("phone-error");
//     const addrErr=document.getElementById("address-error");
//     const cityErr=document.getElementById("city-error");
//     const stateErr=document.getElementById("state-error");
//     const postalErr=document.getElementById("postal-error");
//     const empidErr=document.getElementById("employeeid-error");
//     const depErr=document.getElementById("department-error");

//     nameErr.textContent="";
//     emailErr.textContent="";
//     phoneErr.textContent="";
//     addrErr.textContent="";
//     cityErr.textContent="";
//     stateErr.textContent="";
//     postalErr.textContent="";
//     empidErr.textContent="";
//     depErr.textContent="";


//     let isValid=true;

//     if (name===""||/\d/.test(name)){
//         nameErr.textContent="Plese enter your name properly.";
//         isValid=false;
//     }

//     if(email===""||!email.includes("@")||!email.includes(".")){
//         emailErr.textContent="Please enter your email properly.";
//         isValid=false;
//     }

//     if (phone===""||!/^\d{10}$/.test(phone)){
//         phoneErr.textContent="Please enter a valid 10-digit phone.";
//         isValid=false;
//     }

//     if (addr===""){
//         addrErr.textContent="Please enter your address";
//         isValid=false;

//     }

//     if (city===""||/\d/.test(city)){
//         cityErr.textContent="Please enter your city properly.";
//         isValid=false;
//     }

//     if (state===""||/\d/.test(city)){
//         stateErr.textContent="Please enter your state properly.";
//         isValid=false;
//     }

//     if (postal===""){
//         postalErr.textContent="Please enter a valid postal-code";
//         isValid=false;
//     }

//     if (empid===""||!/^[a-zA-Z0-9]+$/.test(empid)){
//         empidErr.textContent="Please enter a valid employee ID";
//         isValid=false;
//     }

//     if(dep===""||/\d/.test(department)){
//         depErr.textContent="Please enter your department properly.";
//         isValid=false;
//     }

//     if(isValid){
//         alert("Form submitted succesfully");
//         return true;
//     }
//     else{
//         return false;
//     }


// }

// function resetErrors(){
//     document.getElementById("name-error").textContent="";
//     document.getElementById("email-error").textContent="";
//     document.getElementById("phone-error").textContent="";
//     document.getElementById("address-error").textContent="";
//     document.getElementById("city-error").textContent="";
//     document.getElementById("state-error").textContent="";
//     document.getElementById("postal-error").textContent="";
//     document.getElementById("employeeid-error").textContent="";
//     document.getElementById("department-error").textContent="";
// }

function validateForm() {
    console.log("yes.........")
    let isValid = true;

    // Clear all error messages
    document.querySelectorAll(".error-message").forEach(error => {
        error.textContent = "";
    });

    // Helper function
    function showError(id, message) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = message;
            isValid = false;
        }
    }

    // Step 1 Validation
    const name = document.getElementById("name");
    console.log(name.value)
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    if (name) {
        if (name.value.trim() === "" || /\d/.test(name.value)) {
            showError("name-error", "Please enter a valid name.");
        }
    }

    if (email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {
            showError("email-error", "Please enter a valid email.");
        }
    }

    if (phone) {
        if (!/^\d{10}$/.test(phone.value.trim())) {
            showError("phone-error", "Enter a valid 10-digit phone number.");
        }
    }

    // Step 2 Validation
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const postal = document.getElementById("postal");

    if (address) {
        if (address.value.trim() === "") {
            showError("address-error", "Address is required.");
        }
    }

    if (city) {
        if (city.value.trim() === "" || /\d/.test(city.value)) {
            showError("city-error", "Enter a valid city.");
        }
    }

    if (state) {
        if (state.value.trim() === "" || /\d/.test(state.value)) {
            showError("state-error", "Enter a valid state.");
        }
    }

    if (postal) {
        if (!/^\d{5,6}$/.test(postal.value.trim())) {
            showError("postal-error", "Enter a valid postal code.");
        }
    }

    // Step 3 Validation
    const employeeId = document.getElementById("employeeid");
    const department = document.getElementById("department");

    if (employeeId) {
        if (!/^[A-Za-z0-9]+$/.test(employeeId.value.trim())) {
            showError(
                "employeeid-error",
                "Enter a valid Employee ID."
            );
        }
    }

    if (department) {
        if (
            department.value.trim() === "" ||
            /\d/.test(department.value)
        ) {
            showError(
                "department-error",
                "Enter a valid department."
            );
        }
    }

    // Step 4 Validation
    const feedback = document.getElementById("feedback");

    if (feedback) {
        if (feedback.value.trim().length < 10) {
            showError(
                "feedback-error",
                "Feedback must contain at least 10 characters."
            );
        }
    }

    return isValid;
}

function resetErrors() {
    document.querySelectorAll(".error-message").forEach(error => {
        error.textContent = "";
    });
}
