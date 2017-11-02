'use strict';

const connect = require('./connection');
let fullResults;

module.exports = {
    /**
     * Get all data from `burgers` tbl
     * return array ordered by id
     */
    selectAll: () => {
        connect.execute('SELECT * FROM burgers ORDER BY id', (error, result) => {
            if (error) { return console.log(error); }
            fullResults = result;
            return result;
        });
    },
    /**
     * INSERTS data from form into `burgers` tbl
     * takes one param for burger name
     */
    insertOne: (bg_name) => {
        connect.execute('INSERT INTO burgers (burger_name) VALUES (?)', [bg_name], (error, result) => {
            if (error) { return console.log(error); }
            console.log('New burger inserted, Name:', bg_name);
        });
    },
    /**
     * Updates `burgers` tbl based on id
     * takes two params
     * burger id and new `devoured` data
     */
    updateOne: (_id, _devoured) => {
        connect.execute('UPDATE burgers SET devoured = ? WHERE id = ?;', [_id, _devoured], (error, result) => {
            if (error) { return console.log(error); }
            console.log('Updated', result.burger_name, 'to', _devoured);
        });
    },
    fullResults
}