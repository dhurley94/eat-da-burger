const connect = require('./connection');

module.exports = {
    selectAll: () => {
        let fullDb = [];
        connect.execute('SELECT * FROM burgers ORDER BY id', (error, result) => {
            if (error) throw error;
            result.forEach(function(element) {
                fullDb.push(element);
            }, this);
            return fullDb;
        });
    },
    insertOne: (bg_name) => {
        connect.execute('INSERT INTO burgers(burger_name) VALUES (' + bg_name + ');', (error) => {
            if (error) throw error
            console.log('New burger inserted', bg_name);
        });
    },
    updateOne: (_id, _devoured) => {
        connect.execute('UPDATE burgers SET devoured = ' + _devoured + ' WHERE item_id = ' + _id + ';', (error, result) => {
            if (error) throw error
            console.log('Updated', result.burger_name, 'to', _devoured);
        });
    }
}