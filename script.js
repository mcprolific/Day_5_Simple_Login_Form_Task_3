document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from refreshing page

    // function btnSubmit(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    console.log("This is my line of code");
    console.log(username);
    console.log(password);

    if (username === "" || password === "") {
      document.getElementById("msg").innerHTML = `Please fill in all fields`;
    } else if (username === "admin" && password === "1234") {
      document.getElementById("msg").innerHTML = `Admin login successful`;
    } else {
      document.getElementById("msg").innerHTML = `Welcome, ${username}  !`;
    }
  });
