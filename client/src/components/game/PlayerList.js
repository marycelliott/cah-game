import React, { useContext } from "react";
import RoomsContext from "./../../context/rooms.context";
import { Navbar, Nav, Container } from "reactstrap";
import Player from "./Player";

const PlayerList = () => {
  const context = useContext(RoomsContext);
  const { room } = context;
  const { currentRound, players } = room;
  return (
    <Navbar className="p-3" style={{ backgroundColor: "black" }} expand="lg">
      <Container>
        <Nav>
          {players
            ? players.map((player, i) => (
                <Player i={i} player={player} currentRound={currentRound} />
              ))
            : null}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default PlayerList;
