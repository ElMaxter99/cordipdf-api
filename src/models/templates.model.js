const { Schema, model } = require('mongoose');

const templateSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    pdfPath: {
      type: String,
      required: true,
    },
    mappingJson: {
      type: Schema.Types.Mixed,
      default: {},
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model('Template', templateSchema);
