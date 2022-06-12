import { BaseController } from "./base/BaseController.js";
import { uuidIdentifierGenerator } from "../helpers/uuidIdentifierGenerator.js";

export class AgendamentoController extends BaseController {
    constructor() {
        super("_agendamento");
    }

    save(payload) {
        this.initQuery();
        payload.id = uuidIdentifierGenerator.generate();
        this.itemCollection.push(payload);
        this.commit();
    };

    findById(id) {
        this.initQuery();
        return this.itemCollection.find(element => element.id == id);
    };

    findByPacienteId(pacienteId) {
        var listAgendamentos = this.findAll();
        return listAgendamentos.filter(element => element.paciente_id == pacienteId);
    };

    findAll() {
        this.initQuery();
        return this.itemCollection;
    };

    updateById(payload) {
        this.initQuery();
        var positionUser = this.itemCollection.findIndex(user => user.id == payload.id)
        // TODO: VERIFICAR SE A POSIÇÃO RETORNADA FOI MAIOR DO QUE 0
        this.itemCollection[positionUser] = payload;
        this.commit();
    };

    softDelete(id) {
        this.initQuery();
        var positionAgendamento = this.itemCollection.findIndex(element => element.id == id);

        if (positionAgendamento > -1) {
            this.itemCollection.splice(positionAgendamento, 1);
        }
        this.commit();    
    };
}