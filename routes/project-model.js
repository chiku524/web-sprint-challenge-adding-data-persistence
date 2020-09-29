const db = require('../data/config');

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects').where({id}).first();
}

function add(project) {
    return db('projects').insert(project);
}

function update(changes, id) {
    return db('projects').where({id}).update(changes);
}

function remove(id) {
    return db('projects').where({id}).del();
}

function findProjectTasks(id) {
    return db('projects')
        .join('tasks', 'project.id', 'tasks.project_id')
        .select('project.id', 'project.name as ProjectName', 'project.description as ProjectDescription', 'task.description', 'task.notes', 'task.completed')
        .where({project_id: id});
}

function addTask(data, id) {
    return db('tasks').insert(data).where("id", id);
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findProjectTasks,
    addTask
}