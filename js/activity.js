//Local stoarge stuff
window.onload = function() {
  // Check for LocalStorage support.
  if (localStorage) {
    // Add an event listener for form submissions
    document.getElementById("signupform").addEventListener("submit", event => {
      event.preventDefault();

      if (!validate($("#username"))) {
        this.alert("Error in Email");
      } else {
        // Get the value of the name field.
        var uname = document.getElementById("username").value;
        var upass = document.getElementById("pass").value;
        // Save the name and password in localStorage.
        localStorage.setItem("Username", uname);
        localStorage.setItem("Password", upass);
        alert("Profile Created!");
        // window.location.href = "index.html";
        signIn();
        //Create profile and redirect to Main page
      }
    });
    document.getElementById("signinform").addEventListener("submit", event => {
      event.preventDefault();
      //console.log("Reached login credential checking page");
      if (!validate($("#loginname"))) {
        this.alert("Error in Email");
      } else {
        //Take data from the localStorage
        const username = localStorage.getItem("Username");
        const password = localStorage.getItem("Password");

        //Take data from the User Input
        var lname = document.getElementById("loginname").value;
        var lpass = document.getElementById("loginpass").value;

        //Comparison of the  data from the localStorage and userinput
        if (lname == username && lpass == password) {
          window.location.href = "dashboard.html";
          //opens the dashboard page while username & password matches
        } else {
          alert("Error Password or Username");
          //displays error message
        }
      }
    });
  } else {
    alert(
      "No support. Use a fallback such as browser cookies or store on the server."
    );
    //displays error message* for older browsers
  }
};
// document.getElementById("detailsforotp").addEventListener("submit", event => {
//   event.preventDefault();
//   var num = document.getElementById("mobnumber").value;

//   if (isNaN(x) || x < 1000000000 || x > 9999999999) {
//     text = "Input not valid";
//   } else {
//     otpCheck();
//   }
// });
function detailsOtp() {
  var num = document.getElementById("mobnumber").value;
  var mail = document.getElementById("emailcheck").value;
  console.log("reached inside details function");
  if ((num == null || num == "") && (mail == null || mail == "")) {
    console.log("No data");
    alert("Please do fill any one of the field");
  }
  // Email Validation
  //else if (!(mail == null || mail == "")) {
  //   if (!validate($("#emailcheck"))) {
  //     this.alert("Error in Email");
  //   }
  else if (!(mail == null || mail == "")) {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailcheck.value)
    ) {
      alert("Error in Email");
    } else {
      console.log("Valid Email Id");
      //do some function
      otpCheck();
    }
  } else if (!(num == null || num == "")) {
    // If number is given
    if (isNaN(num) || num < 1000000000 || num > 9999999999) {
      console.log("Not valid Mob Number ");
      alert("Please do fill proper mobile number");
    } else {
      console.log("No errors in number ");
      //do some function
      otpCheck();
    }
  } else {
    alert("Sorry!! Some error occured. Please do try again.");
  }
}
//Toggling function begins

//Display Toggling Function Starts here
function signUp() {
  console.log("Reached SignUp");

  document.getElementById("signup").style.display = "block"; //Only this is activated
  document.getElementById("signin").style.display = "none";
  document.getElementById("otpsend").style.display = "none";
  document.getElementById("otpcheck").style.display = "none";
  document.getElementById("changepass").style.display = "none";
}
function signIn() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("signin").style.display = "block"; //Only this is activated
  document.getElementById("otpsend").style.display = "none";
  document.getElementById("otpcheck").style.display = "none";
  document.getElementById("changepass").style.display = "none";
}
function otpSend() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("signin").style.display = "none";
  document.getElementById("otpsend").style.display = "block"; //Only this is activated
  document.getElementById("otpcheck").style.display = "none";
  document.getElementById("changepass").style.display = "none";
}
function otpCheck() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("signin").style.display = "none";
  document.getElementById("otpsend").style.display = "none";
  document.getElementById("otpcheck").style.display = "block"; //Only this is activated
  document.getElementById("changepass").style.display = "none";
}
function changePass() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("signin").style.display = "none";
  document.getElementById("otpsend").style.display = "none";
  document.getElementById("otpcheck").style.display = "none";
  document.getElementById("changepass").style.display = "block"; //Only this is activated
}

//Display Toggling Function Ends here

//Update the Password after OTP Change
function updatedPass() {
  alert("Password updated! Login Again to continue.");
  // window.location.href = "index.html";
  signIn();
}
