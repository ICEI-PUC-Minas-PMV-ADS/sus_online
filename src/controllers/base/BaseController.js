export class BaseController {

    constructor(dbname, Collection = []) {
        this._databasename = dbname;
        this.itemCollection = Collection;
    }

    get databasename() {
        return this._databasename;
    }

    set databasename(dbname) {
        this._databasename = dbname;
    }

    initQuery() {
        this.itemCollection = JSON.parse(localStorage.getItem(this._databasename)) ?? [];
        return this.itemCollection;
    }

    commit() {
        localStorage.setItem(this._databasename, JSON.stringify(this.itemCollection));
    }
}
