let DB = function(name) {
    this.name = name;
    this.keyPoints = [];
    this.items = {};
}
// ! INIT and LAST are the functions to override:
DB.prototype._init_ = function() {}
DB.prototype._last_ = function() {}

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
DB.prototype.removeKeyPoint = function(keyPoint) {
    delete this[keyPoint];
    delete this.keyPoints[keyPoint];
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
    return this.items === {} && this.keyPoints.length > 0;
}
DB.prototype.copy = function(name=this.name) {
    let that = this;
    that.name = name;
    return that;
}
// !Dangerous functions
DB.prototype.clearRoot = function(clearAll) {
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
DB.prototype.clear = function(name) {
    for (let i = 0; i < this.keyPoints; i++) {
        this.removeKeyPoint(this.keyPoints[name]);
    }
}

DB.prototype.selfDestruct = function() {
    this._last_();
    delete this;
    return {};
}
