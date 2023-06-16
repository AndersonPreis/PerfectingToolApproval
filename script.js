
function login(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("pwd").value;
  if(email == "admin" && password == "password"){
    window.location.href = "admin.html";
  }
}
