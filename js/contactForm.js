// EmailJS form submission functionality
export function initContactForm() {
    // Initialize EmailJS with your public key
    emailjs.init("2TgE1hoACwVEA1HRE");

    // Form submission
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Send form using EmailJS
            emailjs.sendForm('service_uj3vlf1', 'template_k4vicsv', this)
                .then(() => {
                    alert("Email sent successfully!");
                    form.reset(); // Optional: clear form after send
                }, 
                (error) => {
                    console.error("EmailJS Error:", error);
                    alert("Failed to send email. Please try again.");
                });
        });
    }
}
