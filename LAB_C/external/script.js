function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform validation (you can replace this with your actual validation logic)
    if (username === "example" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
