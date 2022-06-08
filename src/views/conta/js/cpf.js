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

/* Função usando laço de repetição

function validaCpf() {

    var cpf = document.querySelector("#cpf");
    var somaNove = multiplicarNumeros(9, cpf, 10); //soma referente aos 9 primeiros dígitos.
    var somaDez = multiplicarNumeros(10, cpf, 11);
    var restoNove = verificador(somaNove); // para descobrir o dígito verificador.
    var restoDez = verificador(somaDez);

function multiplicarNumeros(quantidade, cpf, multiplicador) { // o parâmetro multiplicador é para fazer a soma de forma decrescente.

    var numNove = cpf.substring(0, quantidade, soma = 0);  //variável referente aos 9 primeiros dígitos do cpf. Começa pela posição 0 e capta os 9 primeiros dígitos.

    for (i = 0; i < numNove.length; i++) { // laço para multiplicar cada valor.
        var numero = numNove.substring(i, 1);

        soma += numero * multiplicador;
        multiplicador--; // para decrementar o valor.
    }

    return soma;
}

function verificador(soma) { // após multiplicar os primeiros 9 valores, a função fará a divição e o resto será o dígito verificador.
    
    var resto = (soma * 10) % 11;
    return resto.toString();
}
    if ((restoNove + restoDez) === cpf.substring(10, 11)) { // informa se o CPF é válido ou não.
        console.log("CPF Válido!");
    } else {
        console.log("CPF Inválido!");
    }
}*/