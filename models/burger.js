const orm = require('../config/orm');

let Burger = {

    returnBurgers: () => {
        orm.selectAll();
    },

    addBurger: (bgName) => {
        orm.insertOne(bgName);
    },

    updateDevoured: (id, status) => {
        orm.updateOne(id, status);
    }
}

module.exports = Burger;