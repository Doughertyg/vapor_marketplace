import React from "react";
const styled = window.styled;

const Button_layout = styled.div`
  display: flex;
  flex-direction: row;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  padding: 16px;
`;
const Share = styled.button`
  color: #67c1f5;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  width: 72px;
  height: 32px;
  border-radius: 2px;
  border-color: #254055;
  padding: 0px 15px 0px 15px;
  background: #254055;
  margin-right: 3px;
  cursor: pointer;
  &:hover {
    text-decoration: none !important;
    color: #fff !important;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

const Embed = styled.button`
  color: #67c1f5;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  width: 79px;
  height: 32px;
  border-radius: 2px;
  border-color: #254055;
  padding: 0px 15px 0px 15px;
  background: #254055;
  margin-right: 3px;
  cursor: pointer;
  &:hover {
    text-decoration: none !important;
    color: #fff !important;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

const Flag = styled.button`
  color: #67c1f5;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  width: 72px;
  height: 32px;
  border-radius: 2px;
  border-color: #254055;
  padding: 0px 15px 0px 15px;
  background: #254055;
  margin-right: 3px;
  cursor: pointer;
  &:hover {
    text-decoration: none !important;
    color: #fff !important;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

class Button_box extends React.Component {
  constructor() {
    super();
    this.state = {
      share: false,
      embed: false,
      flag: false
    };
    this.handleShare = this.handleShare.bind(this);
    this.handleEmbed = this.handleEmbed.bind(this);
    this.handleFlag = this.handleFlag.bind(this);
  }

  handleShare(e) {
    e.preventDefault();
    console.log("handleShare");
    this.setState({
      share: true
    });
  }

  handleEmbed(e) {
    e.preventDefault();
    console.log("handleEmbed");
    this.setState({
      embed: true
    });
  }

  handleFlag(e) {
    e.preventDefault();
    console.log("handleFlag");
    this.setState({
      flag: true
    });
  }

  render() {
    return (
      <Button_layout>
        <Share onClick={this.handleShare}>Share</Share>
        <Embed onClick={this.handleEmbed}>Embed</Embed>
        <Flag onClick={this.handleFlag}>Report</Flag>
      </Button_layout>
    );
  }
}

export default Button_box;
