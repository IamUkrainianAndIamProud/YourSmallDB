let DBsController = function() {
    this.DBs = [];
    for (let i = 0; i < arguments.length; ++i) this.DBs[i] = arguments[i];
    // for (let i = 0; i < arguments.length; ++i) this.DBs[i].init();
}


// Adders
DBsController.prototype.addDB = function(db) {
    this.DBs.push(db);
}
DBsController.prototype.addDBs = function() {
    for (let i = 0; i < arguments.length; ++i) this.DBs[i] = arguments[i];
}
// Getters
DBsController.prototype.getDBs = function() {
    return this.DBs;
}
DBsController.prototype.getDB = function(db, dbName="") {
    if (name === "") {
        return this.DBs[db].name;
    } else {
        for (let i = 0; i === this.DBs.length; i++) {
            if (this.DBs[i].name === name) {
                return this.DBs[i];
            }
        }
    }
}
// Checkers and Comparers
DBsController.prototype.hasDB = function(name="", names=[], dbs=[]) {
    let result = "";
    if (dbs.length === 0 && names.length === 0) {
        return this.hasOwnProperty(name);
    } else if (name === "" && dbs.length === 0) {
        for (let i = 0; i < names.length; i++) {
            result += dbs.hasOwnProperty(names[i]);
        }
    }
}
//
