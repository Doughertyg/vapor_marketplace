import React from "react";
import ReactDOM from "react-dom";
import Main_top from "./components/top_nav/main_top.jsx";
import Wishlist from "./components/store_nav/Wishlist.jsx";
import Main_sub from "./components/store_nav/Main_sub.jsx";
import Side_bar from "./components/side_bar/Side_bar.jsx";
import axios from "axios";
const styled = window.styled;

const Background = styled.div`
  background-image: url(https://steamcdn-a.akamaihd.net/steam/apps/570/page_bg_generated_v6b.jpg?t=1557267263);
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main_layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 940px;
  height: 66px;
`;

class Navbar_sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Main_top />
        <Wrapper>
          <Wishlist>WISHLIST</Wishlist>
          <Main_sub />
          <br />
          <Main_layout />
        </Wrapper>
      </div>
    );
  }
}

class Sidebar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <Side_bar />;
  }
}

ReactDOM.render(<Navbar_sidebar />, document.getElementById("navbar"));
ReactDOM.render(<Sidebar />, document.getElementById("sidebar"));
