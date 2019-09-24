import React from "react";
const styled = window.styled;

const Hardware_layout = styled.div`
  position: absolute;
  z-index: 200;
`;

const Sub_hardware = styled.div`
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

const Styled_hardware = () => (
  <Hardware_layout>
    <div style={{ boxShadow: " 0 0 12px #000000" }}>
      <Sub_hardware>Valve Index</Sub_hardware>
      <Sub_hardware>Steam Controller</Sub_hardware>
      <Sub_hardware>Steam Link</Sub_hardware>
      <Sub_hardware>HTC Vive</Sub_hardware>
    </div>
  </Hardware_layout>
);
export default Styled_hardware;
