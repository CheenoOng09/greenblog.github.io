// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Login Form Validation
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Basic validation (you can enhance this as needed)
        if (username.trim() === "" || password.trim() === "") {
            alert("Username and password are required.");
        } else {
            // For demonstration, redirect to the dashboard (you'll handle authentication in the backend)
            window.location.href = "dashboard.html";
        }
    });

    // Post Idea Form Submission
    const postIdeaForm = document.getElementById("post-idea-form");

    postIdeaForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const idea = document.getElementById("idea").value;

        // Basic validation (you can enhance this as needed)
        if (idea.trim() === "") {
            alert("Please enter your idea.");
        } else {
            // For demonstration, alert the idea (you'll handle data submission in the backend)
            alert("Idea posted: " + idea);
        }
    });
});
