// Selecting form and input elements
const form = document.querySelector("form");
const mobileInput = document.getElementById("mobile");

//Valid Credentials
const validEmail = "valid_user@example.com";
const validPhoneNumber = "09088175555";

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
};

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const firstnameinput = document.getElementById("firstname");
    const lastnameinput = document.getElementById("lastname");
    const emailInput = document.getElementById("email");
    const mobileInput = document.getElementById("mobile");
    const businessInput = document.getElementById("business");
    const industryType = document.getElementById("industryType");
    const addressInput = document.getElementById("address");
    const provinceInput = document.getElementById("province");
    const cityInput = document.getElementById("city");
    const zipCodeInput = document.getElementById("zipCode");
    const privacyPolicy = document.getElementById("privacyPolicy");
    const termsConditions = document.getElementById("termsConditions");


    // Getting trimmed values from input fields
    const fullfirstname = firstnameinput.value.trim();
    const fulllastname = lastnameinput.value.trim();
    const email = emailInput.value.trim();
    const mobile = mobileInput.value.trim();
    const business = businessInput.value.trim();
    const industry = industryType.value;
    const address = addressInput.value.trim();
    const province = provinceInput.value.trim();
    const city = cityInput.value.trim();
    const zipCode = zipCodeInput.value.trim();

    // Regular expression pattern for email and mobile number validation
    const alphabeticPattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const mobilePattern = /^09[0-9]{9}$/;
    const zipCodePattern = /^[0-9]{4,5}$/;
    const businessPattern = /^[a-zA-Z0-9 .,&-]+$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    let hasError = false;

    // Validate input fields
    if (fullfirstname === "") {
        showError(firstnameinput, "Please input your first name");
        hasError = true;
    } else if (!alphabeticPattern.test(fullfirstname)) {
        showError(firstnameinput, "Enter a valid first name (alphabetic characters only)");
        hasError = true;
    }
    if (fulllastname === "") {
        showError(lastnameinput, "Please input your last name");
        hasError = true;
    } else if (!alphabeticPattern.test(fulllastname)) {
        showError(lastnameinput, "Enter a valid last name (alphabetic characters only)");
        hasError = true;
    }
    if (email === "") {
        showError(emailInput, "Please input your email address");
        hasError = true;
    } else if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address (e.g., user@example.com)");
        hasError = true;
    }
    if (mobile === "") {
        showError(mobileInput, "Please input your mobile number");
        hasError = true;
    } else if (!mobilePattern.test(mobile)) {
        showError(mobileInput, "Enter a valid 11-digit mobile number starting with 09");
        hasError = true;
    }
    if (business === "") {
        showError(businessInput, "Please input your business name");
        hasError = true;
    } else if (!businessPattern.test(business)) {
        showError(businessInput, "Business name can only contain letters, numbers, spaces, and the symbols (.-,&)");
        hasError = true;
    }
    if (industry === "") {
        showError(industryType, "Select an industry type");
        hasError = true;
    }
    if (address === "") {
        showError(addressInput, "Enter your address");
        hasError = true;
    }
    if (province === "") {
        showError(provinceInput, "Enter your province");
        hasError = true;
    }
    if (city === "") {
        showError(cityInput, "Enter your city/municipality");
        hasError = true;
    }
    if (!zipCodePattern.test(zipCode)) {
        showError(zipCodeInput, "Enter a valid 4-5 digit zip code");
        hasError = true;
    }

    // Validate checkboxes
    if (!privacyPolicy.checked) {
        const errorText = document.createElement("small");
        errorText.classList.add("error-text");
        errorText.innerText = "You must agree to the Privacy Policy";
        privacyPolicy.closest(".checkbox-group").appendChild(errorText);
        hasError = true;
    }

    if (!termsConditions.checked) {
        const errorText = document.createElement("small");
        errorText.classList.add("error-text");
        errorText.innerText = "You must agree to the Terms and Conditions";
        termsConditions.closest(".checkbox-group").appendChild(errorText);
        hasError = true;
    }

    // Stop submission if there are any errors
    if (hasError) return;

    // Precondition: Validate against hardcoded credentials
    if (email === validEmail && mobile === validPhoneNumber) {
        alert("PASS: User credentials are valid.");
        form.submit(); // Proceed with submission if valid
    } else {
        alert("FAIL: Invalid credentials. Please enter the correct email and phone number.");
    }
};

// Handling form submission event
form.addEventListener("submit", handleFormData);