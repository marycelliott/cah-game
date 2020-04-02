const players = require("./../controllers/players");
const rooms = require("./../controllers/rooms");

module.exports = app => {
  // ROOM
  app.get("/api/rooms", rooms.fetchAll);
  app.get("/api/rooms/:id", rooms.fetchOne);
  app.post("/api/rooms", rooms.create);
  app.put("/api/rooms/:id");
  app.put("/api/rooms/:id/started", rooms.startGame);
  app.delete("/api/rooms/:id");

  // PLAYERS
  app.get("/api/players/:id");
  app.post("/api/players", players.create);
  app.put("/api/players/:id");
  app.delete("/api/players/:id");
};
