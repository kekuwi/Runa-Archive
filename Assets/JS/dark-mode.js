// Function to toggle dark mode
function toggleDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme == 'dark') {
        document.querySelector("html").setAttribute("data-theme", "light");
        localStorage.setItem('theme', 'light');
        document.getElementById('theme-toggle').classList.remove('fa-sun');
        document.getElementById('theme-toggle').classList.add('fa-moon');
    } else {
        document.querySelector("html").setAttribute("data-theme", "dark");
        localStorage.setItem('theme', 'dark');
        document.getElementById('theme-toggle').classList.remove('fa-moon');
        document.getElementById('theme-toggle').classList.add('fa-sun');
    }
}

// Check the saved theme on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme == null) {
        const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (preferDarkMode === false) {
            document.getElementById('theme-toggle').classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
            document.querySelector("html").setAttribute("data-theme", "light");
        } else { 
            document.getElementById('theme-toggle').classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');};
            document.querySelector("html").setAttribute("data-theme", "dark");
    } if (savedTheme == 'dark') {
        document.getElementById('theme-toggle').classList.add('fa-sun');
        document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
        document.getElementById('theme-toggle').classList.add('fa-moon');
        document.querySelector("html").setAttribute("data-theme", "light");
    } 
}

// Add event listener to the toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);

