$(document).ready(() => {
    componenteSidebar_Load();
    $('#sidebarCollapse').click(componenteSidebar_Click);
});

/*

*/
function componenteSidebar_Load() {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });
}

/*

*/
function componenteSidebar_Click() {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
}