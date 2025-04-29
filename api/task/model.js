// build your `Task` model here
//test//

const db = require('../../data/dbConfig');

async function getAll() {
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

    return tasks.map(t => ({
        ...t,
        task_completed: Boolean(t.task_completed)
    }));
}

async function create(task) {
    const [id] = await db('tasks').insert(task);
    const newTask = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select(
            't.task_id',
            't.task_description',
            't.task_notes',
            't.task_completed',
            'p.project_name',
            'p.project_description'
        ).where('task_id', id)
        .first();

    return { ...newTask, task_completed: Boolean(newTask.task_completed) };
}

module.exports = { getAll, create };