import React from 'react';
import Title from './Title.jsx';
import AlreadyOwnedBtns from './AlreadyOwnedBtns.jsx';
import HoursPlayed from './HoursPlayed.jsx';
import ReviewContainer from './ReviewContainer.jsx';
import styled from 'styled-components';
import Axios from 'axios';

const Background = styled.div`
  background: #1b2838;
  color: #acb2b8;
  width: auto;
  margin: 0;
  max-width: 940px;
`;

const TextEditor = styled.div`
  position: static;
  display: block;
  font-family: Arial, Helvetica, sans - serif;
  color: #c6d4df;
  font-size: 12px;
  max-width: 908px;
  background: linear-gradient(
    135deg,
    rgba(97, 100, 101, 0.3) 0%,
    rgba(226, 244, 255, 0.3) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d616465', endColorstr='#4de2f4ff',GradientType=1 );
  padding: 0px 16px 16px 16px;
  width: auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: '',
      visibility: '',
      allowComments: false,
      review: '',
      recommended: '',
      languageActive: false,
      visibilityActive: false
    };
    this.handlePost = this.handlePost.bind(this);
  }

  handlePost(data) {
    this.setState({
      data
    });
    Axios.post('/players', data)
      .then(res => console.log('Posted to server: ', res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Background>
        <Title />
        <TextEditor>
          <AlreadyOwnedBtns /> <HoursPlayed />
          <ReviewContainer handlePost={this.handlePost} />
        </TextEditor>
      </Background>
    );
  }
}

export default App;
