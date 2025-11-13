// top bar
let navbar = document.createElement("header");
    navbar.classList.add("navbar");

// Theme Toggle
let themeToggle = document.createElement("i");
    themeToggle.id = ("theme-toggle");
    themeToggle.classList.add("fa-solid");
    
// title logo
let logoLink = document.createElement("a");
    logoLink.href = ("./");

let logo = document.createElement("img");
    logo.src = ("Assets/favicon/android-chrome-192x192.png");
    logo.alt = ("Runa's Archive Logo");
    
// nav menu
let menuButton = document.createElement("i");
    menuButton.classList.add("fa-solid", "fa-bars");
    menuButton.id = ("toggle-navbar-menu");

let navMenu = document.createElement("div");
    navMenu.id = ("navbar-menu");
    navMenu.classList.add("hide");

// nav link
let discordLink = document.createElement("a");
    discordLink.href = ("https://discord.gg/7t8vQFb");
    discordLink.textContent = ("Discord");
let supportLink = document.createElement("a");
    supportLink.href = ("https://ko-fi.com/kekuwi");
    supportLink.textContent = ("Support Us");

// assign everything to the navbar
navbar.appendChild(themeToggle);
navbar.appendChild(logoLink);
navbar.appendChild(menuButton);
navbar.appendChild(navMenu);

logoLink.appendChild(logo);

navMenu.appendChild(discordLink);
navMenu.appendChild(supportLink);

document.body.appendChild(navbar);

//navbar menu button
document.getElementById('toggle-navbar-menu').addEventListener('click', toggleNavbarMenu);
function toggleNavbarMenu() {
    document.getElementById('navbar-menu').classList.toggle('navbar-menu');
    document.getElementById('navbar-menu').classList.toggle('hide');
}