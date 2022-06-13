import { UserController } from '../../controllers/UserController.js'

/*
    Ocorre antes que o formulário seja exibido pela primeira vez.
*/
$(document).ready(() => {
    handleLayout_Load();
    componenteSidebar_Load();
    $(document).on('click', '#sidebarCollapse', componenteSidebar_Click);
    $(document).on('click', '.redirect-custom', componentMenu_Click);
    $(document).on('click', '.dropdown-logout', componentLogout_Click);
});

/*

*/
async function handleLayout_Load() {
    var controller = new UserController();
    var idUserLogged = sessionStorage.getItem('user-logged');

    var user = controller.findById(idUserLogged);

    $('.data-partial').each(async function () {
        var type = $(this).attr("partial-type");
        var idComponent = $(this).attr("id");
        var partialBase = Boolean($(this).attr("partial-base")) ? "../../../" : "../../";

        var URL = Boolean($(this).attr("partial")) ?
            `${partialBase}components/${type}/${user.role}` :
            `${partialBase}components/${type}`

        $('<link />', {
            rel: 'stylesheet',
            href: `${URL}/index.css`
        }).appendTo('head');

        await $.ajax({
            url: `${URL}/index.html`,
            type: 'GET',
            success: function (data) {
                $(`#${idComponent}`).html(data);
                usuarioLogadoParameters_Load();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(`Erro ao realizar o carregamento! ${errorThrown}`)
            }
        });
    });
}

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

/*

*/
function usuarioLogadoParameters_Load() {
    var controller = new UserController();
    var idUserLogged = sessionStorage.getItem('user-logged');

    var user = controller.findById(idUserLogged);

    $("#user-name").text(user.nome);
}

/*

*/
function componentLogout_Click() {
    sessionStorage.removeItem('user-logged');
    window.location.href = window.location.href.includes("paciente") || window.location.href.includes("medico") ?
        "../../../" :
        "../../";
}