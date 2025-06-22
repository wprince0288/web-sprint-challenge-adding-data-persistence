// build your `Resource` model here
const db = require('../../data/dbConfig');

async function getAllResources() {
    return db('resources');
}

function createResource(resource) {
    return db('resources').insert(resource).returning('*');
}

module.exports = { getAllResources, createResource };