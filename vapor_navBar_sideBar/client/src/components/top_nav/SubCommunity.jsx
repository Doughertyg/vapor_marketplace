import React from "react";
const styled = window.styled;

const Sub_community = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 12px;
  padding: 5px 7px 7px;
  position: relative;
  background: #171a21;
  z-index: 1;
  box-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2);
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Styled_community = () => (
  <div style={{ position: "absolute" }}>
    <Sub_community>HOME</Sub_community>
    <Sub_community>DISCUSSIONS</Sub_community>
    <Sub_community>WORKSHOP</Sub_community>
    <Sub_community>MARKET</Sub_community>
    <Sub_community>BROADCAST</Sub_community>
  </div>
);

export default Styled_community;
