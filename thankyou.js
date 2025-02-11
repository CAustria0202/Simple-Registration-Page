const displayUserDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);

    // Retrieve user details from URL parameters (fallback to "N/A" if not found)
    const firstname = urlParams.get('firstname') || "N/A";
    const lastname = urlParams.get('lastname') || "N/A";
    const email = urlParams.get('email') || "N/A";
    const mobile = urlParams.get('mobile') || "N/A";
    const business = urlParams.get('business') || "N/A";
    const industry = urlParams.get('industry') || "N/A";
    const address = urlParams.get('address') || "N/A";
    const province = urlParams.get('province') || "N/A";
    const city = urlParams.get('city') || "N/A";
    const zipCode = urlParams.get('zipCode') || "N/A";

    // Populate user details on the page
    document.getElementById('user-firstname').textContent = firstname;
    document.getElementById('user-lastname').textContent = lastname;
    document.getElementById('user-email').textContent = email;
    document.getElementById('user-mobile').textContent = mobile;
    document.getElementById('user-business').textContent = business;
    document.getElementById('user-industry').textContent = industry;
    document.getElementById('user-address').textContent = address;
    document.getElementById('user-province').textContent = province;
    document.getElementById('user-city').textContent = city;
    document.getElementById('user-zipCode').textContent = zipCode;
};

document.addEventListener("DOMContentLoaded", displayUserDetails);
