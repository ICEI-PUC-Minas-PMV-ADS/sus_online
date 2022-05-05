import { BaseController } from "./Base/BaseController";

var APPOINTMENTS = []

export default class userController extends BaseController {
    static Save(payload) {
        payload["Id"] = 1;
        // TODO: CRIAR FUNÇÃO PARA GERAR ID'S DE MANEIRA AUTOMATICA
        APPOINTMENTS.push(payload);
    };

    static FindById(id) {
        return APPOINTMENTS.find(element => element.Id == id);
    };

    static FindAll() {
        return APPOINTMENTS;
    };

    static UpdateById(payload) {
        var positionUser = APPOINTMENTS.findIndex(appoinment => appoinment.Id == payload.Id)
        // TODO: VERIFICAR SE A POSIÇÃO RETORNADA FOI MAIOR DO QUE 0
        APPOINTMENTS[positionUser] = payload;
    };

    static SoftDelete(payload) {
        payload["active"] = false;
        UpdateById(payload);
    };
}