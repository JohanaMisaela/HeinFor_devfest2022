const mongoose = require("mongoose");

const ActualiteSchema = new mongoose.Schema(
  {
    idUser: {
      type: String,
      required: true,
    },
    titre: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Actualite = mongoose.model("Actualite", ActualiteSchema);
