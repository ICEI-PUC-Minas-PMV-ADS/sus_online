/*
    Ocorre antes que o formulário seja exibido pela primeira vez.
*/
$(document).ready(() => {
    $(document).on('keypress', '.max-char', verificaTotalMaximoCaracteteres_Event);
    $(document).on('input', '.only-Letter', verificaCampoIsLetter_Event);
});

/*
    Impede que novos caracteres sejam adicionados ao input caso o tamanho do campo 
    seja maior que o valor pré-estabelecido no atributo max-char-size. 
*/
function verificaTotalMaximoCaracteteres_Event(event) {
    if ($(this).val().length > $(this).attr("max-char-size")) {
        event.preventDefault();
    }
}

/*

*/
function verificaCampoIsLetter_Event() {
    var regexp = /[^a-zA-Z]/g;
    if ($(this).val().match(regexp)) {
        $(this).val($(this).val().replace(regexp, ''));
    }
}