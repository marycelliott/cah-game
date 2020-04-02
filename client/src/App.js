import React, { useState } from "react";
import Lobby from "./components/pages/Lobby";
import { Router } from "@reach/router";
import Game from "./components/pages/Game";
import RoomsContext from "./context/rooms.context";
import axios from "axios";
import Header from "./components/layout/Header";
import "./App.css";

function App() {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState({});

  const fetchRooms = () => {
    axios.get("/api/rooms").then(res => {
      setRooms(res.data);
    });
  };

  return (
    <RoomsContext.Provider
      value={{ rooms, setRooms, fetchRooms, room, setRoom }}
    >
      <Header />
      <div className="mt-4">
        <Router>
          <Lobby path="/" />
          <Game path="/room/:name" />
        </Router>
      </div>
    </RoomsContext.Provider>
  );
}

export default App;
