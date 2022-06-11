// valida CPF (CPF para teste: 52998224725)

const btn = document.querySelector("#btn-submit");

btn.addEventListener('click', function(validaCpf) {
    var cpf = document.getElementById("#cpf"); // obtém o valor digitado no input.
    var primeirosNoveDigitos = cpf.substring(0, 9); // utiliza apenas os nove primeiros valores digitados.
    var multiplicaNoveDigitos; //multiplicar os nove digitos de forma crescente, começando pelo 1.
    var somaNoveDigitos; // soma o resultado de multiplicaNovedigitos.
    var restoNoveDigitos; // pega o valor de somaNoveDigitos e divide por 11 (quantidade de elementos no cpf). O resto é referente ao primeiro dígito verificador.

    for (multiplicaNoveDigitos = 1; multiplicaNoveDigitos < primeirosNoveDigitos.lenght; multiplicaNoveDigitos++) {
    
    somaNoveDigitos = primeirosNoveDigitos.substring(0, 9) * multiplicaNoveDigitos;
    
    restoNoveDigitos = somaNoveDigitos % 11;

    }

    var primeirosDezDigitos = cpf.substring(0, 10); // utiliza os dez primeiros valores digitados.
    var multiplicaDezDigitos; //multiplicar os dez digitos de forma crescente, começando pelo 0.
    var somaDezDigitos; // soma o resultado de multiplicaNovedigitos.
    var restoDezDigitos; // pega o valor de somaNoveDigitos e divide por 11 (quantidade de elementos no cpf). O resto é referente ao primeiro dígito verificador.

    for (multiplicaDezDigitos = 0; multiplicaDezDigitos < primeirosDezDigitos.lenght; multiplicaDezDigitos++) {
    
    somaDezDigitos = primeirosDezDigitos.substring(0, 10) * multiplicaDezDigitos;
    
    restoDezDigitos = somaDezDigitos % 11;

    }

    if ((restoNoveDigitos + restoDezDigitos) === cpf.substring(9, 2)) { // informa se o CPF é válido ou não.

        console.log("CPF Válido!");

    } else {

        console.log("CPF Inválido!");
    }

})