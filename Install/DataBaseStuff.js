// DB class:
let DB = function(name) {
    this.name = name;
    this.keyPoints = [];
    this.items = {};
}
// ! INIT and LAST are the functions to override:
DB.prototype.init = function() {}
DB.prototype.last = function() {}

// Name Users
DB.prototype.setName = function (name) {
    return this.name = name;
}
DB.prototype.getName = function () {
    return this.name;
}
DB.prototype.isName = function (name) {
    return this.name === name;
}

// Adders
DB.prototype.addItemToRoot = function(key, value) {
    this[key] = value;
    this.items[key] = value;
}
DB.prototype.addKeyPoint = function(keyPointName) {
    this[keyPointName] = {};
    this.keyPoints.push(this[keyPointName]);

}
DB.prototype.addItem = function(keyPoint, key, value) {
    this[keyPoint][key] = value;
    this.items[key] = value;
}

// Getters
DB.prototype.getItemFromRoot = function(key) {
    return this[key];
}
DB.prototype.getKeyPoint = function(keyPointName) {
    return this[keyPointName];
}
DB.prototype.getItem = function(keyPoint, key) {
    return this[keyPoint][key];
}
// Removers
DB.prototype.removeItemFromRoot = function(key) {
    delete this[key];
    delete this.items[key];
}
DB.prototype.removeKeyPoint = function(keyPointName) {
    delete this[keyPointName];
    delete this.keyPoints[keyPointName];
}
DB.prototype.removeItem = function(keyPoint, key) {
    delete this[keyPoint][key];
    delete this.items[key];
}
// Checkers
DB.prototype.hasItemInRoot = function(key) {
    return this[key] != null;
}
DB.prototype.isKeyPointEmpty = function(keyPoint) {
    return this[keyPoint] !== {};
}
DB.prototype.hasItem = function(keyPoint, key) {
    return this[key] != null;
}
// Special Functions
DB.prototype.isEmpty = function() {
    return this.items === {} && this.keyPoints.length < 0;
}
DB.prototype.copy = function(name=this.name) {
    let that = this;
    that.name = name;
    return that;
}
// !Dangerous functions
DB.prototype.clearRoot = function(clearAll=false) {
    let theName = this.name;

    for (let i = 0; i < this.items; ++i) {
        this.removeItemFromRoot(this.items[i]);
    }
    if (clearAll) {
        for (let i = 0; i < this.keyPoints; i++) {
            this.removeKeyPoint(this.keyPoints[i]);
        }
        this.name = theName;
        return this;
    } else {
        this.name = theName;
        return this;
    }
}
DB.prototype.clear = function(keyPointName) {
    for (let i = 0; i < this.keyPoints; i++) {
        this.removeKeyPoint(keyPointName);
    }
    return this;
}

DB.prototype.selfDestruct = function() {
    this.last();
    delete this;
    return {};
}

// DBsController class:
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
            return this.DBs[i].name;
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
