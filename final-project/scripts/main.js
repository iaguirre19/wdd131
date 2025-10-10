const productRoles = [
    {
        title: "Blackberry Jam",
        image: "images/menu/rol-01.webp",
        background: "#f5e1ef",
    },
    {
        title: "Cinnamon Glazed",
        image: "images/menu/roll-02.webp",
        background: "#f9e8d2",
    },
    {
        title: "Chocolate Walnut",
        image: "images/menu/roll-03.webp",
        background: "#e6d7c3",
    },
];

// Function to render product cards
function renderProductCards() {
    const productContainer = document.querySelector(".product-image-container");

    if (productContainer) {
        productContainer.innerHTML = "";

        productRoles.forEach((product) => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.style.backgroundColor = product.background;

            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-card-title-content">
                    <h3 class="product-title">${product.title}</h3>
                </div>
            `;

            productContainer.appendChild(card);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");

    if (toggle && header && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = header.classList.toggle("nav-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        nav.addEventListener("click", (e) => {
            const target = e.target;
            if (target instanceof Element && target.closest("a")) {
                header.classList.remove("nav-open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Render the product cards only if we're on the home page
    if (document.querySelector(".product-image-container")) {
        renderProductCards();
    }

    // Update copyright year
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Add scroll effects for header
    if (header) {
        const scrollThreshold = 20; // How far to scroll before adding the class

        function handleScroll() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }

        // Initial check
        handleScroll();

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
    }
});
