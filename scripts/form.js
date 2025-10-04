const products = [
    { id: "rr-classic", name: "Classic Cinnamon Roll", averagerating: 4.8 },
    { id: "rr-pecan", name: "Pecan Roll", averagerating: 4.6 },
    {
        id: "rr-cream-cheese",
        name: "Cream Cheese Frosting Roll",
        averagerating: 4.9,
    },
    { id: "rr-berries", name: "Berries Roll", averagerating: 4.7 },
    { id: "rr-caramel", name: "Salted Caramel Roll", averagerating: 4.5 },
];

document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("productName");
    if (!select) return;

    for (let i = 0; i < products.length; i++) {
        const item = products[i];
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = item.name;
        select.appendChild(option);
    }
});
