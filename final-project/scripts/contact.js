document.addEventListener("DOMContentLoaded", () => {
    // DOM element references
    const contactForm = document.getElementById("contactForm");
    const formSubmissionMessage = document.getElementById(
        "formSubmissionMessage"
    );
    const closeMessageButton = document.getElementById("closeMessage");
    const currentYearElement = document.getElementById("currentYear");

    // Update current year in footer
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }

    // Exit if form doesn't exist on this page
    if (!contactForm) return;

    // Display validation error for a field
    const showError = (inputElement, message) => {
        const formGroup = inputElement.parentElement;
        formGroup.classList.add("error");

        let errorDisplay = formGroup.querySelector(".error-message");

        if (!errorDisplay) {
            errorDisplay = document.createElement("div");
            errorDisplay.className = "error-message";
            formGroup.appendChild(errorDisplay);
        }

        errorDisplay.textContent = message;
    };

    // Remove error state from a field
    const removeError = (inputElement) => {
        const formGroup = inputElement.parentElement;
        formGroup.classList.remove("error");

        const errorDisplay = formGroup.querySelector(".error-message");
        if (errorDisplay) {
            errorDisplay.textContent = "";
        }
    };

    // Validate a specific field
    const validateField = (inputElement) => {
        if (!inputElement.hasAttribute("required")) return true;

        let isValid = true;

        // Clear previous errors
        removeError(inputElement);

        // Check if empty
        if (inputElement.value.trim() === "") {
            showError(inputElement, "This field is required");
            isValid = false;
        } else if (inputElement.type === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(inputElement.value)) {
                showError(inputElement, "Please enter a valid email address");
                isValid = false;
            }
        }

        return isValid;
    };

    // Validate the entire form
    const validateForm = () => {
        let isFormValid = true;

        const requiredFields = contactForm.querySelectorAll(
            "input[required], select[required], textarea[required]"
        );

        requiredFields.forEach((field) => {
            if (!validateField(field)) {
                isFormValid = false;
            }
        });

        return isFormValid;
    };

    // Save form data to localStorage
    const saveFormData = () => {
        const formData = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
            newsletter: document.getElementById("newsletter").checked,
            submissionDate: new Date().toISOString(),
        };

        let previousContacts =
            JSON.parse(localStorage.getItem("rayaneContactSubmissions")) || [];

        previousContacts.push(formData);

        localStorage.setItem(
            "rayaneContactSubmissions",
            JSON.stringify(previousContacts)
        );
        console.log("Form saved:", formData);

        return formData;
    };

    // Validate fields on blur
    contactForm.querySelectorAll("input, select, textarea").forEach((input) => {
        input.addEventListener("blur", () => {
            validateField(input);
        });

        input.addEventListener("input", () => {
            if (input.parentElement.classList.contains("error")) {
                validateField(input);
            }
        });
    });

    // Handle form submission
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            const savedData = saveFormData();
            formSubmissionMessage.classList.remove("hidden");
            contactForm.reset();
        }
    });

    // Close success message
    if (closeMessageButton) {
        closeMessageButton.addEventListener("click", () => {
            formSubmissionMessage.classList.add("hidden");
        });
    }
});
