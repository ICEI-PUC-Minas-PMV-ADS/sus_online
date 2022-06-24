import { UserController } from "../../../../controllers/UserController.js";
import { AgendamentoController } from "../../../../controllers/AgendamentoController.js";


$(document).ready(() => {
   exibirAgendamentos_Load();
});
 
function exibirAgendamentos_Load() {
   $(".tabela-de-agendamentos div").remove();
   var agendamentoController = new AgendamentoController();
   var userController = new UserController();

   var listAgendamentos = agendamentoController.findByPacienteId(sessionStorage.getItem('user-logged'));
   listAgendamentos.forEach(element => {
       console.log(userController.findById(element.medico_id))
       var agendamento = `<div class="col pb-2 agendamento">`;
       agendamento += `<div class="agendamento-texto">`;
       agendamento += `<div class="name">
       <span>Dr. ${userController.findById(element.medico_id).nome}</span></div>`;
       agendamento += `<div class="date">
       <span class="material-icons">date_range</span>
       <span>${formatarData(element.data)}</span></div> `;
       agendamento += `<div class="hour">
       <span class="material-icons">watch_later</span>
       <span>${element.hora}h</span></div>`;
       agendamento += `<input type="button" class="button" value="INICIAR CONSULTA" onclick="showDiv()"/>`;
       agendamento += `</div>`;
       agendamento += "<div>";
       agendamento += "</div>";
       agendamento += "</div>";
       $("#agendamento").append(agendamento);
   });
}
function formatarData(data) {
   let dataSplit = data.split("-");
   let dia = dataSplit[2];
   let mes = dataSplit[1];
   let ano = dataSplit[0];
   return `${dia}/${mes}/${ano}`;
}

