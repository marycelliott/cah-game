import React, { useContext, useState } from "react";
import RoomsContext from "../../../context/rooms.context";

import { Row } from "reactstrap";
import { useEffect } from "react";
import WCard from "./WCard";

const Hand = () => {
  const context = useContext(RoomsContext);
  const { room } = context;
  const [hand, setHand] = useState([]);
  const [self, setSelf] = useState({});

  useEffect(() => {
    let temp;
    for (player in room.players) {
      if (player._id == localStorage.getItem("playerId")) {
        temp = player;
      }
    }
    setSelf(temp);
    setHand(temp.hand);
  }, []);
  return (
    <Row>
      {hand.map((card, i) => (
        <WCard i={i} card={card} />
      ))}
    </Row>
  );
};

export default Hand;
