import React, { useContext, useState } from "react";
import RoomsContext from "./../../context/rooms.context";
import { Popover, NavItem, PopoverBody } from "reactstrap";

const Player = props => {
  const { player, currentRound, i } = props;
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <>
      <NavItem
        onMouseEnter={() => setPopoverOpen(true)}
        onMouseLeave={() => setPopoverOpen(false)}
        id={"Player" + i}
        className="mx-3"
        style={{}}
      >
        <i
          style={{ color: "white", fontSize: "1.5em" }}
          className="fas fa-user mr-2"
        ></i>
        <i
          style={{ color: "gray", fontSize: ".8em" }}
          class="fas fa-circle"
        ></i>
      </NavItem>
      <Popover
        className="popover-warning"
        placement="bottom"
        isOpen={popoverOpen}
        target={"Player" + i}
      >
        <PopoverBody className="text-white">
          <b>{player.name}</b>
        </PopoverBody>
      </Popover>
    </>
  );
};

export default Player;
