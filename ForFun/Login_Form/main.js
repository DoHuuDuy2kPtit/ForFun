
let passRegex = /\w{6,32}/gm;

function testConflict(){
    let emailInput = document.getElementById("email_address").value;
    let passInput = document.getElementById("email_password").value;
    if(!emailRegex.test(emailInput) || !passRegex.test(passInput)) 
        document.getElementById("invalidEmail").innerHTML = "Your email address or password is incorrect";
}
