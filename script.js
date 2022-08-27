//Navbar stuff when on mobile mode
document.addEventListener("DOMContentLoaded", function() {
    const elemsSideNav = document.querySelectorAll('.sidenav');
    const instancesSideNav = M.Sidenav.init(elemsSideNav, {
    edge: 'right',
});
});

$(window).scroll(function () {
    //You've scrolled this much:
    if ($(window).scrollTop() > 100) {
        $('.brand-logo').css('opacity', '1'); 
    }else if ($(window).scrollTop() < 100) {
        $('.brand-logo').css('opacity', '0'); 
    }
});
