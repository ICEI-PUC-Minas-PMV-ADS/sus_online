import { uuidIdentifierGenerator } from "../helpers/uuidIdentifierGenerator.js";
import { BaseController } from "./base/BaseController.js";

export class UserController extends BaseController {

    constructor() {
        super("_user");
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

    findByEmailAndPassword(payload) {
        this.initQuery();
        return this.itemCollection.find(element =>
            element.email == payload.email
            && element.password == payload.password
        );
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

    softDelete(payload) {
        payload.active = false;
        updateById(payload);
    };
}