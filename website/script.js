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
});
