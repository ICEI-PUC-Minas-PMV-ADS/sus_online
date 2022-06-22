import { uuidIdentifierGenerator } from "/src/helpers/uuidIdentifierGenerator.js";
import { UserController } from "/src/controllers/UserController.js";
import { AgendamentoController } from "/src/controllers/AgendamentoController.js"

function showDiv() {
    document.getElementById('videoFrame').style.display = "block";
    document.getElementById('videoFrame1').style.display = "none";

 }

 function hideDiv() {
    document.getElementById('videoFrame').style.display = "none";
    document.getElementById('videoFrame1').style.display = "block";

 }

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
       agendamento += `<input type="button" class="button" value="INICIAR CONSULTA" onclick="showDiv()"/>`;
       agendamento += "</div>";
       agendamento += "</div>";
       $("#agendamento").append(agendamento);
   });
}