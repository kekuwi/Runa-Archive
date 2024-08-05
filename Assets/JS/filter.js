function filterPopUp() {
    document.getElementById("filter-popup").classList.toggle("hide");
};

function hideAllCard() {
    let allCard = document.getElementsByClassName("card-container");

    for (const i of allCard) {
        i.classList.add("hide");
    };
};

function filter(tag) {
    hideAllCard();
    let selector = tag.id; // take out filter slector needed
    let filter = document.getElementsByClassName(selector);

    for (const i of filter) {
        i.classList.toggle("hide");
    };

    resetFilter();
    let selectedFilter = document.getElementById(selector);
        selectedFilter.classList.remove("filter-button");
        selectedFilter.classList.add("filter-button-active");

    document.getElementById("selected-filter").innerHTML = (tag.outerText); // changes text depend on which tag is active
};

function resetFilter() {
    let filterButton = document.getElementsByClassName("filter-button-active");

    for (const i of filterButton) {
        i.classList.remove("filter-button-active");
        i.classList.add("filter-button");
    };
};

function normalizeString(string) {
    let myString = string;
    let stringWithoutSlash = myString.replace(/\//g, '');
    let stringWithoutSpace = stringWithoutSlash.replace(/\s+/g, '');
    let stringWithoutDash = stringWithoutSpace.replace(/-/g, '');
    return stringWithoutDash;
};