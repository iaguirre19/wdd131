document.addEventListener("DOMContentLoaded", () => {
    // Update copyright year
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Menu product data
    const signatureRolls = [
        {
            title: "Classic Cinnamon Roll",
            image: "images/menu/roll-01.webp",
            description:
                "Our traditional cinnamon roll with creamy vanilla frosting",
            price: "$4.99",
            background: "#f5e1ef",
        },
        {
            title: "Caramel Pecan",
            image: "images/menu/roll-02.webp",
            description:
                "Rich caramel glaze topped with crunchy toasted pecans",
            price: "$5.99",
            background: "#f9e8d2",
        },
        {
            title: "Chocolate Walnut",
            image: "images/menu/roll-03.webp",
            description:
                "Chocolate-infused dough with walnut pieces and chocolate drizzle",
            price: "$5.99",
            background: "#e6d7c3",
        },
        {
            title: "Maple Bacon",
            image: "images/menu/roll-04.webp",
            description:
                "Sweet maple glaze with crispy bacon bits for a sweet and savory combination",
            price: "$6.49",
            background: "#e8d0b5",
        },
        {
            title: "Cream Cheese Delight",
            image: "images/menu/roll-05.webp",
            description:
                "Extra-soft roll with our signature cream cheese frosting swirled throughout",
            price: "$5.49",
            background: "#f0e6d8",
        },
        {
            title: "Orange Cardamom",
            image: "images/menu/roll-06.webp",
            description:
                "Citrus infused roll with subtle cardamom spice and orange zest glaze",
            price: "$6.29",
            background: "#f8e3c5",
        },
    ];

    const seasonalRolls = [
        {
            title: "Pumpkin Spice Roll",
            image: "images/menu/roll-07.webp",
            description:
                "Fall favorite with pumpkin-infused dough and cream cheese frosting",
            price: "$6.49",
            background: "#f8daa9",
        },
        {
            title: "Berry Blast",
            image: "images/menu/roll-08.webp",
            description:
                "Sweet roll filled with mixed berries and topped with berry glaze",
            price: "$6.49",
            background: "#e8d3f0",
        },
    ];

    // Function to render products in the specified container
    function renderProducts(products, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        products.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.className = "menu-product-card";
            productCard.style.backgroundColor = product.background;

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="menu-product-image">
                <div class="menu-product-content">
                    <h3 class="menu-product-title">${product.title}</h3>
                    <p class="menu-product-description">${product.description}</p>
                    <div class="menu-product-price-row">
                        <span class="menu-product-price">${product.price}</span>
                        <button class="menu-product-action">Add to Cart</button>
                    </div>
                </div>
            `;

            container.appendChild(productCard);
        });
    }

    // Render all product sections
    renderProducts(signatureRolls, "signature-rolls");
    renderProducts(seasonalRolls, "seasonal-rolls");
});
