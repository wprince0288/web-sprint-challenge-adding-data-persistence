// build your `/api/projects` router here
const express = require('express')
const Projects = require('/model')

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const projects = await Projects.getAll()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const { project_name } = req.body
        if (!project_name) {
            return res.status(400).json({ message: "Project name is required" })
        }
        const newProject = await Projects.create(req.body)
        res.status(201).json(newProject)
    } catch (err) {
        next(err)
    }
})

module.exports = router