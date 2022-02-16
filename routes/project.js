const express = require('express');

const controller = require('../controllers/project')

module.exports = (() => {
    const router = new express.Router();

    router.get('/projects', controller.getProjects)

    return router;
})();