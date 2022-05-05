import { userController } from '/src/controllers/userController.js'

/*
    Ocorre antes que o formulário seja exibido pela primeira vez.
*/
$(document).ready(() => {
    componenteLogin_Load();
    $(".login-custom").click(componenteLogin_Click);
    $(".register-custom").click(componenteRegistro_Click);
    $("input").click(componenteInput_TextChanged);
    $("#botao-login").click(componenteBotaoLogin_Click);
    $("#botao-register").click(componenteBotaoRegister_Click);
});

function componenteLogin_Load() {
    $(".register").hide();
    $(".login-custom").addClass("active");
};

/*
    Ao ser acionado este evento exibe campos que permite ao usuário realizar o cadastro
*/
function componenteLogin_Click() {
    $(this).addClass("active");
    $(".register-custom").removeClass("active");
    $(".login").show();
    $(".register").hide();
};

/*
    Ao ser acionado este evento exibe campos que permite ao usuário realizar o login
*/
function componenteRegistro_Click() {
    $(this).addClass("active");
    $(".login-custom").removeClass("active");
    $(".register").show();
    $(".login").hide();
};

/*

*/
function componenteInput_TextChanged() {
    $(".input-custom")
        .on("input", () => {
            // Verifica se o elemento (string) está vazio
            if (Boolean($(this).val())) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
};

/*
    Ao ser acionado este evento realiza o login do usuario
*/
function componenteBotaoLogin_Click() {
    var userLogin = new Object();
    var controller = new userController();
    // TODO: ADICIONAR VALIDACAO PARA OS CAMPOS

    $('.login-model').each(function () {
        userLogin[$(this).attr('type')] = $(this).val();
    });

    var userExists = controller.findByEmailAndPassword(userLogin);

    window.location.href = `/src/views/home/${userExists.role}/index.html`;
}

/*
    Ao ser acionado este evento realiza a criacao do usuario
*/
function componenteBotaoRegister_Click() {
    var userCreate = new Object();
    var controller = new userController();
    // TODO: ADICIONAR VALIDACAO PARA OS CAMPOS

    $('.register-model').each(function () {
        // Get value input dinamically
        userCreate[$(this).attr('model-type')] = $(this).val();
    });

    userCreate.role = $('select[name=selector] option').filter(':selected').val()

    controller.Save(userCreate);
    console.log(userCreate);
}