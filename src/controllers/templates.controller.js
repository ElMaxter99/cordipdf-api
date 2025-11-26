const templatesService = require('../services/templates.service');
const { successResponse } = require('../utils/response');

const getAll = async (req, res) => {
  const templates = await templatesService.getAll();
  return successResponse(res, templates);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const template = await templatesService.getById(id);
  return successResponse(res, template);
};

const create = async (req, res) => {
  const payload = req.body;
  const newTemplate = await templatesService.create(payload);
  return successResponse(res, newTemplate, 201);
};

const update = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const updated = await templatesService.update(id, payload);
  return successResponse(res, updated);
};

const remove = async (req, res) => {
  const { id } = req.params;
  await templatesService.remove(id);
  return successResponse(res, { id });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
