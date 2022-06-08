// Valida a quantidade máxima de caracteres.

const tel = document.querySelector("#tel");
const rg = document.querySelector("#rg");
const cpf = document.querySelector("#cpf");
const registro = document.querySelector("#registro");
const cep = document.querySelector("#cep");
const numero = document.querySelector("#numero");


tel.addEventListener("keypress", function (e) {

    const inputLength = tel.value.length; // quantidade de caracteres digitados.
    const maxChars = 12; // máximo de caracteres permitidos.

    if (inputLength >= maxChars) {
        e.preventDefault();
    }
})

rg.addEventListener("keypress", function (e) {

    const inputLength = rg.value.length;
    const maxChars = 12;

    if (inputLength >= maxChars) {
        e.preventDefault();
    }
})

cpf.addEventListener("keypress", function (e) {

    const inputLength = cpf.value.length;
    const maxChars = 11;

    if (inputLength >= maxChars) {
        e.preventDefault();
    }
})

registro.addEventListener("keypress", function (e) {

    const inputLength = registro.value.length;
    const maxChars = 10;

    if (inputLength >= maxChars) {
        e.preventDefault();
    }
})

cep.addEventListener("keypress", function (e) {

    const inputLength = cep.value.length;
    const maxChars = 8;

    if (inputLength >= maxChars) {
        e.preventDefault();
    }
})

numero.addEventListener("keypress", function (e) {

    const inputLength = numero.value.length;
    const maxChars = 6;

    if (inputLength >= maxChars) {
        e.preventDefault();
    }
});