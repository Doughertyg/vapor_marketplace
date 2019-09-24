import React from "react";
const styled = window.styled;

const Game_layout = styled.div`
  position: absolute;
  z-index: 200;
`;

const Break = styled.hr`
  margin-top: 0px;
  margin-bottom: 0px;
  color: white;
`;

const Sub_games = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 10px;
  background: #e3eaef;
  box-shadow: 1px 0px 0px rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(16, 21, 25, 0.3);
  border-left: 1px solid rgba(16, 21, 25, 0.3);
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #171a21;
  }
`;

const Styled_games = () => (
  <Game_layout>
    <div style={{ boxShadow: " 0 0 12px #000000" }}>
      <Sub_games>Free to Play</Sub_games>
      <Sub_games>Early Access</Sub_games>
      <Sub_games>Demos</Sub_games>
      <Sub_games>Virtual Reality</Sub_games>
      <Sub_games>Steam Controller Friendly</Sub_games>
      <Sub_games>PC Café Games on Steam</Sub_games>
      <Break />
      <Sub_games>Action</Sub_games>
      <Sub_games>Adventure</Sub_games>
      <Sub_games>Casual</Sub_games>
      <Sub_games>Indie</Sub_games>
      <Sub_games>Massively Multiplayer</Sub_games>
      <Sub_games>Racing</Sub_games>
      <Sub_games>RPG</Sub_games>
      <Sub_games>Simulation</Sub_games>
      <Sub_games>Sports</Sub_games>
      <Sub_games>Strategy</Sub_games>
      <Break />
      <Sub_games>See popular tags</Sub_games>
      <Break />
      <Sub_games>Mac OS X</Sub_games>
      <Sub_games>SteamOS + Linux</Sub_games>
    </div>
  </Game_layout>
);
export default Styled_games;
