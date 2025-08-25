// Predefined users
const users = [
  { username: "parent1", password: "1234" },
  { username: "parent2", password: "abcd" },
  { username: "demo", password: "demo123" }
];

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  // Check credentials
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Save login session (optional)
    localStorage.setItem("loggedInUser", username);
    // Redirect to dashboard
    window.location.href = "dashboard.html";
  } else {
    errorMsg.style.display = "block";
  }
}
