// build your `Task` model here
//test//

const db = require('../../data/dbConfig');

async function getAllTasks() {
    const tasks = await db('tasks as t')
        .join("projects as p", 't.project_id', "p.project_id")
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        );

    return tasks.map((t) => ({
        ...t,
        task_completed: t.task_completed === 1,
    }));
}

async function createTask(task) {
    const [newTask] = await db('tasks').insert(task).returning('*');
    return {
        ...newTask,
        task_completed: newTask.task_completed === 1,
    };
}

module.exports = { getAllTasks, createTask };