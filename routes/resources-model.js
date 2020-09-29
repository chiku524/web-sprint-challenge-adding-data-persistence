const db = require('../data/config');

function find() {
    return db('resources');
}

function add(resources) {
    return db('resources').insert(resources);
}

module.exports = {
    find,
    add
}