const express = require('express');
const templatesRoutes = require('./templates.routes');

const router = express.Router();

router.use('/templates', templatesRoutes);

module.exports = router;
