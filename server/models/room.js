const mongoose = require("mongoose");
const { PlayerSchema } = require("./player");
const { DeckSchema } = require("./deck");

const RoomSchema = new mongoose.Schema(
  {
    name: { type: String },
    host: { type: mongoose.Schema.Types.ObjectId },
    capacity: { type: Number, max: 10, min: 3, default: 5 },
    players: [PlayerSchema],
    deck: DeckSchema,
    currentRound: {
      num: { type: Number, default: 1 },
      blackCard: { type: String },
      choices: { type: Array },
    },
    currentCzar: PlayerSchema,
    rounds: { type: Number, default: 5 },
    hasStarted: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const Room = mongoose.model("Room", RoomSchema);
module.exports = Room;
