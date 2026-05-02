document.addEventListener("DOMContentLoaded", () => {

    // theme toggle
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }

    // modal logic for posters
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
    const posters = document.querySelectorAll(".project-poster");

    posters.forEach(poster => {
        poster.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };
    });

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };
    }

    if (modal) {
        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // confetti
    const containerL = document.querySelector('.confetti-container.left');
    const containerR = document.querySelector('.confetti-container.right');

    function createConfetti(container) {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(confetti);
        }
    }

    const confettiToggle = document.getElementById("confetti-toggle");
    let confettiEnabled = false;

    if (confettiToggle) {
        confettiToggle.addEventListener("click", () => {
            confettiEnabled = !confettiEnabled;
            if (confettiEnabled) {
                createConfetti(containerL);
                createConfetti(containerR);
            } else {
                containerL.innerHTML = '';
                containerR.innerHTML = '';
            }
        });
    }

    // back to top
    const bttButton = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        bttButton.style.display = window.scrollY > 200 ? "flex" : "none";
    });

    if (bttButton) {
        bttButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // smooth scrolling
    document.querySelectorAll('.circular-text a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});