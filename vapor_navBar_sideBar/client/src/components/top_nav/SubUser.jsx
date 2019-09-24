import React from "react";
const styled = window.styled;

const Sub_user = styled.div`
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

const Styled_user = () => (
  <div style={{ position: "absolute" }}>
    <Sub_user>ACTIVITY</Sub_user>
    <Sub_user>PROFILE</Sub_user>
    <Sub_user>FRIENDS</Sub_user>
    <Sub_user>GROUPS</Sub_user>
    <Sub_user>CONTENT</Sub_user>
    <Sub_user>BADGES</Sub_user>
    <Sub_user>INVENTORY</Sub_user>
  </div>
);

export default Styled_user;
