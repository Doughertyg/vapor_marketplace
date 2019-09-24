import React from "react";
const styled = window.styled;

const Player_layout = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  padding: 16px;
`;

const Break = styled.hr`
  margin-top: 10px;
  margin-bottom: 1px;
  background: "#273747";
  color: #263647;
`;

const Player_rows = styled.div`
  align-self: flex-end;
  display: flex;
  background-color: #172631;
  color: #63baec;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 4px 8px 0px;
  margin: 0px 0px 2px 37px;
  width: 223px;
  height: 22px;
  cursor: pointer;
  &:hover {
    color: white;
    background: #63baec;
  }
`;

const Frame = styled.div`
  align-self: flex-end;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 23px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_multiPlayer.png);
  background-size: 39px;
`;

const Frame2 = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 18px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_coop.png);
  background-size: 35px;
`;

const Frame3 = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 19px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_cards.png);
  background-size: 37px;
`;

const Frame4 = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 19px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_workshop.png);
  background-size: 37px;
`;

const Frame5 = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 18px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_collectibles.png);
  background-size: 37px;
`;

const Frame6 = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 18px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_cart.png);
  background-size: 37px;
`;

const Frame7 = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 18px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/ico/ico_vac.png);
  background-size: 37px;
`;

class Player_box extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Player_layout>
          <div>
            <Frame />
            <Player_rows>Multi-player</Player_rows>
          </div>
          <div>
            <Frame2 />
            <Player_rows>Co-op</Player_rows>
          </div>
          <div>
            <Frame3 />
            <Player_rows>Steam Trading Cards</Player_rows>
          </div>
          <div>
            <Frame4 />
            <Player_rows>Steam Workshop</Player_rows>
          </div>
          <div>
            <Frame5 />
            <Player_rows>SteamVR Collectibles</Player_rows>
          </div>
          <div>
            <Frame6 />
            <Player_rows>In-App Purchases</Player_rows>
          </div>
          <div>
            <Frame7 />
            <Player_rows>Valve Anti-Cheat enabled</Player_rows>
          </div>
        </Player_layout>
      </div>
    );
  }
}

export default Player_box;
