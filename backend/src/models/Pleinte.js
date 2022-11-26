const mongoose = require("mongoose");

const PleinteSchema = new mongoose.Schema(
  {
    posterId: {
      type: String,
      required: true,
    },
    quartier: {
      type: String,
      maxlength: 500,
    },
    votes: {
      type: [String],
    },
    text: {
      type: String,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pleinte", PleinteSchema);
