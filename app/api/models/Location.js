const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema(
  {
        name: { type: String, required: true },
        nationality: { type: String, required: true },
		// Tipo mongoose Id y referencia al modelo Character
    drivers: [{ type: mongoose.Types.ObjectId, ref: 'Escuderias' }],
  },
  {
    timestamps: true,
  }
);

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;