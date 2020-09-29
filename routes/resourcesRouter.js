const express = require('express');
const db = require('../data/config');

const Resources = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(error => {
            res.status(404).json({message: "could not find any resources"});
        })
})

router.post("/", (req, res) => {
    const added = req.body;

    Resources.add(added) 
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(error => {
            res.status(500).json({message: 'failed to create new resource'});
        })
})

module.exports = router;