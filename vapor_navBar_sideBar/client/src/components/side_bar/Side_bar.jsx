import React from "react";
import Friends_box from "./Friends_box.jsx";
import Player_box from "./Player_box.jsx";
import VR_box from "./VR_box.jsx";
import Languages_box from "./Languages_box.jsx";
import Game_box from "./Game_box.jsx";
import Button_box from "./Button_box.jsx";
const styled = window.styled;

const Side_layout = styled.div`
  display: inline-block;
  width: 308px;
`;

class Side_bar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Side_layout>
        <Friends_box />
        <br />
        <Player_box />
        <br />
        <VR_box />
        <br />
        <Languages_box />
        <br />
        <Game_box />
        <br />
        <Button_box />
      </Side_layout>
    );
  }
}

export default Side_bar;
