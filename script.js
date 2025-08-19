// script.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page from refreshing

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  // Fake credentials (for demo only)
  const validEmail = "test@example.com";
  const validPassword = "password123";

  if (email === validEmail && password === validPassword) {
    // Success → redirect to a fake dashboard
    window.location.href = "dashboard.html";
  } else {
    // Show error message
    errorMsg.textContent = "Invalid email or password. Try again.";
  }
});
