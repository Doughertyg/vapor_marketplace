import React from "react";
import Styled_yourstore from "./Sub_yourstore.jsx";
import Styled_games from "./Sub_games.jsx";
import Styled_software from "./Sub_software.jsx";
import Styled_hardware from "./Sub_hardware.jsx";
const styled = window.styled;

const Layout = styled.div`
  display: flex;
  height: 39px;
  margin: 5px 0;
  align-items: flex-start;
  background-color: #387197;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
`;

const YourStore = styled.div`
  color: #d9dadd;
  text-align: center;
  margin-top: 1px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding: 11px 11px 11px 11px;
  position: relative;
  border-right: 1px solid rgba(16, 21, 25, 0.3);
  cursor: pointer;
  &:hover {
    color: #202323;
    background-color: #e3eaef;
  }
`;

const Games = styled.div`
  color: #d9dadd;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 1px;
  font-size: 13px;
  padding: 11px 11px 11px 11px;
  position: relative;
  border-right: 1px solid rgba(16, 21, 25, 0.3);
  cursor: pointer;
  &:hover {
    color: #202323;
    background-color: #e3eaef;
  }
`;
const Software = styled.div`
  color: #d9dadd;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 1px;
  font-size: 13px;
  padding: 11px 11px 11px 11px;
  position: relative;
  border-right: 1px solid rgba(16, 21, 25, 0.3);
  cursor: pointer;
  &:hover {
    color: #202323;
    background-color: #e3eaef;
  }
`;
const Hardware = styled.div`
  color: #d9dadd;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 1px;
  font-size: 13px;
  padding: 11px 11px 11px 11px;
  position: relative;
  border-right: 1px solid rgba(16, 21, 25, 0.3);
  cursor: pointer;
  &:hover {
    color: #202323;
    background-color: #e3eaef;
  }
`;
const News = styled.div`
  color: #d9dadd;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 1px;
  font-size: 13px;
  padding: 11px 11px 11px 11px;
  position: relative;
  border-right: 1px solid rgba(16, 21, 25, 0.3);
  cursor: pointer;
  &:hover {
    color: #202323;
    background-color: #e3eaef;
  }
`;

const Searchbox = styled.input`
  position: relative;
  /* margin-left: 1235px; */
  margin-top: -40px;
  float: right;
  display: flex;
  /* align-self: flex-end; */
  margin-right: 2px;
  flex-direction: row;
  border: 1px solid grey;
  background-color: #316282;
  box-shadow: 1px 1px 0px rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  padding: 2px;
  height: 26px;
  width: 180px;
  ::placeholder {
    font-family: "Motiva Sans Light", Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-style: italic;
    color: #0e1c25;
  }
`;

const Arrow = styled.span`
  background-image: url(https://store.steampowered.com/public/images/v6/ico/ico_arrow_dn_for_select.png);
  margin-left: 8px;
  float: right;
  top: 50px;
  height: 15px;
  width: 15px;
  margin-top: 2px;
  background-size: 20px;
`;

class Main_sub extends React.Component {
  constructor() {
    super();
    this.state = {
      displayYourStore: false,
      displayGames: false,
      displaySoftware: false,
      displayHardware: false
    };
    this.showYourstore = this.showYourstore.bind(this);
    this.hideYourstore = this.hideYourstore.bind(this);
    this.showGames = this.showGames.bind(this);
    this.hideGames = this.hideGames.bind(this);
    this.showSoftware = this.showSoftware.bind(this);
    this.hideSoftware = this.hideSoftware.bind(this);
    this.showHardware = this.showHardware.bind(this);
    this.hideHardware = this.hideHardware.bind(this);
  }

  showYourstore() {
    this.setState({
      displayYourStore: true
    });
  }

  hideYourstore() {
    this.setState({
      displayYourStore: false
    });
  }

  showGames() {
    this.setState({
      displayGames: true
    });
  }

  hideGames() {
    this.setState({
      displayGames: false
    });
  }

  showSoftware() {
    this.setState({
      displaySoftware: true
    });
  }

  hideSoftware() {
    this.setState({
      displaySoftware: false
    });
  }

  showHardware() {
    this.setState({
      displayHardware: true
    });
  }

  hideHardware() {
    this.setState({
      displayHardware: false
    });
  }

  render() {
    return (
      <nav>
        <Layout>
          <div
            onMouseLeave={this.hideYourstore}
            style={{ display: "inline-block" }}
          >
            <YourStore
              style={{ display: "inline-block" }}
              onMouseEnter={this.showYourstore}
            >
              Your Store
              <Arrow />
            </YourStore>
            {this.state.displayYourStore && <Styled_yourstore />}
          </div>
          <div
            onMouseLeave={this.hideGames}
            style={{ display: "inline-block" }}
          >
            <Games
              style={{ display: "inline-block" }}
              onMouseEnter={this.showGames}
            >
              Games
              <Arrow />
            </Games>
            {this.state.displayGames && <Styled_games />}
          </div>
          <div
            onMouseLeave={this.hideSoftware}
            style={{ display: "inline-block" }}
          >
            <Software
              style={{ display: "inline-block" }}
              onMouseEnter={this.showSoftware}
            >
              Software
              <Arrow />
            </Software>
            {this.state.displaySoftware && <Styled_software />}
          </div>
          <div
            onMouseLeave={this.hideHardware}
            style={{ display: "inline-block" }}
          >
            <Hardware
              style={{ display: "inline-block" }}
              onMouseEnter={this.showHardware}
            >
              Hardware
              <Arrow />
            </Hardware>
            {this.state.displayHardware && <Styled_hardware />}
          </div>
          <div style={{ display: "inline-block" }}>
            <News style={{ display: "inline-block" }}>News</News>
          </div>
        </Layout>
        <Searchbox placeholder="search the store" />
        {/* <Searchbutton /> */}
        <div />
      </nav>
    );
  }
}

export default Main_sub;
