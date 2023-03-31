//Navbar stuff when on mobile mode
document.addEventListener("DOMContentLoaded", function() {
    const elemsSideNav = document.querySelectorAll('.sidenav');
    const instancesSideNav = M.Sidenav.init(elemsSideNav, {
    edge: 'right',
});
});

