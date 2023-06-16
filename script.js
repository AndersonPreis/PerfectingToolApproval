const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
   alert("You clicked me");
})

function login(){
  window.alert("login function executing...");
  var email = document.getElementById("email").value;
  var password = document.getElementById("pwd").value;
  if(email == "admin" && password == "password"){
    window.location.href = "admin.html";
  }
}
