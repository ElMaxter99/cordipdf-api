const mongoose = require('mongoose');
const Template = require('../models/templates.model');

const ensureObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('Identificador no válido');
    error.statusCode = 400;
    throw error;
  }
};

const getAll = async () => {
  return Template.find().lean();
};

const getById = async (id) => {
  ensureObjectId(id);
  const template = await Template.findById(id).lean();
  if (!template) {
    const error = new Error('Plantilla no encontrada');
    error.statusCode = 404;
    throw error;
  }
  return template;
};

const create = async (data) => {
  return Template.create(data);
};

const update = async (id, data) => {
  ensureObjectId(id);
  const result = await Template.updateOne({ _id: id }, data);
  if (result.matchedCount === 0) {
    const error = new Error('Plantilla no encontrada');
    error.statusCode = 404;
    throw error;
  }
  return Template.findById(id).lean();
};

const remove = async (id) => {
  ensureObjectId(id);
  const result = await Template.deleteOne({ _id: id });
  if (result.deletedCount === 0) {
    const error = new Error('Plantilla no encontrada');
    error.statusCode = 404;
    throw error;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
