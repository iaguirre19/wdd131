document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav");
    const title = document.querySelector(".title");


    hamburger.addEventListener("click", function() {
        menu.classList.toggle("active");
        title.classList.toggle("hidden-mobile");
        if (hamburger.innerHTML === "☰") {
            hamburger.innerHTML = "&times;";
        } else {
            hamburger.innerHTML = "☰";
        }
    });
    function showDocumentInfo() {
        const currentYear = document.getElementById("currentyear");
        const lastModified = document.getElementById("lastModified");
       
        if (currentYear && lastModified) {
          currentYear.innerText = new Date().getFullYear();
          lastModified.innerText = "Last modified: " + document.lastModified;
        }
       }
    
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove("active");
            title.classList.remove("hidden-mobile");
            hamburger.innerHTML = "☰";
        }
    });

    showDocumentInfo();
});
