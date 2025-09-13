// Function to handle last year content update
const handleCurrentYearContent = (currentYearContent) => {
    if (currentYearContent) {
        const currentYear = new Date().getFullYear();
        currentYearContent.textContent = currentYear;
    } else {
        console.error("Element with ID 'currentYear' not found.");
    }
};
// Toggle menu function for responsive design hidde and show nav links
const toggleMenu = (hamburguerBtn, navLinks) => {
    if (hamburguerBtn && navLinks) {
        hamburguerBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Hamburguer button or navigation links not found.");
    }
};

// Initialize functions on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    const lastYearContent = document.getElementById("currentYear");
    const hamburguerBtn = document.getElementById("hamburguerBtn");
    const navLinks = document.getElementById("navLinks");
    handleCurrentYearContent(lastYearContent);
    toggleMenu(hamburguerBtn, navLinks);
});
