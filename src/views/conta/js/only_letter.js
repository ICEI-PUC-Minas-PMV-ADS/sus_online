// valida os campos nome, nome da mãe e endereço, para aceitar apenas letras.

const inputName = document.querySelector("#nome");
const inputNameMae = document.querySelector("#nomeMae");
const inputEndereco = document.querySelector("#endereco");

inputName.addEventListener("keypress", function (event) {

    const keyCode = (event.keyCode ? event.keyCode : event.wich);

    // 47 ao 58 = São números
    if (keyCode > 47 && keyCode < 58) {
        event.preventDefault();
    }
})

inputNameMae.addEventListener("keypress", function (event) {
    const keyCode = (event.keyCode ? event.keyCode : event.wich);

    if (keyCode > 47 && keyCode < 58) {
        event.preventDefault();
    }
})

inputEndereco.addEventListener("keypress", function (event) {
    const keyCode = (event.keyCode ? event.keyCode : event.wich);

    if (keyCode > 47 && keyCode < 58) {
        event.preventDefault();
    }
})