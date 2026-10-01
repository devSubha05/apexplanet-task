// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Check Name
    if (name === "") {
        alert("Please enter your name.");
        return;
    }


    // Check Email
    if (email === "") {
        alert("Please enter your email.");
        return;
    }


    // Check Message
    if (message === "") {
        alert("Please enter your message.");
        return;
    }


    // Success
    alert(
        "Thank you " +
        name +
        "! Your message has been submitted."
    );


    // Clear form
    contactForm.reset();

});