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
    axios.get("/api/rooms").then((res) => {
      setRooms(res.data);
    });
  };

  const grabBlack = (room) => {
    let card = room.deck.blackCards[room.deck.blackCards.length - 1];
    setRoom({
      ...room,
      deck: {
        ...room.deck,
        blackCards: room.deck.blacCards.slice(
          room.deck.blacCards.length - 1,
          room.deck.blacCards.length
        ),
      },
    });
    return card;
  };
  const dealWhite = (room) => {
    let count = 0;
    let whiteCards = room.deck.whiteCards.slice();
    let players = room.players.slice();
    for (let player in players) {
      while (player.hand.length < 10) {
        player.hand.push(whiteCards.pop());
        count++;
      }
    }
    whiteCards.length -= count;
    setRoom({
      ...room,
      players: players,
      deck: {
        ...room.deck,
        whiteCards: whiteCards,
      },
    });
  };

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        setRooms,
        fetchRooms,
        room,
        setRoom,
        grabBlack,
        dealWhite,
      }}
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
