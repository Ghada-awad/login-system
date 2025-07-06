var loginBtn = document.querySelector(".login");
var useremail = document.querySelector("#userEmail");
var userpassword = document.querySelector("#userPassword");
var attentionParagaraph = document.querySelector(".attentionParagaraph");
var arr = JSON.parse(localStorage.getItem("users"));
loginBtn.addEventListener("click", function () {
  if (validitionUserEmail() && validitionUserPass()) {
    for (var i = 0; i < arr.length; i++) {
      if (
        useremail.value == arr[i].email &&
        userpassword.value == arr[i].pass
      ) {
        window.location = "../homePage.html";
        var email = arr[i].email;
        localStorage.setItem("email", email);
        attentionParagaraph.classList.add("d-none");
      } else {
        attentionParagaraph.classList.remove("d-none");
      }
    }
  }
});

// console.log(arr.length);
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

////////////////////////////////////////////////////
