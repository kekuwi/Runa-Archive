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
    let selector = tag.innerHTML; // take out filter slector needed
    let filter = document.getElementsByClassName(selector);

    for (const i of filter) {
        i.classList.toggle("hide");
    };
};