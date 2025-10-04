document.addEventListener("DOMContentLoaded", function () {
    const key = "reviewCount";
    const current = parseInt(localStorage.getItem(key) || "0", 10) || 0;
    const next = current + 1;
    localStorage.setItem(key, String(next));

    const output = document.getElementById("reviewCount");
    if (output) {
        output.textContent = String(next);
    }
});
