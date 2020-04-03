import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Board from "../game/Board";
import Chat from "../game/Chat";
import RoomsContext from "./../../context/rooms.context";
import axios from "axios";

const Game = props => {
  const context = useContext(RoomsContext);
  const { setRoom } = context;

  useEffect(() => {
    axios.get("/api/rooms/" + props.name).then(res => {
      console.log(res);
      setRoom(res.data.room);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col lg="8">
          <Board />
        </Col>
        <Col lg="4">
          <Chat />
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
