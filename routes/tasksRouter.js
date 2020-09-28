const express = require('express');
const db = require('../data/config');

const Tasks = require('./tasks-model');

const router = express.Router();

router.post('/', (req, res) => {
    const added = req.body;

    Tasks.add(added)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(error => {
            res.status(500).json({message: 'failed to create new task'});
        })
})

router.get('/', (req, res) => {
    Tasks.find()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            res.status(500).json({message: 'could not find task'});
        })
})

module.exports = router;