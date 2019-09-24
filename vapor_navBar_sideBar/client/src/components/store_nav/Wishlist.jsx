import React from "react";
const styled = window.styled;

const Wishlist = styled.button`
  font: "Arial", Helvetica;
  font-size: 11px;
  background: #6f97a3;
  border-radius: 1px;
  border: 1px black;
  color: white;
  margin: 0px 1px;
  padding: 0px 25px;
  position: relative;
  top: 3px;
  left: 836px;
  height: 20px;
  &:hover {
    color: #62696e;
    background-color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
  }
`;

export default Wishlist;
