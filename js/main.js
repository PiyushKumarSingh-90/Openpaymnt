import { initNavbar } from './navbar.js';
import { initTeamCardFlip } from './teamCardFlip.js';
import { initContactDropdown } from './contactDropdown.js';
import { initContactForm } from './contactForm.js';

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function () 
{
    initNavbar();
    initTeamCardFlip();
    initContactDropdown();
    initContactForm();
});
