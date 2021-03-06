import React from 'react';
const styled = window.styled;

const Wrapper = styled.div`
  background-color: #000000;
  overflow: hidden;
  position: relative;
`;


const Img = styled.img`
  width: 600px;
  height: 337px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;

`;
class Highlight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var media = this.props.isVideo ? <video width="100%" height="100%" src={this.props.url} controls autoPlay allowFullscreen muted/> : <Img src={this.props.url}/>;
    return(
      <Wrapper>
        {media}
      </Wrapper>
    );
  }
}
 


export default Highlight;