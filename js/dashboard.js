var uname = localStorage.getItem("Username");
console.log(uname);

function showdash() {
  document.getElementById("dash").style.display = "block";
  document.getElementById("profile").style.display = "none";
}
function profile() {
  document.getElementById("dash").style.display = "none";
  document.getElementById("profile").style.display = "block";
}
function updatedProfile() {}
window.onload = function() {
  document.getElementById("profileupdate").addEventListener("submit", event => {
    event.preventDefault();
    // Get the value of the name field.
    var newunamed = document.getElementById("newuname").value;
    var newpassd = document.getElementById("newpass").value;
    // Save the name and password in localStorage.
    localStorage.setItem("Username", newunamed);
    localStorage.setItem("Password", newpassd);
    //Update the Uname to use it globally
    uname = localStorage.getItem("Username");
    alert("Profile updated!");
    window.location.href = "dashboard.html";
  });
};
