import React from "react";
import axios from "axios";
const styled = window.styled;

const Game_layout = styled.div`
  /* display: flex;
  flex-direction: column; */
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  padding: 16px;
`;

const Title = styled.div`
  font-size: 12px;
  color: #596067;
  font-family: Arial, Helvetica, sans-serif;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  padding: 7px 0px 0px 3px;
`;

const Maintitle = styled.div`
  font-size: 12px;
  color: #596067;
  font-family: Arial, Helvetica, sans-serif;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  padding: 7px 0px 20px 3px;
`;

const Subtitle = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  /* background-image: -webkit-linear-gradient(left, #15202c, #0e141d); */
  &:hover {
    color: #67c0f4;
    cursor: pointer;
  }
`;

const Game_rows = styled.div`
  background-color: #172631;
  color: #63baec;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 4px 8px 4px 3px;
  height: 17px;
  width: 284.047px;
  margin-bottom: 2px;
  cursor: pointer;
  &:hover {
    color: white;
    background: #63baec;
  }
`;

const Frame = styled.span`
  align-self: flex-start;
  position: absolute;
  height: 8px;
  width: 4px;
  padding: 0px 4px 0px 0px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v5/ico_external_link.gif);
  background-size: 8px;
`;

class Game_box extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      genre: "",
      developer: "",
      publisher: ""
    };
  }

  componentDidMount() {
    this.getGames();
  }

  getGames() {
    axios
      .get("http://18.219.149.140/game")
      .then(res => {
        this.setState({
          title: res.data.title,
          genre: res.data.genre,
          developer: res.data.developer,
          publisher: res.data.publisher
        });
      })
      .catch(err => {
        console.log("Error ", err);
      });
  }

  render() {
    return (
      <Game_layout>
        <Title>Title: {this.state.title}</Title>
        <Title>
          Genre: <Subtitle>{this.state.genre}</Subtitle>
          <Subtitle>, {this.state.genre}</Subtitle>
          <Subtitle>, {this.state.genre}</Subtitle>
        </Title>
        <Title>
          Developer:
          <Subtitle>{this.state.developer}</Subtitle>
        </Title>
        <Title>
          Publisher: <Subtitle>{this.state.publisher}</Subtitle>
        </Title>
        <Maintitle>Release Date: Jul 9, 2013</Maintitle>
        <span>
          <Game_rows>
            Visit the website
            <Frame />
          </Game_rows>
        </span>
        <Game_rows>View update history</Game_rows>
        <Game_rows>Read related news</Game_rows>
        <Game_rows>View discussions</Game_rows>
        <Game_rows>Visit the Workshop</Game_rows>
        <Game_rows>Find Community Groups</Game_rows>
      </Game_layout>
    );
  }
}

export default Game_box;
