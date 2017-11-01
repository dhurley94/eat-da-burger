const orm = require('../config/orm');

class Burger {
    constructor(_burgerName) {
        this._burgerName = _burgerName;
    }

    returnBurgers() {
        orm.selectAll();
    }

    addBurger(bgName) {
        orm.insertOne(this.bgName);
    }

    updateDevoured(id, status) {
        orm.updateOne(this.id, this.status);
    }
}

module.exports = Burger;