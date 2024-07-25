// top bar
let navbar = document.createElement("header");
    navbar.classList.add("navbar");

// title logo
let logoLink = document.createElement("a");
    logoLink.style = ("color: var(--p-fn-color)");
    logoLink.href = ("./");
    
let logo = document.createElement("h1");
    logo.innerText = ("Runa's Archive");
    
// nav link
let navLink = document.createElement("div");
    navLink.classList.add("flex", "flex-row")

let discordLink = document.createElement("a");
    discordLink.href= ("https://discord.gg/GdfHVZ6Z33");
    discordLink.innerText = ("Discord");

// assign everything
navbar.appendChild(logoLink);
navbar.appendChild(navLink);

logoLink.appendChild(logo);

navLink.appendChild(discordLink);

document.body.appendChild(navbar);