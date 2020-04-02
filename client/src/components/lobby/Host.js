import React, { useState, useContext } from "react";
import { Card, Button, Form, Input } from "reactstrap";
import { navigate } from "@reach/router";
import axios from "axios";
import RoomsContext from "./../../context/rooms.context";

const Host = () => {
  const context = useContext(RoomsContext);
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [cap, setCap] = useState();
  const [rounds, setRounds] = useState();

  const createRoom = () => {
    axios
      .post("/api/rooms", { room, name, cap, rounds })
      .then(res => {
        console.log(res);
        context.fetchRooms();
        navigate("/room/" + res.data._id);
      })
      .catch(res => console.log(res));
  };

  return (
    <Card className="card-custom ml-auto mr-auto" color="info">
      <h2 className="h2 title mx-auto text-white">Host a New Game</h2>
      <Form className="register-form">
        <label>Your Name</label>
        <Input type="text" onChange={e => setName(e.target.value)} />
        <label>Room Name</label>
        <Input type="text" onChange={e => setRoom(e.target.value)} />
        <label>
          Room Capacity <small>(incl. host)</small>
        </label>
        <Input
          type="number"
          placeholder="3-10 players"
          onChange={e => setCap(e.target.value)}
          min="3"
          max="10"
        />
        <label>No. of Rounds</label>
        <Input
          type="number"
          placeholder="1-5 rounds"
          onChange={e => setRounds(e.target.value)}
        />
        <Button
          onClick={createRoom}
          block
          className="btn-block btn-round mb-4"
          color="primary"
        >
          Create
        </Button>
      </Form>
    </Card>
  );
};

export default Host;
