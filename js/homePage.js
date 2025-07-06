var logoutBtn = document.querySelector(".logoutBtn");
var userEmail = localStorage.getItem("email");
var homeTitle = document.querySelector(".homeTitle");
var usercontainer;
logoutBtn.addEventListener("click", function () {
  window.location = "../signup.html";
});
if (localStorage.getItem("users") != null) {
  usercontainer = JSON.parse(localStorage.getItem("users"));
} else {
  usercontainer = [];
}

var userName = "";
for (var i = 0; i < usercontainer.length; i++) {
  if (usercontainer[i].email == userEmail) {
    userName = usercontainer[i].name;
  }
}
function welcomeUsername() {
  homeTitle.innerHTML = `welcome ${userName}`;
}
welcomeUsername();
