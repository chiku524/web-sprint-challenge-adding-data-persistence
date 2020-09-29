const db = require('../data/config');

function add(task) {
    return db('tasks').insert(task);
}

function find(tasks) {
    return db('tasks')
}

module.exports = {
    add,
    find
}