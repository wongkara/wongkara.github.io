document.addEventListener("DOMContentLoaded", () => {

    // Theme Toggle for Dark Mode
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }

    // Modal Logic for Poster Image 
    const modal = document.getElementById("imgModal");
    const img = document.getElementById("posterImg");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Open modal when the poster image is clicked
    if (img && modal) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    }

    // Close the modal when the close button is clicked
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    }

    // Close the modal when clicking anywhere outside the modal image
    if (modal) {
        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // Confetti Logic 
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

    // Confetti Toggle Button Logic 
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

    // Back to Top Button Logic 
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

    // Smooth Scrolling for Circular Text Links
    document.querySelectorAll('.circular-text a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});