import { AgendamentoController } from "../../../controllers/AgendamentoController.js";
import { UserController } from "../../../controllers/UserController.js";


document.addEventListener("DOMContentLoaded", function(event) { 
    exibirAtendimentos();
});

function exibirAtendimentos() {
    let tbody = document.getElementById("atendimentos");
    let conteudo = "";

    var agendamentoController = new AgendamentoController();
    var userController = new UserController();
    var lista = agendamentoController.findAll();

    console.log(lista);

    
    lista.forEach(atendimento => {
        conteudo += `<tr>`;
        conteudo += `<td> `;
        conteudo += `<button type="button" class="btn btn-primary botao-agendar" style="font-size: 13px; background-color: #3a56d4; border-color: #3a56d4;"  onclick="agendar()">CONFIRMAR</button>`;
        conteudo += `<button type="button" class="btn btn-primary botao-agendar" style="font-size: 13px; background-color: #c42c12; border-color: #c42c12; margin-left: 6px;"  onclick="agendar()">CANCELAR</button> `;
        conteudo += `</td>`;
        conteudo += `<td style = "font-family: 'Manrope', sans-serif; font-size: 18px;"><p>${userController.findById(atendimento.paciente_id).nome}</p></td>`;
        conteudo += `<td style = "font-family: 'Manrope', sans-serif; font-size: 18px;"><p>${atendimento.hora}</p></td>`;
        conteudo += `<td style = "font-family: 'Manrope', sans-serif; font-size: 18px;"><p>${atendimento.status}</p></td>`;
        conteudo += `</tr>`;
    });

   tbody.innerHTML = conteudo;
}


