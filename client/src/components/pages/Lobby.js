import React from "react";
import { Container, Row, Col } from "reactstrap";
import Host from "../lobby/Host";
import Join from "../lobby/Join";

const Lobby = () => {
  return (
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" lg="6">
          <Host />
        </Col>
        <Col className="ml-auto mr-auto" lg="6">
          <Join />
        </Col>
      </Row>
    </Container>
  );
};

export default Lobby;
