// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAllProjects() {
    const projects = await db('projects')
    return projects.map((p) => ({
        ...p,
        project_completed: p.project_completed === 1,
    }));
}

async function createProject(project) {
    const [newProject] = await db('projects').insert(project).returning('*');
    return {
        ...newProject,
        project_completed: newProject.project_completed === 1,
    };
}

module.exports = { getAllProjects, createProject };