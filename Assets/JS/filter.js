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
};

function normalizeString(string) {
    let myString = string;
    let stringWithoutSlash = myString.replace(/\//g, '');
    let stringWithoutSpace = stringWithoutSlash.replace(/\s+/g, '');
    let stringWithoutDash = stringWithoutSpace.replace(/-/g, '');
    return stringWithoutDash;
} ;