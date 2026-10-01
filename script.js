document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const address = document.getElementById("address").value.trim();

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    const skills = document.querySelectorAll(
        '.skills input[type="checkbox"]:checked'
    );

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (phone === "" || phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (department === "") {
        alert("Please select your department.");
        return;
    }

    if (year === "") {
        alert("Please select your year.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    if (skills.length === 0) {
        alert("Please select at least one skill.");
        return;
    }

    if (address === "") {
        alert("Please enter your address.");
        return;
    }

    document.getElementById("successMessage").innerHTML =
        "✅ Registration Successful!";

    document.getElementById("registrationForm").reset();

});