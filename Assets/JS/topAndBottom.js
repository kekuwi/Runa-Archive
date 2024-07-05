let navbar = document.createElement("header");
    navbar.classList.add("navbar");

let logoLink = document.createElement("a");
    logoLink.style = ("color: var(--p-fn-color)");
    logoLink.href = ("./index");
    
let logo = document.createElement("h1");
    logo.innerText = ("Runa's Archive");
    

logoLink.appendChild(logo);
navbar.appendChild(logoLink);
document.body.appendChild(navbar);