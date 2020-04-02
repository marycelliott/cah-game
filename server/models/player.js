const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: { type: String },
    points: { type: Number, default: 0 },
    hand: { type: Array }
  },
  { timestamps: true }
);
const Player = mongoose.model("Player", PlayerSchema);

module.exports = {
  Player,
  PlayerSchema
};
