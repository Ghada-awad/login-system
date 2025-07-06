var username = document.querySelector("#userName");
var useremail = document.querySelector("#userEmail");
var userpassword = document.querySelector("#userPassword");
var signupBtn = document.querySelector(".signupBtn");
var requiredInputs = document.querySelector(".requiredInputs");
var emailExist = document.querySelector(".emailExist");
var successInputs = document.querySelector(".successInputs");
var usersContainer = [];
var counter = 0;
if (localStorage.getItem("users") !== null) {
  usersContainer = JSON.parse(localStorage.getItem("users"));
}

// console.log(usersContainer);
signupBtn.addEventListener("click", function () {
  if (validitionUserName() && validitionUserEmail() && validitionUserPass()) {
    var user = {
      name: username.value,
      email: useremail.value,
      pass: userpassword.value,
    };
    if (checkEmail() == true) {
      emailExist.classList.remove("d-none");
      successInputs.classList.add("d-none");
    } else {
      emailExist.classList.add("d-none");
      usersContainer.push(user);
      localStorage.setItem("users", JSON.stringify(usersContainer));
      requiredInputs.classList.add("d-none");
      successInputs.classList.remove("d-none");
      clearForm();
    }
  } else {
    requiredInputs.classList.remove("d-none");
  }
});
function clearForm() {
  username.value = null;
  useremail.value = null;
  userpassword.value = null;
}
// localStorage.clear();
function validitionUserName() {
  // var username = userName.value;
  var regex = /^[a-z0-9_-]{3,15}$/;
  if (regex.test(username.value)) {
    username.classList.remove("is-invalid");
    username.classList.add("is-valid");
    return true;
  } else {
    username.classList.remove("is-valid");
    username.classList.add("is-invalid");
    return false;
  }
}
function validitionUserEmail() {
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(useremail.value)) {
    useremail.classList.remove("is-invalid");
    useremail.classList.add("is-valid");
    return true;
  } else {
    useremail.classList.remove("is-valid");
    useremail.classList.add("is-invalid");
    return false;
  }
}
function validitionUserPass() {
  var regex = /[a-zA-Z0-9#$*_-]{8,}/;
  if (regex.test(userpassword.value)) {
    userpassword.classList.remove("is-invalid");
    userpassword.classList.add("is-valid");
    return true;
  } else {
    userpassword.classList.remove("is-valid");
    userpassword.classList.add("is-invalid");
    return false;
  }
}

function checkEmail() {
  for (var i = 0; i < usersContainer.length; i++) {
    if (usersContainer[i].email == useremail.value) {
      return true;
    }
  }
}
// localStorage.clear();
