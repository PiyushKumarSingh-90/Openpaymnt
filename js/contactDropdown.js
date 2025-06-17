// Contact form dropdown functionality
export function initContactDropdown() {
    const toggleForm = (show = null) => {
        const form = document.getElementById('contactForm');
        const btn = document.getElementById('contactToggleBtn');
        if (!form || !btn) return;

        if (show === null) {
            // Toggle mode
            form.classList.toggle('show');
            btn.classList.toggle('active');
        } else if (show) {
            // Show mode
            form.classList.add('show');
            btn.classList.add('active');
        } else {
            // Hide mode
            form.classList.remove('show');
            btn.classList.remove('active');
        }
    };

    // Setup event listeners
    document.getElementById('contactToggleBtn')?.addEventListener('click', () => toggleForm());
    document.querySelector('.close-btn')?.addEventListener('click', () => toggleForm(false));
    document.querySelector('.contact-link')?.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
        // Form is not automatically opened, user needs to click the dropdown button
    });
}
