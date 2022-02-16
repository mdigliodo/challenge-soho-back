const express = require('express');

const  { getProjects } = require('../controllers/project');

const router = express.Router();

router.get('/projects', getProjects);

module.exports = {
    routes: router
}