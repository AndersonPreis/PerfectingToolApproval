document.getElementById("login").addEventListener("submit", function(event) {
   event.preventDefault();
   var email = document.getElementById("email").value;
   var password = document.getElementById("pwd").value;
   if(email === "admin" && password === "password"){
     window.location.href = "admin.html";
   } else {
      alert("not admin credentials");
   }
});
