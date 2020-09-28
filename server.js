const express = require('express');

const projectRouter = require('./routes/projectRouter');
const resourcesRouter = require("./routes/resourcesRouter");
const tasksRouter = require("./routes/tasksRouter");

const server = express();

server.use(express.json());

server.use("/projects", projectRouter);
server.use("/resources", resourcesRouter);
server.use("/tasks", tasksRouter);

module.exports = server;