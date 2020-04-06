import React, { useContext, useState, useEffect } from "react";
import RoomsContext from "../../../context/rooms.context";
import axios from "axios";
import { Container, Button } from "reactstrap";

const CurrentRound = ({ czar }) => {
  const context = useContext(RoomsContext);
  const { room, setRoom } = context;

  useEffect(() => {
    if (czar == room.players.length - 1) {
      setRoom({
        ...room,
        currentCzar: room.players[0],
      });
      axios
        .put("/api/rooms/:id/currentCzar")
        .then((res) => console.log("current Czar set"));
    } else {
      setRoom({
        ...room,
        currentCzar: room.players[czar + 1],
      });
      axios
        .put("/api/rooms/:id/currentCzar", room.players[czar])
        .then((res) => console.log("current Czar set"));
    }
  }, [room.currentRound]);

  return (
    <Container className="text-white">
      <h1 className="h1 mb-2">Round {room.currentRound} Card Czar</h1>
      <h5 className="h5">{room.currentCzar.name}</h5>
    </Container>
  );
};

export default CurrentRound;
