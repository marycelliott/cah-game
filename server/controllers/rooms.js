const { Player } = require("./../models/player");
const { Deck } = require("./../models/deck");
const Room = require("./../models/room");
const white = require("./../data/whiteCards");
const black = require("./../data/blackCards");

module.exports = {
  fetchAll: (req, res) => {
    Room.find()
      .sort("-createdAt")
      .then(data => res.json(data));
  },
  fetchOne: (req, res) => {
    Room.findById(req.params.id).then(data => res.json(data));
  },
  create: (req, res) => {
    console.log(req.body);
    const { room, name, cap, rounds } = req.body;
    const host = new Player();
    const newRoom = new Room();
    const deck = new Deck();
    deck.whiteCards = deck.shuffle(white);
    deck.blackCards = deck.shuffle(black);
    host.name = name;
    newRoom.name = room;
    newRoom.deck = deck;
    newRoom.host = host._id;
    newRoom.players.push(host);
    newRoom.capacity = cap;
    newRoom.rounds = rounds;
    newRoom
      .save()
      .then(room => {
        res
          .cookie("player", host._id, { httpOnly: true })
          .cookie("room", room._id, { httpOnly: true })
          .json(room);
      })
      .catch(err => res.json(err));
  },
  startGame: (req, res) => {
    Room.findByIdAndUpdate(
      req.params.id,
      { $set: { hasStarted: true } },
      { new: true }
    )
      .then(room => res.json(room))
      .catch(err => res.json(err));
  },
  update: {},
  delete: {}
};
