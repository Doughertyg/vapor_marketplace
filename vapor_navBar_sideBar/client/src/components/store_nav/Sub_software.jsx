import React from "react";
const styled = window.styled;

const Software_layout = styled.div`
  position: absolute;
  z-index: 200;
`;

const Break = styled.hr`
  margin-top: 0px;
  margin-bottom: 0px;
  /* background: "#273747"; */
  color: white;
`;

const Sub_software = styled.div`
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

const Styled_software = () => (
  <Software_layout>
    <div style={{ boxShadow: " 0 0 12px #000000" }}>
      <Sub_software>Software Hub</Sub_software>
      <Break />
      <Sub_software>Animation and Modeling</Sub_software>
      <Sub_software>Audio Production</Sub_software>
      <Sub_software>Design and Illustration</Sub_software>
      <Sub_software>Education</Sub_software>
      <Sub_software>Game Development</Sub_software>
      <Sub_software>Photo Editing</Sub_software>
      <Sub_software>Utilities</Sub_software>
      <Sub_software>Video Production</Sub_software>
      <Sub_software>Web Publishing</Sub_software>
    </div>
  </Software_layout>
);
export default Styled_software;
