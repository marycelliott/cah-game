import React, { useContext, useEffect } from "react";
import RoomsContext from "../../../context/rooms.context";
import axios from "axios";
import { Container, Button } from "reactstrap";
import BCard from "./BCard";

const CurrentRound = ({ czar, setCzar, choice, setChoice }) => {
  const context = useContext(RoomsContext);
  const { room, setRoom, grabBlack, dealWhite } = context;

  useEffect(() => {
    if (czar === room.players.length - 1 || room.currentRound.num === 1) {
      setCzar(0);
    } else {
      setCzar(czar + 1);
    }
    setRoom({
      ...room,
      currentCzar: room.players[czar],
    });
    grabBlack(room);
    dealWhite(room);
    axios
      .put("/api/rooms/:id/currentCzar", room.players[czar])
      .then((res) => console.log("current Czar set"));
  }, [room.currentRound]);

  return (
    <Container className="text-white">
      <h1 className="h1 mb-2">Round {room.currentRound} Card Czar</h1>
      <h5 className="h5">{room.currentCzar.name}</h5>
      <BCard />
    </Container>
  );
};

export default CurrentRound;
