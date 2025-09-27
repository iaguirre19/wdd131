// Update the year in the footer
function updateYear() {
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = currentYear;
    }
}

// Show and hide navigation menu
function setupMenu() {
    const hamburgerButton = document.getElementById("hamburguerBtn");
    const navigationLinks = document.getElementById("navLinks");

    if (hamburgerButton && navigationLinks) {
        hamburgerButton.addEventListener("click", function () {
            navigationLinks.classList.toggle("active");
        });
    }
}

// Temple data array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    // Added local-image entries for offline availability
    {
        templeName: "Cuernavaca Mexico",
        location: "Cuernavaca, Mexico",
        dedicated: "2 October 2022",
        area: 5158,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/cuernavaca-mexico-temple/cuernavaca-mexico-temple-56184-main.jpg",
    },
    {
        templeName: "Guadalajara Mexico",
        location: "Guadalajara, Mexico",
        dedicated: "20 August 2017",
        area: 10764,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/105-Guadalajara-Mexico-Temple.jpg",
    },
    {
        templeName: "Puebla Mexico",
        location: "Puebla, Mexico",
        dedicated: "19 May 2024",
        area: 7002,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/puebla-mexico-temple/puebla-mexico-temple-46342-main.jpg",
    },
];

// Get the year from temple dedication date
function getTempleYear(temple) {
    if (temple && temple.dedicated) {
        const dateString = temple.dedicated.toString();
        const yearMatch = dateString.match(/(\d{4})/);
        if (yearMatch) {
            return parseInt(yearMatch[1]);
        }
    }
    return null;
}

// Format temple area with commas
function formatTempleArea(area) {
    if (typeof area === "number" && !isNaN(area)) {
        return area.toLocaleString() + " sq ft";
    }
    return "N/A";
}

// Create a temple card to display
function createTempleCard(temple) {
    const article = document.createElement("article");
    article.className = "temple-figure";

    const title = document.createElement("h3");
    title.className = "temple-caption";
    if (temple.templeName) {
        title.textContent = temple.templeName;
    } else {
        title.textContent = "Unknown Temple";
    }

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.className = "temple-image";
    image.loading = "lazy";
    if (temple.templeName) {
        image.alt = temple.templeName;
    } else {
        image.alt = "Temple image";
    }

    const location = document.createElement("p");
    if (temple.location) {
        location.textContent = "Location: " + temple.location;
    } else {
        location.textContent = "Location: N/A";
    }

    const dedication = document.createElement("p");
    if (temple.dedicated) {
        dedication.textContent = "Dedicated: " + temple.dedicated;
    } else {
        dedication.textContent = "Dedicated: N/A";
    }

    const area = document.createElement("p");
    area.textContent = "Area: " + formatTempleArea(temple.area);

    article.appendChild(title);
    article.appendChild(image);
    article.appendChild(location);
    article.appendChild(dedication);
    article.appendChild(area);

    return article;
}

// Show temples on the page
function displayTemples(templeList, pageTitle) {
    const heading = document.querySelector(".heading");
    const grid = document.querySelector(".temple-grid");

    if (heading) {
        heading.textContent = pageTitle;
    }

    if (grid) {
        grid.innerHTML = "";

        for (let i = 0; i < templeList.length; i++) {
            const templeCard = createTempleCard(templeList[i]);
            grid.appendChild(templeCard);
        }
    }
}

// Filter temples by old ones (before 1900)
function getOldTemples() {
    const oldTemples = [];
    for (let i = 0; i < temples.length; i++) {
        const year = getTempleYear(temples[i]);
        if (year && year < 1900) {
            oldTemples.push(temples[i]);
        }
    }
    return oldTemples;
}

// Filter temples by new ones (after 2000)
function getNewTemples() {
    const newTemples = [];
    for (let i = 0; i < temples.length; i++) {
        const year = getTempleYear(temples[i]);
        if (year && year > 2000) {
            newTemples.push(temples[i]);
        }
    }
    return newTemples;
}

// Filter temples by large area (over 90000 sq ft)
function getLargeTemples() {
    const largeTemples = [];
    for (let i = 0; i < temples.length; i++) {
        const temple = temples[i];
        if (typeof temple.area === "number" && temple.area > 90000) {
            largeTemples.push(temple);
        }
    }
    return largeTemples;
}

// Filter temples by small area (under 10000 sq ft)
function getSmallTemples() {
    const smallTemples = [];
    for (let i = 0; i < temples.length; i++) {
        const temple = temples[i];
        if (typeof temple.area === "number" && temple.area < 10000) {
            smallTemples.push(temple);
        }
    }
    return smallTemples;
}

// Set up navigation menu clicks
function setupNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function (event) {
            event.preventDefault();

            const linkText = this.textContent.trim();
            let templeList = [];

            if (linkText === "Home") {
                templeList = temples;
            } else if (linkText === "Old") {
                templeList = getOldTemples();
            } else if (linkText === "New") {
                templeList = getNewTemples();
            } else if (linkText === "Large") {
                templeList = getLargeTemples();
            } else if (linkText === "Small") {
                templeList = getSmallTemples();
            } else {
                templeList = temples;
            }

            displayTemples(templeList, linkText);
        });
    }
}

// Start everything when page loads
document.addEventListener("DOMContentLoaded", function () {
    updateYear();
    setupMenu();
    displayTemples(temples, "Home");
    setupNavigation();
});
