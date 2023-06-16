document.getElementById("login").addEventListener("submit", login(event));
document.getElementById("admin").addEventListener("click", navigate());

function login(event){
   event.preventDefault();
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   if(email === "admin@admin.com" && password === "password"){
     window.location.href = "admin.html";
   } else {
     alert("Invalid username or password");
   }
}

function navigate(){
   window.location.href = "admin.html";
}
