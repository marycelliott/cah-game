import React from "react";
import { Container, Button } from "reactstrap";

const HasStarted = ({ hostId, startGame }) => {
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
};

export default HasStarted;
