import React from "react";
const styled = window.styled;

const Sub_store = styled.div`
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

const Styled_store = () => (
  <div style={{ position: "absolute" }}>
    <Sub_store>FEATURED</Sub_store>
    <Sub_store>EXPLORE</Sub_store>
    <Sub_store>CURATORS</Sub_store>
    <Sub_store>WISHLIST</Sub_store>
    <Sub_store>NEWS</Sub_store>
    <Sub_store>STATS</Sub_store>
    <Sub_store>ABOUT</Sub_store>
  </div>
);

export default Styled_store;
