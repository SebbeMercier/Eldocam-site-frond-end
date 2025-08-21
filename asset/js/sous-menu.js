document.addEventListener('DOMContentLoaded', function() {
    // Activite sub-menu toggle
    const activiteMenu = document.getElementById('activite-menu');
    const sousAct = document.getElementById('sous-act');

    activiteMenu.addEventListener('click', function() {
        // Toggle the display property of the activite sub-menu
        if (sousAct.style.display === 'none' || sousAct.style.display === '') {
            sousAct.style.display = 'block'; // Show the sub-menu
        } else {
            sousAct.style.display = 'none'; // Hide the sub-menu
        }
    });

    // Langue-mobile sub-menu toggle
    const langueMobile = document.getElementById('langue-mobile');
    const sousLangue = document.getElementById('sous-langue');

    langueMobile.addEventListener('click', function() {
        // Toggle the display property of the langue sub-menu
        if (sousLangue.style.display === 'none' || sousLangue.style.display === '') {
            sousLangue.style.display = 'block'; // Show the sub-menu
        } else {
            sousLangue.style.display = 'none'; // Hide the sub-menu
        }
    });
});