import React from 'react';
const styled = window.styled;

const Wrapper = styled.div`
  margin-top: 4px;
  position: relative;
  height: 69px;
  margin-bottom: 4px;
  z-index: 40;
`;
const StripScroll = styled.div`
  left: ${props => props.stripPos};
  width: 1562px;
  position: absolute;
`;

const HighlightSelector = styled.div`
  position: absolute;
  left: ${props => props.selectorPos}
  background-image: url(https://store.steampowered.com/public/images/v5/game_highlight_activethumb.png);
  width: 116px;
  height: 77px;
  z-index: 50;
  top: -10px;
  pointer-events: none;
`;
const Screenshot = styled.div`
  height: 65px;
  width: 116px;
  float: left;
  cursor: pointer;
  text-align: center;
  margin: 2px;
  background-color: #000000;
  position: relative;
`;

const MovieMaker = styled.div`
  position: absolute;
  top: 16px;
  left: 42px;
  width: 32px;
  height: 32px;
  background-image: url(https://store.steampowered.com/public/images/v5/ico_game_highlight_video.png);
`;

const Img = styled.img`
  width: 115px;
  height: 65px
  border: none;
`;
class Strip extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var stripPos = String(this.props.stripPos) + 'px';
    var selectorPos = String(this.props.selectorPos) + 'px';
    var firstVideo = null;
    var secondVideo = null;
    var lastVideo = null;
    if(this.props.videos) {
      firstVideo = 
        <Screenshot onClick={() => this.props.onClick(0)}><Img src={this.props.screenshots[0]}/><MovieMaker/></Screenshot>;
      secondVideo =
      <Screenshot onClick={() => this.props.onClick(1)}><Img src={this.props.screenshots[1]}/><MovieMaker/></Screenshot>;
      lastVideo = 
        <Screenshot onClick={() => this.props.onClick(12)}><Img src={this.props.screenshots[2]}/><MovieMaker/></Screenshot>
    }

    return(
      <Wrapper>
        <StripScroll stripPos={stripPos} >
          <HighlightSelector selectorPos={selectorPos}></HighlightSelector>
          {firstVideo}
          {secondVideo}
          { 
            this.props.screenshots.map((image, index) => {
              return <Screenshot key={index} onClick={() => this.props.onClick(index + 2)}><Img src={image.url}/></Screenshot>
            })
          }
          {lastVideo}
        </StripScroll>
      </Wrapper>
    );
  }
}
 


export default Strip;