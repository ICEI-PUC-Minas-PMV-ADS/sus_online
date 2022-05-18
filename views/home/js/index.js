import { UserController } from '../../../controllers/UserController.js'

/*
    Ocorre antes que o formulário seja exibido pela primeira vez.
*/
$(document).ready(() => {
    usuarioLogado_Load();
});

/*
    Preenche os campos referentes ao cadastro de
    forma dinamica a partir do usuário logado.
*/
function usuarioLogado_Load() {
    var controller = new UserController();
    var idUserLogged = sessionStorage.getItem('user-logged');

    var user = controller.findById(idUserLogged);
    console.log(user);
}