var lista = [
    {nome: "Maria da Silva", horario: "07:00h", status: "no horário"},
    {nome: "José de Oliveira", horario: "08:00h", status: "no horário"},
    {nome: "Isaura Nunes ", horario: "09:00h", status: "no horário"},
    {nome: "Augusto Noé ", horario: "10:00h", status: "em atraso"},
    {nome: "Silvia Chagas ", horario: "11:00h", status: "no horário"},
    
];

document.addEventListener("DOMContentLoaded", function(event) { 
    exibirAtendimentos();
});

function exibirAtendimentos() {
    let tbody = document.getElementById("atendimentos");
    let conteudo = "";

    lista.forEach(atendimento => {
        conteudo += `<tr>`;
        conteudo += `<td> `;
        conteudo += `<button type="button" class="btn btn-primary botao-agendar" style="font-size: 13px; background-color: #3a56d4; border-color: #3a56d4;"  onclick="agendar()">CONFIRMAR</button>`;
        conteudo += `<button type="button" class="btn btn-primary botao-agendar" style="font-size: 13px; background-color: #c42c12; border-color: #c42c12; margin-left: 6px;"  onclick="agendar()">CANCELAR</button> `;
        conteudo += `</td>`;
        conteudo += `<td style = "font-family: 'Manrope', sans-serif; font-size: 18px;"><p>${atendimento.nome}</p></td>`;
        conteudo += `<td style = "font-family: 'Manrope', sans-serif; font-size: 18px;"><p>${atendimento.horario}</p></td>`;
        conteudo += `<td style = "font-family: 'Manrope', sans-serif; font-size: 18px;"><p>${atendimento.status}</p></td>`;
        conteudo += `</tr>`;
    });

    tbody.innerHTML = conteudo;
}


