// build your server here and require it from index.js
const express = require('express');

const tasksRouter = require('./api/task/router');
const resourcesRouter = require('./api/resource/router');
const projectsRouter = require('./api/project/router');

const server = express();

server.use(express.json());

server.use('/api/task', tasksRouter);
server.use('/api/resource', resourcesRouter);
server.use('/api/project', projectsRouter);

server.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
});

server.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

server.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal server error',
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

module.exports = server;