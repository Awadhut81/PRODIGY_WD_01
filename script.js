function register(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

localStorage.setItem("username", username);
localStorage.setItem("password", password);

alert("Registration Successful");

window.location.href="login.html";
}

function login(){

let user = document.getElementById("loginUser").value;
let pass = document.getElementById("loginPass").value;

let storedUser = localStorage.getItem("username");
let storedPass = localStorage.getItem("password");

if(user === storedUser && pass === storedPass){

alert("Login Successful");

window.location.href="dashboard.html";

}
else{

alert("Invalid Credentials");

}

}

function logout(){

alert("Logged Out");

window.location.href="login.html";

}
