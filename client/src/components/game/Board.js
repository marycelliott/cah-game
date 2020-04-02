import React from "react";
import RoomsContext from "./../../context/rooms.context";
import { useContext } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Button } from "reactstrap";
import Loading from "./../layout/Loading";

const Board = props => {
  // VARIABLES
  const playerId = cookie.load("player");
  const context = useContext(RoomsContext);
  const { room, setRoom, fetchRooms } = context;

  // FUNCTIONS
  const startGame = () => {
    axios.put("/api/rooms/:id/started").then(res => {
      console.log(res);
      setRoom(res.data);
      fetchRooms();
    });
  };

  if (!room.hasStarted) {
    console.log(cookie.load("player"));
    return (
      <div className="container text-center text-white">
        <h1 className="h1">Waiting for Players</h1>
        <>
          {room.host == cookie.load("player") ? (
            <Button onClick={startGame} className="btn btn-primary">
              Start Game
            </Button>
          ) : null}
        </>
      </div>
    );
  } else {
    return (
      <div className="container text-center text-white">
        {!room.currentCzar ? (
          <Loading />
        ) : (
          <>
            <h1 className="h1">Card Czar</h1>
            <h6 className="h6">{}</h6>
          </>
        )}
      </div>
    );
  }
};

export default Board;
