const mongoose = require("mongoose");
const shortId = require("shortid");
const UrlshortSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
      default: shortId.generate(),
    },
    click: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Url", UrlshortSchema);
