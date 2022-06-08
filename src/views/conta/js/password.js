// valida a senha e confimarção de senha

const password = document.querySelector("#password");
const passwordTwo = document.querySelector("#password-two");

password.addEventListener("keypress", function(e) {

    const inputPass = password.value.length; // quantidade de caracteres digitados.
    const maxChars = 20; // máximo de caracteres.

    if (inputPass >= maxChars) {
        e.preventDefault();
    }
})

function confirmaSenha (password, passwordTwo) {

    if (password === '' || password.length <= 6) {

        console.log("Preencha esse campo. A senha deve conter no mínimo 6 caracteres.");

    } else if (password !== passwordTwo) {

        console.log("A senha não confere.");

    } else {
        console.log("Senha confirmada.");
    }
}