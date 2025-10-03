function register(){
let email = document.getElementById("email").value;
// email = gerold@gmail.com
let password = document.getElementById("password").value;
let cpassword = document.getElementById("cpassword").value;

console.log(email);
console.log(password);
console.log(cpassword);
//error-msg "your password mismatch"

let error_msg = document.getElementById("error-msg")
error_msg.innerHTML= "mali yan boy"

//if password and confirm password is equal to each other,console "Your password and confirm password matched"
//if confirm-password is not equal to password, show an error message in an element containing "Your password mismatched"

if(password !==cpassword) {
    alert("password do not match!");
    return false;
}

return true;
}


document.getElementById("registerform").addEventListener("submit", function(event) {
    alert("please ensure all field out correctly and password match.")
}
