const mongoose = require("mongoose");
const { Player } = require("./../models/player");
const Room = require("./../models/room");

module.exports = {
  create: (req, res) => {
    console.log("in player creation");
    let player = new Player();
    let roomId = req.body.id;
    player.name = req.body.name;
    player
      .save()
      .then(newPlayer => {
        player = newPlayer;
        Room.findById(roomId)
          .then(room => {
            console.log("Found the room ", room.name);
            room.players.push(player);
            room
              .save()
              .then(room => {
                console.log(room);
                res.json({
                  room: room,
                  playerId: player._id,
                  roomId: room._id
                });
              })
              .catch(err => {
                console.log(err);
                res.json(err);
              });
          })
          .catch(err => {
            console.log(err);
            res.json(err);
          });
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  }
};
