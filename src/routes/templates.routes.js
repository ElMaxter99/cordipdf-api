const express = require('express');
const templatesController = require('../controllers/templates.controller');
const catchAsync = require('../utils/catchAsync');

const router = express.Router();

router.get('/', catchAsync(templatesController.getAll));
router.get('/:id', catchAsync(templatesController.getById));
router.post('/', catchAsync(templatesController.create));
router.put('/:id', catchAsync(templatesController.update));
router.delete('/:id', catchAsync(templatesController.remove));

module.exports = router;
