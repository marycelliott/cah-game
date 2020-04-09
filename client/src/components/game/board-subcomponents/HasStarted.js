import React, { useContext } from "react";
import { Container, Button } from "reactstrap";
import RoomsContext from "../../../context/rooms.context";

const HasStarted = ({ hostId, startGame }) => {
  const context = useContext(RoomsContext);
  const { room, setRoom, grabBlack, dealWhite } = context;
  return (
    <Container className="text-white">
      <h1 className="h1">Waiting for All Players...</h1>
      <>
        {room.host === localStorage.getItem("playerId") ? (
          <Button onClick={startGame} className="btn btn-primary">
            Start Game
          </Button>
        ) : null}
      </>
    </Container>
  );
};

export default HasStarted;
