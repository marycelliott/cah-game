const mongoose = require("mongoose");

const DeckSchema = mongoose.Schema(
  {
    whiteCards: { type: Array },
    blackCards: { type: Array },
    discards: { type: Array }
  },
  { timestamps: true }
);

DeckSchema.methods.shuffle = cards => {
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

const Deck = mongoose.model("Deck", DeckSchema);
module.exports = {
  Deck,
  DeckSchema
};
