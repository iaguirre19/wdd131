document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const yearElement = document.getElementById("currentyear");

    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
    }
});
