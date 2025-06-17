// Hamburger menu auto-close functionality
export function initNavbar() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close the hamburger menu by unchecking the checkbox
            if (menuToggle) {
                menuToggle.checked = false;
            }
        });
    });
}
