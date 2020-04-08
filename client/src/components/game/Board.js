import React, { useContext, useState } from "react";
import RoomsContext from "./../../context/rooms.context";
import axios from "axios";
import Loading from "./../layout/Loading";
import CurrentRound from "./board-subcomponents/CurrentRound";
import HasStarted from "./board-subcomponents/HasStarted";

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
        currentRound: {
          ...room.currentRound,
          num: 1,
        },
      });
      fetchRooms();
    });
  };

  if (!room.hasStarted) {
    <HasStarted hostId={room.host} startGame={startGame} />;
  } else if (room.currentCzar) {
    <CurrentRound
      czar={czar}
      setCzar={setCzar}
      choise={choice}
      setChoice={setChoice}
    />;
  } else {
    <Loading />;
  }
};

export default Board;
