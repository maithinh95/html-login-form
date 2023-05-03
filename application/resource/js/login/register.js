function getInputUsername() {
    let username = document.getElementById("inputUsername"); 
    if (Object.is(username, null)) {
        // throw error
        console.error("document.getElementById(\"inputUsername\") exception!");
        return
    };

    console.log("username=", username.value);
}

function getInputContact() {
    let contact = document.getElementById("inputContact"); 
    if (Object.is(contact, null)) {
        // throw error
        console.error("document.getElementById(\"inputContact\") exception!");
        return
    };

    console.log("contact=", contact.value);
}

function getInputNewPassword() {
    let password = document.getElementById("inputNewPassword");
    if (Object.is(password, null)) {
        // throw error
        console.error("document.getElementById(\"inputNewPassword\") exception!");
        return
    };
    
    console.log("password=", password.value);
}

function submitForm() {

    let registerForm = document.getElementById("registerForm");
    if (Object.is(registerForm, null)) {
        // throw error
        console.error("document.getElementById(\"registerForm\") exception!");
        return
    };

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let username = document.getElementById("inputUsername");
        let contact = document.getElementById("inputContact");
        let password = document.getElementById("inputNewPassword");

        if (username.value == "" || contact.value ==  "" || password.value == "") {
            // throw error
            console.log("Ensure you input a value in both fields!");
        } else {
            // perform operation with form input
            console.log(
                `This form has a username of ${username.value} and password of ${password.value}.`,
                `This orm has a contact of ${contact.value}.`
            );
            // action submitted
            // alert("This form has been successfully submitted!");

            
            // clean data
            username.value = "";
            contact.value = "";
            password.value = "";
            // navigate to home page
            window.location.replace("/portal/login/#");
        }
    });
}