// team card flip logic
export function initTeamCardFlip() {
    const teamContainer = document.querySelector('.team-container');

    if (teamContainer) {
        teamContainer.addEventListener('click', function (e) {
            // Check if clicked element is a button
            if (e.target.classList.contains('team-card-btn') ||
                e.target.parentElement.classList.contains('team-card-btn')) {

                const btn = e.target.classList.contains('team-card-btn') ?
                    e.target : e.target.parentElement;
                const card = btn.closest('.team-card');

                if (card) {
                    // If button is in front, flip to back
                    if (btn.closest('.team-card-front')) {
                        card.classList.add('flipped');
                    }
                    // If button is in back, flip to front
                    else if (btn.closest('.team-card-back')) {
                        card.classList.remove('flipped');
                    }
                }
            }
        });
    }
}
