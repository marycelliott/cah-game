import React, { useContext, useState } from "react";
import RoomsContext from "./../../context/rooms.context";
import axios from "axios";
import { Container, Button } from "reactstrap";
import Loading from "./../layout/Loading";
import { useEffect } from "react";
import CurrentRound from "./board-subcomponents/CurrentRound";

const Board = (props) => {
  // VARIABLES
  const context = useContext(RoomsContext);
  const { room, setRoom, fetchRooms } = context;
  const [choice, setChoice] = useState();
  const [czar, setCzar] = useState(0);

  // FUNCTIONS
  const startGame = () => {
    axios.put("/api/rooms/:id/started").then((res) => {
      console.log(res);
      setRoom({
        ...room,
        hasStarted: true,
        currentCzar: room.players[0],
      });
      fetchRooms();
    });
  };

  if (!room.hasStarted) {
    return (
      <Container className="text-white">
        <h1 className="h1">Waiting for All Players...</h1>
        <>
          {room.host == localStorage.getItem("playerId") ? (
            <Button onClick={startGame} className="btn btn-primary">
              Start Game
            </Button>
          ) : null}
        </>
      </Container>
    );
  } else {
    return (
      <Container className="text-white">
        {!room.currentCzar ? <Loading /> : <CurrentRound czar={czar} />}
      </Container>
    );
  }
};

export default Board;
