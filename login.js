function validateLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // ✅ Only one username & password
    if (user === "parent" && pass === "1234") {
        window.location.href = "dashboard.html";
        return false;
    } else {
        alert("Invalid Username or Password!");
        return false;
    }
}
