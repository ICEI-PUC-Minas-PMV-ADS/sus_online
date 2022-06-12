import { uuidIdentifierGenerator } from "../../../helpers/uuidIdentifierGenerator.js";
import { UserController } from "../../../controllers/UserController.js";
import { AgendamentoController } from "../../../controllers/AgendamentoController.js"

/*
    Ocorre antes que o formulário seja exibido pela primeira vez.
*/
$(document).ready(() => {
    medicosCadastrados_Load();
    exibirAgendamentos_Load();
    $(document).on('click', '.botao-agendar', componentBotaoAgendarConsulta_Click);
    $(document).on('click', '.botao-limpar', componentBotaoLimparConsulta_Click);
    $(document).on('click', '.botao-excluir', excluirgendamento);
});

/*

*/
function componentBotaoAgendarConsulta_Click() {
    var agendamentoController = new AgendamentoController();
    let data = $("#data").val();
    let hora = $("#hora").val();
    var medicoId = $('select[id=list-medico] option').filter(':selected').val()

    if (!data || !hora || !medicoId) {
        alert("Selecione os campos corretamente");
        return;
    }

    agendamentoController.save({
        id: uuidIdentifierGenerator.generate(),
        medico_id: medicoId,
        paciente_id: sessionStorage.getItem('user-logged'),
        data: data,
        hora: hora,
        status: "agendado"
    });
    exibirAgendamentos_Load();
}

/*
    
*/
function componentBotaoLimparConsulta_Click() {
    $('#data, #hora, #list-medico').val("");
}

/*

*/
function exibirAgendamentos_Load() {
    $(".tabela-de-agendamentos div").remove();
    var agendamentoController = new AgendamentoController();
    var userController = new UserController();

    var listAgendamentos = agendamentoController.findByPacienteId(sessionStorage.getItem('user-logged'));
    listAgendamentos.forEach(element => {
        console.log(userController.findById(element.medico_id))
        var agendamento = `<div class="agendamento">`;
        agendamento += `<div class="agendamento-texto">`;
        agendamento += `Dr. ${userController.findById(element.medico_id).nome} `;
        agendamento += `no dia ${formatarData(element.data)} `;
        agendamento += `ás ${element.hora}h`;
        agendamento += `</div>`;
        agendamento += "<div>";
        agendamento += `<button class="btn btn-primary botao-excluir" element-id='${element.id}'">CANCELAR</button>`;
        agendamento += "</div>";
        agendamento += "</div>";
        $("#agendamento").append(agendamento);
    });
}

/*

*/
function formatarData(data) {
    let dataSplit = data.split("-");
    let dia = dataSplit[2];
    let mes = dataSplit[1];
    let ano = dataSplit[0];
    return `${dia}/${mes}/${ano}`;
}

/*

*/
function excluirgendamento() {
    var agendamentoController = new AgendamentoController();

    var agendamentoId = $(this).attr("element-id");
    agendamentoController.softDelete(agendamentoId);
    $('.botao-excluir').parent().parent().remove();
    exibirAgendamentos_Load();
}

/*
    
*/
function medicosCadastrados_Load() {
    var controllerUser = new UserController();
    var listMedicos = controllerUser.findByRole("medico");

    listMedicos.forEach(element => {
        $("#list-medico").append(`<option value='${element.id}'>${element.nome}</option>`);
    });
}