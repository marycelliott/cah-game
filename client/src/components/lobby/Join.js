import React, { useContext, useEffect } from "react";
import { Card, Button, Form, Input } from "reactstrap";
import RoomsContext from "./../../context/rooms.context";
import { navigate } from "@reach/router";
import Axios from "axios";
import { useState } from "react";

const Join = () => {
  const context = useContext(RoomsContext);
  const { fetchRooms, rooms } = context;
  const [name, setName] = useState("");
  console.log(rooms);

  useEffect(() => {
    fetchRooms();
  }, []);

  const joinGame = id => {
    Axios.post("/api/players", { name, id }).then(res => {
      localStorage.setItem("playerId", res.data.playerId);
      localStorage.setItem("roomId", res.data.roomId);
      navigate("/room/" + id);
    });
  };

  return (
    <Card className="card-custom ml-auto mr-auto" data-color="purple">
      <h2 className="h2 title mx-auto text-center">Join a Game</h2>
      <Form className="register-form">
        <label>Your Name</label>
        <Input type="text" onChange={e => setName(e.target.value)} />
        <div
          class="list-group"
          style={{ overflow: "auto", maxHeight: "320px" }}
        >
          {rooms.map(room => (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => joinGame(room._id)}
              className={
                room.players.length === room.capacity
                  ? "h6 list-group-item list-group-item-action disabled"
                  : "h6 list-group-item list-group-item-action"
              }
            >
              {room.name} <i className="fas fa-user ml-3"></i>{" "}
              {room.players.length}/{room.capacity}
            </li>
          ))}
        </div>
        <Button className="btn-block btn-round mb-4" color="default">
          Select
        </Button>
      </Form>
    </Card>
  );
};

export default Join;
