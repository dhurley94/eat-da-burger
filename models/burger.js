const orm = require('../config/orm');

module.exports = {
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