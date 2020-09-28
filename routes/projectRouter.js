const express = require('express');
const db = require('../data/config');
const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({message: "failed to get projects"});
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;

    Projects.findById(id)
        .then(project => {
            if(project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({message: "could not find project with given ID"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "failed to get project"})
        })
})

router.get('/id/tasks', (req, res) => {
    const {id} = req.params;

    Projects.findProjectTasks(id)
        .then(tasks => {
            if(tasks.length) {
                res.status(200).json(tasks);
            } else {
                res.status(404).json({message: "could not find tasks for given project"});
            }
        })
        .catch(error => {
            res.status(500).json({message: "failed to get tasks"});
        })
})

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.add(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            res.status(500).json({message: "failed to create new project"});
        })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Projects.findById(id)
        .then(project => {
            if(project) {
                Projects.update(changes, id)
                .then(updatedProject => {
                    res.status(200).json(updatedProject);
                })
                .catch(error => {
                    res.status(500).json({message: "please provide valid data"});
                });
            } else {
                res.status(404).json({message: "could not find project with given ID"});
            }
        })
        .catch(error => {
            res.status(500).json({message: 'failed to update project'});
        })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Projects.remove(id)
        .then(deleted => {
            if(deleted) {
                res.status(200).json({removed: deleted});
            } else {
                res.status(404).json({message: "could not find project with given ID to delete"})
            }
        })
        .catch(error => {
            res.status(500).json({message: "failed to delete project"});
        })
})

module.exports = router;