import React from "react";
const styled = window.styled;

const Store_layout = styled.div`
  position: absolute;
  z-index: 200;
`;

const Break = styled.hr`
  margin-top: 0px;
  margin-bottom: 0px;
  color: white;
`;

const Sub_yourstore = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 10px;
  background: #e3eaef;
  border-right: 1px solid rgba(16, 21, 25, 0.3);
  border-left: 1px solid rgba(16, 21, 25, 0.3);
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #171a21;
  }
`;

const Styled_yourstore = () => (
  <Store_layout>
    <div style={{ boxShadow: " 0 0 12px #000000" }}>
      <Sub_yourstore>Store Home</Sub_yourstore>
      <span>
        <Break />
      </span>
      <Sub_yourstore>Popular Among Friends</Sub_yourstore>
      <Sub_yourstore>Steam Curators</Sub_yourstore>
      <Sub_yourstore>Your Queue</Sub_yourstore>
      <Sub_yourstore>Recently Updated</Sub_yourstore>
      <Sub_yourstore>Multiplayer</Sub_yourstore>
      <Sub_yourstore>Free to play</Sub_yourstore>
      <Break />
      <Sub_yourstore>Action</Sub_yourstore>
      <Sub_yourstore>FPS</Sub_yourstore>
      <Sub_yourstore>Co-op</Sub_yourstore>
      <Break />
      <Sub_yourstore>Browse all recommended tags</Sub_yourstore>
    </div>
  </Store_layout>
);
export default Styled_yourstore;
