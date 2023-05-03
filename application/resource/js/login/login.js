function getInputUsername() {
    let username = document.getElementById("inputUsername");
    // let username = document.querySelector("input[id=inputUsername]").value;
    if (Object.is(username, null)) {
        // throw error
        console.error("document.getElementById(\"inputUsername\") exception!");
        return
    };
 
    console.log(
        `username: ${username.value} -> size= ${username.value.length}`
    );
}

function getInputPassword() {
    let password = document.getElementById("inputPassword");
    if (Object.is(password, null)) {
        // throw error
        console.error("document.getElementById(\"inputPassword\") exception!");
        return
    };

    console.log(
        `password: ${password.value} -> size= ${password.value.length}`
    );
}

function submitForm() {

    let loginForm = document.getElementById("loginForm");
    if (Object.is(loginForm, null)) {
        // throw error
        console.error("document.getElementById(\"loginForm\") exception!");
        return
    };

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let username = document.getElementById("inputUsername");
        let password = document.getElementById("inputPassword");

        if (username.value.length < 3 || password.value.length <= 6) {
            // throw error
            console.log("Ensure you input a value in both fields!");
        } else {
            // perform operation with form input
            console.log(
                `This form has a username of ${username.value} and password of ${password.value}`
            );
            // action submitted
            // alert("This form has been successfully submitted!");

            
            // clean username/ password
            username.value = "";
            password.value = "";
            // navigate to home page
            window.location.replace("/portal/home/#");
        }
    });
}



