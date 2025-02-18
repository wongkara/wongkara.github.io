document.addEventListener("DOMContentLoaded", () => {
    /** 
     * Fade-in effect for project sections 
     * Ensures each project fades in sequentially with a small delay.
     */
    const projects = document.querySelectorAll(".project");
    projects.forEach((project, index) => {
        project.style.opacity = "0"; // Initially hide the project
        setTimeout(() => {
            project.style.transition = "opacity 0.5s ease-in-out";
            project.style.opacity = "1"; // Gradually show the project
        }, index * 200); // Delay increases per project
    });

    /** 
     * Theme Toggle for Dark Mode
     * Toggles the "light-mode" class on the body when the button is clicked.
     */
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }

    /** 
     * Modal Logic for Poster Image 
     * Allows the project poster image to open in a fullscreen modal view.
     */
    const modal = document.getElementById("imgModal");
    const img = document.getElementById("posterImg");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Open modal when the poster image is clicked
    if (img && modal) {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    }

    // Close the modal when the close button (×) is clicked
    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
    }

    // Close the modal when clicking anywhere outside the modal image
    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    /** 
     * Confetti Logic 
     * Generates and animates confetti on the left and right margins.
     */
    const confettiCount = 50; // Adjust the number of confetti pieces
    const confettiContainerLeft = document.querySelector('.confetti-container.left');
    const confettiContainerRight = document.querySelector('.confetti-container.right');

    function createConfetti(container) {
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2s and 5s
            confetti.style.animationDelay = `${Math.random() * 5}s`; // Random delay up to 5s
            container.appendChild(confetti);
        }
    }

    function toggleConfetti() {
        if (window.innerWidth < 1000) {
            confettiContainerLeft.innerHTML = '';
            confettiContainerRight.innerHTML = '';
        } else {
            confettiContainerLeft.innerHTML = ''; // Clear existing confetti
            confettiContainerRight.innerHTML = ''; // Clear existing confetti
            createConfetti(confettiContainerLeft);
            createConfetti(confettiContainerRight);
        }
    }

    // Toggle confetti on window resize
    window.addEventListener('resize', toggleConfetti);

    /** 
     * Back to Top Button Logic 
     * Shows the button when the user scrolls down and scrolls to the top when clicked.
     */
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) { // Show button after scrolling down 200px
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /** 
     * Confetti Toggle Button Logic 
     * Toggles the confetti on and off when the button is clicked.
     */
    const confettiToggle = document.getElementById("confetti-toggle");
    let confettiEnabled = false;

    confettiToggle.addEventListener("click", () => {
        confettiEnabled = !confettiEnabled;
        if (confettiEnabled) {
            createConfetti(confettiContainerLeft);
            createConfetti(confettiContainerRight);
        } else {
            confettiContainerLeft.innerHTML = '';
            confettiContainerRight.innerHTML = '';
        }
    });

    /** 
     * Smooth Scrolling for Circular Text Links
     */
    document.querySelectorAll('.circular-text a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});