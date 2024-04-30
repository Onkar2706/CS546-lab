<<<<<<< HEAD
=======
// In this file, you must perform all client-side validation for every single form input (and the role dropdown) on your pages. The constraints for those fields are the same as they are for the data functions and routes. Using client-side JS, you will intercept the form's submit event when the form is submitted and If there is an error in the user's input or they are missing fields, you will not allow the form to submit to the server and will display an error on the page to the user informing them of what was incorrect or missing.  You must do this for ALL fields for the register form as well as the login form. If the form being submitted has all valid data, then you will allow it to submit to the server for processing. Don't forget to check that password and confirm password match on the registration form!
>>>>>>> 0d3355ced6040c6b207b2b85f646fda1a0ac561d
(function () {
    let myForm = document.getElementById("signup-form");
    let firstNameInput = document.getElementById("firstName");
    let lastNameInput = document.getElementById("lastName");
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirmPassword");
    let favoriteQuoteInput = document.getElementById("favoriteQuote");
    let themePreferenceInput = document.getElementById("themePreference");
    let roleInput = document.getElementById("role");
    let errorDiv = document.getElementById("error");

    if (myForm) {
        myForm.addEventListener("submit", (event) => {
            event.preventDefault();

            let firstName = firstNameInput.value.trim();
            let lastName = lastNameInput.value.trim();
            let username = usernameInput.value.trim();
            let password = passwordInput.value.trim();
            let confirmPassword = confirmPasswordInput.value.trim();
            let favoriteQuote = favoriteQuoteInput.value.trim();
            let themePreference = themePreferenceInput.value.trim().toLowerCase();
            let role = roleInput.value.trim().toLowerCase();

            let errors = [];

            if (!isValidString(firstName, 2, 25)) {
                errors.push("First name should be a valid string with 2 to 25 characters.");
            }

            if (!isValidString(lastName, 2, 25)) {
                errors.push("Last name should be a valid string with 2 to 25 characters.");
            }

            if (!isValidUsername(username)) {
                errors.push("Username should be a valid string with 5 to 10 characters.");
            }

            if (!isValidPassword(password)) {
                errors.push("Password should be a valid string with at least 8 characters, containing at least one uppercase letter, one lowercase letter, one number, and one special character.");
            }

            if (password !== confirmPassword) {
                errors.push("Password and confirm password do not match.");
            }

            if (!isValidString(favoriteQuote, 20, 255)) {
                errors.push("Favorite quote should be a valid string with 20 to 255 characters.");
            }

            if (!isValidTheme(themePreference)) {
                errors.push("Theme preference should be either 'light' or 'dark'.");
            }

            if (!isValidRole(role)) {
                errors.push("Role should be either 'admin' or 'user'.");
            }

            if (errors.length > 0) {
                displayErrors(errors);
                return;
            }

            // If all inputs are valid, submit the form
            myForm.submit();
        });
    }

    function isValidString(str, minLength, maxLength) {
        return typeof str === "string" && str.trim().length >= minLength && str.trim().length <= maxLength;
    }

    function isValidUsername(username) {
        return typeof username === "string" && username.trim().length >= 5 && username.trim().length <= 10;
    }

    function isValidPassword(password) {
        return typeof password === "string" && password.trim().length >= 8 &&
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/.test(password);
    }

    function isValidTheme(themePreference) {
        return typeof themePreference === "string" && ["light", "dark"].includes(themePreference);
    }

    function isValidRole(role) {
        return typeof role === "string" && ["admin", "user"].includes(role);
    }

    function displayErrors(errors) {
        errorDiv.innerHTML = "";
        let errorList = document.createElement("ul");
        errors.forEach((error) => {
            let listItem = document.createElement("li");
            listItem.textContent = error;
            errorList.appendChild(listItem);
        });
        errorDiv.appendChild(errorList);
    }
<<<<<<< HEAD
})();
=======
})();
>>>>>>> 0d3355ced6040c6b207b2b85f646fda1a0ac561d
