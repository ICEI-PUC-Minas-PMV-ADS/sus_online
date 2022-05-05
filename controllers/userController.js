import { uuidIdentifierGenerator } from "../helpers/uuidIdentifierGenerator.js";
import { BaseController } from "./base/baseController.js";

export class userController extends BaseController {

    constructor() {
        super("db_user");
    }

    Save(payload) {
        this.initQuery();
        payload.Id = uuidIdentifierGenerator.generate();
        this.itemCollection.push(payload);
        this.Commit();
    };

    FindById(id) {
        this.initQuery();
        return this.itemCollection.find(element => element.Id == id);
    };

    findByEmailAndPassword(payload) {
        this.initQuery();
        return this.itemCollection.find(element => element.Email == payload.Email
            && element.Password == payload.Password);
    };

    FindAll() {
        this.initQuery();
        return this.itemCollection;
    };

    UpdateById(payload) {
        this.initQuery();
        var positionUser = this.itemCollection.findIndex(user => user.Id == payload.Id)
        // TODO: VERIFICAR SE A POSIÇÃO RETORNADA FOI MAIOR DO QUE 0
        this.itemCollection[positionUser] = payload;
        this.Commit();
    };

    SoftDelete(payload) {
        payload.active = false;
        UpdateById(payload);
    };
}