import { uuidIdentifierGenerator } from "../../../helpers/uuidIdentifierGenerator.js";

var listaAgendamento = [];

/*
    Ocorre antes que o formulário seja exibido pela primeira vez.
*/
$(document).ready(() => {
    $(document).on('click', '.botao-agendar', componentBotaoAgendarConsulta_Click);
    $(document).on('click', '.botao-cancelar', componentBotaoLimparConsulta_Click);
});

/*

*/
function componentBotaoAgendarConsulta_Click() {
    let clinicoGeral = document.getElementById("radio-clinico-geral").checked;
    let psicologo = document.getElementById("radio-psicologo").checked;
    let retorno = document.getElementById("radio-retorno").checked;
    let data =  document.getElementById("data").value;
    let hora = document.getElementById("hora").value;

    if(!data) {
        alert("Selecione a data")
    } else if (!hora) {
        alert("Selecione a hora")
    } else {
        listaAgendamento.push({
            id: uuidIdentifierGenerator.generate(),
            medico: obterMedico(clinicoGeral, psicologo, retorno),
            data: data,
            hora: hora
        });
        exibirAgendamento();
    }  
}

/*
    
*/
function componentBotaoLimparConsulta_Click() {
    $('#data, #hora').val("");
}

function exibirAgendamento() {
    let agendamento = "";
    listaAgendamento.forEach(element => {
        agendamento += `<div class="agendamento">`;
        agendamento += `<div class="agendamento-texto">`;
        agendamento += `${element.medico} `;
        agendamento += `no dia ${formatarData(element.data)} `;
        agendamento += `ás ${element.hora}h`;
        agendamento += `</div>`; 
        agendamento += "<div>";
        agendamento += `<button class="btn btn-primary excluir" onclick="excluirgendamento('${element.id}')">CANCELAR</button>`;
        agendamento += "</div>";
        agendamento += "</div>";
    });
    document.getElementById("agendamento").innerHTML = agendamento;
}

function obterMedico(clinicoGeral, psicologo, retorno) {
    if (clinicoGeral) return " Consulta com Dr. Francisco Silva";
    if (psicologo) return "Consulta com Dra. Ana Fernandes";
    if (retorno) return " Retorno com Dr. Francisco Silva";
}

function formatarData(data) {
    let dataSplit = data.split("-");
    let dia = dataSplit[2];
    let mes = dataSplit[1];
    let ano = dataSplit[0];
    return `${dia}/${mes}/${ano}`;
}

function excluirgendamento(id) {
    listaAgendamento = listaAgendamento.filter(e => e.id != id);
    exibirAgendamento();
}
