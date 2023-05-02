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