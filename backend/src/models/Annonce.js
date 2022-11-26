const mongoose = require("mongoose");

const AnnonceSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Annonce", AnnonceSchema);
