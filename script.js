document.addEventListener("DOMContentLoaded", function() {
    loadComponent("header.html", "header");
    loadComponent("sidebar.html", "sidebar");
    loadComponent("footer.html", "footer");
});

function loadComponent(file, id) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data);
}
