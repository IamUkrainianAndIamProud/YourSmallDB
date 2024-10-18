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
//Removers
DBsController.prototype.removeDB = function(db) {
    delete this.DBs[db];
}
DBsController.prototype.removeDBs = function() {
    for (let i = 0; i < arguments.length; ++i) delete arguments[i];
}

// Getters
DBsController.prototype.getDBs = function() {
    return this.DBs;
}
DBsController.prototype.findDB = function(dbName) {
    for (let i = 0; i < this.DBs.length; i++) {
        if (dbName === this.DBs[i].name) {
            return dbName
        }
    }
}
// Checkers and Comparers
DBsController.prototype.matchNamedDB = function(dbName, dbNames=[]) {
    let result = [];
    if (dbNames.length === 0) {
        return this.findDB(dbName);
    } else {
        for (let i = 0; i < dbNames.length; i++) {
            result.push(this.findDB(dbNames[i]));
        }
        return result;
    }
}
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
DBsController.prototype.compareDBs = function(db1, db2) {
    return db1 === db2;
}
