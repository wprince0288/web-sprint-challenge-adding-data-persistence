// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll() {
    const projects = await db('projects')
    return projects.map(p => ({
        ...p,
        project_completed: !!p.project_completed
    }))
}

async function create(project) {
    try {

        const [id] = await db('projects').insert(project, 'project_id')
        const newProject = await db('projects').where('project_id', id).first()
        return { ...newProject, project_completed: Boolean(newProject.project_completed) }
    } catch (err) {
        throw new Error('Failed to create project: ' + err.message)
    }
}

module.exports = { getAll, create }