document.addEventListener('DOMContentLoaded', function() {
    
    const activiteMenu = document.getElementById('activite-menu');
    const sousAct = document.getElementById('sous-act');
    const act = document.querySelector(".act");
    const sousMenu = document.getElementById("sous-act");
    const chevron = act.querySelector("i");

    activiteMenu.addEventListener('click', function() {
        // Toggle the display property of the activite sub-menu
        if (sousAct.style.display === 'none' || sousAct.style.display === '') {
            sousAct.style.display = 'block'; // Show the sub-menu
        } else {
            sousAct.style.display = 'none'; // Hide the sub-menu
        }
    });

    // Langue-mobile sub-menu toggle
    const langueMobile = document.getElementById('langue');
    const sousLangue = document.getElementById('sous-langue');

    langueMobile.addEventListener('click', function() {
        // Toggle the display property of the langue sub-menu
        if (sousLangue.style.display === 'none' || sousLangue.style.display === '') {
            sousLangue.style.display = 'block'; // Show the sub-menu
        } else {
            sousLangue.style.display = 'none'; // Hide the sub-menu
        }
    });

    act.addEventListener("click", function () {
        sousMenu.classList.toggle("open");
        chevron.classList.toggle("rotate");
    });

    const langue = document.querySelector(".langue-link");

const chevronLangue = langue.querySelector("i");

langue.addEventListener("click", function () {
    sousLangue.classList.toggle("open");
    chevronLangue.classList.toggle("rotate");}
);})