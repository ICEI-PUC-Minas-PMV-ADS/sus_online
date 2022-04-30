var USERS = []

export default class userController {
    static Save(payload) {
        payload["Id"] = 1;
        // TODO: CRIAR FUNÇÃO PARA GERAR ID'S DE MANEIRA AUTOMATICA
        USERS.push(payload);
    };

    static FindById(id) {
        return USERS.find(element => element.Id == id);
    };

    static findByEmailAndPassword(payload) {
        return USERS.find(element => element.Email == payload.Email
            && element.Password == payload.Password);
    };

    static FindAll() {
        return USERS;
    };

    static UpdateById(payload) {
        var positionUser = USERS.findIndex(user => user.Id == payload.Id)
        // TODO: VERIFICAR SE A POSIÇÃO RETORNADA FOI MAIOR DO QUE 0
        USERS[positionUser] = payload;
    };

    static SoftDelete(payload) {
        payload["active"] = false;
        UpdateById(payload);
    };
}