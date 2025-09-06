document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("primary-navigation");
    if (!toggle || !nav) return;

    toggle.setAttribute("aria-expanded", "false");

    const closeOnLinkClick = (e) => {
        if (e.target.closest("a")) {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open menu");
        }
    };

    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    nav.addEventListener("click", closeOnLinkClick);
});
