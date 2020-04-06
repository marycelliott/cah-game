import React from "react";
import { Container, Card } from "reactstrap";

const Chat = () => {
  return (
    <Card
      className="card ml-auto mr-auto"
      data-color="purple"
      style={{ minHeight: "100%" }}
    >
      <h2 className="h2 title mx-auto text-white">Room Chat</h2>
    </Card>
  );
};

export default Chat;
