import { UserController } from '../../controllers/UserController.js'

/*
    Ocorre antes que o formulário seja exibido pela primeira vez.
*/
$(document).ready(() => {
    componenteSidebar_Load();
    $('#sidebarCollapse').click(componenteSidebar_Click);
    $('.redirect-custom').click(componentMenu_Click);
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

/*

*/
function componentMenu_Click(event) {
    event.preventDefault();
    var controller = new UserController();
    var idUserLogged = sessionStorage.getItem('user-logged');

    var user = controller.findById(idUserLogged);

    window.location.href = 
        $(this).attr('link-redirect') !== 'home' ?
            `./../${$(this).attr('link-redirect')}/${user.role}` :
            `./../${$(this).attr('link-redirect')}/`;
}