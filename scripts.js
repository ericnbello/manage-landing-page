const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

function getErrorInfo() {
    const emailAddress = document.getElementById("email");

    if (!emailAddress.checkValidity()) {
        // document.getElementById("email_error").innerHTML = "Please enter a valid email address.";
        document.getElementById("email").placeholder = "Invalid email address.";
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("email").style.borderWidth = "5px";
    }
    else
        document.getElementById("email_error").innerHTML = "";
}

function validateForm() {
    document.addEventListener('invalid', (function () {
        return function (e) {
            e.preventDefault();
        };
    })(), true);

    document.querySelectorAll("#signup-form input").forEach(function (element) {
        element.addEventListener('blur', function () {
            getErrorInfo();
        });
    });

    document.querySelectorAll("#signup-form input").forEach(function (element) {
        element.addEventListener('blur', function () {
            // if input field passes validation remove the error class, else add it
            if (this.checkValidity()) {
                this.classList.remove('error-input');
            }
            else {
                this.classList.add('error-input');
            }
        });
    });

    /* submit event on form */
    document.querySelector("#signup-form").addEventListener('submit', function (e) {
        // if form has not passed validation 
        if (!this.checkValidity()) {
            // check validation for each input field inside the form
            // if input field is valid then remove the error class, else add it
            this.querySelectorAll("input").forEach(function (element) {
                if (element.checkValidity())
                    element.classList.remove('error-input');
                else
                    element.classList.add('error-input');
            });
            getErrorInfo();
            e.preventDefault();
        }
    });
}