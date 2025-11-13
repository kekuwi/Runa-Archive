window.onclick = function(event) {
    if (!event.target.matches('.category-button')) {
        var dropdowns = document.getElementsByClassName("category-list");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} 

function categoryDropDown() {
    document.getElementById("categoryDropDown").classList.toggle("show");
}