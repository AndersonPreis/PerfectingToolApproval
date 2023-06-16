document.getElementById("login").addEventListener("submit", function(event) {
   event.preventDefault();
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   if(email === "admin@admin.com" && password === "password"){
     window.location.href = "admin.html";
   } else {
     alert("Invalid username or password");
   }
});
