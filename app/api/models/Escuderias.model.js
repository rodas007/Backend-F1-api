const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const escuderiasSchema = new Schema(
  {
    id: { type: Number },
    constructorId: { type: String, required: false },
    url: { type: String, required: false },
    name: { type: String, required: false },
    nationality: { type: String, required: false },
    image: { type: String, required: false },
    imageSecondary: {type: String},
    
  },
  {
    timestamps: true,
  }
);

const Escuderias = mongoose.model('Escuderias', escuderiasSchema);
module.exports = Escuderias;