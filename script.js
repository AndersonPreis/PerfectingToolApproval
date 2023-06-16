var email = document.getElementById("email").value;
var password = document.getElementById("pwd").value;

loginscript(){
  if(email == "admin" && password == "password"){
    window.location.href = "admin.html";
  }
}
