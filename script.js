function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".pic-container img");

    images.forEach(img => {
        img.addEventListener("mouseenter", function() {
            this.classList.add("zoom");
        });

        img.addEventListener("mouseleave", function() {
            this.classList.remove("zoom");
        });
    });
});

// Warte auf das Laden des DOMs
document.addEventListener("DOMContentLoaded", function() {
    // Wähle das Element mit der ID 'projects' aus
    var projectsNavItem = document.getElementById('projects');

    // Speichere den ursprünglichen Text des Links
    var originalText = projectsNavItem.textContent;

    // Füge ein Event-Listener für das Mouseover-Ereignis hinzu
    projectsNavItem.addEventListener('mouseover', function() {
        // Ändere den Text auf 'Coming Soon' beim Mouseover
        projectsNavItem.textContent = 'Coming Soon';
    });

    // Füge ein Event-Listener für das Mouseout-Ereignis hinzu
    projectsNavItem.addEventListener('mouseout', function() {
        // Setze den ursprünglichen Text zurück, wenn der Mauszeiger den Navigationspunkt verlässt
        projectsNavItem.textContent = originalText;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const openImageWords = document.querySelectorAll(".open-image");
    const images = document.querySelectorAll(".hidden-image");

    openImageWords.forEach((openImageWord, index) => {
        openImageWord.addEventListener("click", function() {
            const currentImage = images[index];
            if (currentImage.classList.contains("active")) {
                currentImage.classList.remove("active");
            } else {
                images.forEach(img => img.classList.remove("active"));
                currentImage.classList.add("active");
            }
            adjustImageSize();
        });
    });

    function adjustImageSize() {
        const activeImages = document.querySelectorAll(".hidden-image.active");
        if (activeImages.length > 1) {
            activeImages.forEach(img => img.style.width = "50%");
        } else {
            activeImages.forEach(img => img.style.width = "100%");
        }
    }
});