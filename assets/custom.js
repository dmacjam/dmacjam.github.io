document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const headers = document.querySelectorAll('.collapsible-header');
    const collapsibleContents = document.querySelectorAll('.collapsible-content');

    function toggleVisibility(id) {
        collapsibleContents.forEach(content => {
            if (content.previousElementSibling.id === id) {
                content.classList.toggle('show');
                content.previousElementSibling.querySelector('.toggle-icon').classList.toggle('rotate');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1);
            toggleVisibility(targetId);
        });
    });

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const targetId = this.id;
            toggleVisibility(targetId);
        });
    });
});