// build your server here and require it from index.js
const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
});

module.exports = server;


// const express = require('express')

// const projectRouter = require('./project/router.js')
// const resourceRouter = require('./resource/router.js')
// const taskRouter = require('./task/router.js')

// const server = express()

// server.use(express.json())

// server.use("/api/projects", projectRouter)
// server.use("/api/resources", resourceRouter)
// server.use("/api/tasks", taskRouter)

// //eslint-disable-next-line
// server.use((err, req, res, next) => { 
//     res.status(500).json({ message: "Something went wrong", error: err.message})
// })

// module.exports = server