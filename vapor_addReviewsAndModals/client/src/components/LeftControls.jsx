import React from 'react';
import styled from 'styled-components';

const LeftReviewControls = styled.div`
  float: left;
  margin-bottom: 8px;
  margin-right: 8px;
  display: block;
`;

const Recommended = styled.div`
  display: block;
  margin-bottom: 4px;
  font-family: Arial, Helvetica, sans-serif;
  color: #c6d4df;
  font-size: 12px;
`;

const VoteControls = styled.div`
  display: block;
  color: #acb2b8;
  font-size: 13px;
  font-family: 'Motiva Sans', Sans-serif;
  font-weight: normal;
`;

const A = styled.a`
  margin-right: 5px;
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none !important;
  color: #67c1f5 !important;
  background: rgba(103, 193, 245, 0.2);
  &:hover {
    text-decoration: none !important;
    color: #fff !important;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

const Span = styled.span`
  padding: 0 15px;
  font-size: 12px;
  line-height: 30px;
  border-radius: 2px;
  display: block;
  background: transparent;
  &:hover {
    color: #ffffff;
  }
`;

const IconThumbsUp = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 2px;
  margin: 0 0px;

  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: 0px 0px;
  font-style: italic;
`;

const IconThumbsDown = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 0px;
  margin-right: 2px;
  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: -18px 0px;
  font-style: italic;
`;

const HoverThumbsUp = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 0px;
  margin-right: 2px;
  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: -72px 0px;
  font-style: italic;
`;

const HoverThumbsDown = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 0px;
  margin-right: 2px;
  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: -90px 0px;
  font-style: italic;
`;

const ClickedSpan = styled.span`
  padding: 0 15px;
  font-size: 12px;
  line-height: 30px;
  border-radius: 2px;
  display: block;
  background: transparent;
  color: #ffffff;
`;

const ClickThumbs = styled.a`
  margin-right: 5px;
  border-radius: 2px;
  border: none;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none !important;
  color: #fff !important;
  background: rgba(103, 193, 245, 0.6);
`;

const ClickedUp = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 0px;
  margin-right: 2px;
  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: -36px 0px;
  font-style: italic;
`;

const ClickedDown = styled.i`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin: 0 0px;
  margin-right: 2px;
  background: url(https://steamstore-a.akamaihd.net/public/shared/images/buttons/icons_18.png?v=3);
  vertical-align: text-top;
  background-position: -54px 0px;
  font-style: italic;
`;

export default class LeftControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickUp: false,
      hoverUp: false,
      clickDown: false,
      hoverDown: false,
      recommended: ''
    };
    this.activeStateUp = this.activeStateUp.bind(this);
    this.activeStateDown = this.activeStateDown.bind(this);
    this.handleHoverUp = this.handleHoverUp.bind(this);
    this.handleHoverDown = this.handleHoverDown.bind(this);
    this.handleClickUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
  }

  activeStateUp(e) {
    e.preventDefault();
    this.setState({
      clickUp: true
    });
  }

  activeStateDown(e) {
    e.preventDefault();
    this.setState({
      clickDown: true
    });
  }

  handleHoverUp() {
    this.setState({
      hoverUp: true
    });
  }

  handleHoverLeaveUp() {
    this.setState({
      hoverUp: false
    });
  }

  handleHoverDown() {
    this.setState({
      hoverDown: true
    });
  }

  handleHoverLeaveDown() {
    this.setState({
      hoverDown: false
    });
  }

  handleClickUp(e) {
    e.preventDefault();
    const recommended = 'yes';
    this.setState({
      clickUp: true,
      clickDown: false,
      hoverUp: false,
      recommended: 'yes'
    });
    this.props.handleRecommend(recommended);
  }

  handleClickDown(e) {
    e.preventDefault();
    const recommended = 'no';
    this.setState({
      clickUp: false,
      clickDown: true,
      hoverDown: false,
      recommended: 'no'
    });
    this.props.handleRecommend(recommended);
  }

  render() {
    if (
      this.state.hoverUp === false &&
      this.state.hoverDown === false &&
      this.state.clickUp === false &&
      this.state.clickDown === false
    ) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <A value="thumbsUp" onMouseEnter={() => this.handleHoverUp()}>
              <Span>
                <IconThumbsUp />
                Yes
              </Span>
            </A>
            <A value="thumbsDown" onMouseEnter={() => this.handleHoverDown()}>
              <Span>
                <IconThumbsDown />
                No
              </Span>
            </A>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (this.state.hoverUp === true && this.state.clickDown === false) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <A
              value="thumbsUp"
              onMouseLeave={() => this.handleHoverLeaveUp()}
              onClick={e => this.handleClickUp(e)}
            >
              <Span>
                <HoverThumbsUp />
                Yes
              </Span>
            </A>
            <A value="thumbsDown">
              <Span>
                <IconThumbsDown />
                No
              </Span>
            </A>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (this.state.hoverDown === true && this.state.clickUp === false) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <A value="thumbsUp" onMouseEnter={() => this.handleHoverUp()}>
              <Span>
                <IconThumbsUp />
                Yes
              </Span>
            </A>
            <A
              value="thumbsDown"
              onMouseLeave={() => this.handleHoverLeaveDown()}
              onClick={e => this.handleClickDown(e)}
            >
              <Span>
                <HoverThumbsDown />
                No
              </Span>
            </A>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (
      this.state.clickUp === true &&
      this.state.hoverDown === false &&
      this.state.clickDown === false
    ) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <ClickThumbs value="thumbsUp">
              <ClickedSpan>
                <ClickedUp />
                Yes
              </ClickedSpan>
            </ClickThumbs>
            <A value="thumbsDown" onMouseEnter={() => this.handleHoverDown()}>
              <Span>
                <IconThumbsDown />
                No
              </Span>
            </A>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (
      this.state.clickUp === true &&
      this.state.hoverDown === true &&
      this.state.clickDown === false
    ) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <ClickThumbs value="thumbsUp">
              <ClickedSpan>
                <ClickedUp />
                Yes
              </ClickedSpan>
            </ClickThumbs>
            <A
              value="thumbsDown"
              onMouseLeave={() => this.handleHoverLeaveDown()}
              onClick={e => this.handleClickDown(e)}
            >
              <Span>
                <HoverThumbsDown />
                No
              </Span>
            </A>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (this.state.clickDown === true && this.state.hoverUp === true) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <A
              value="thumbsUp"
              onMouseLeave={() => this.handleHoverLeaveUp()}
              onClick={e => this.handleClickUp(e)}
            >
              <Span>
                <HoverThumbsUp />
                Yes
              </Span>
            </A>
            <ClickThumbs value="thumbsDown">
              <ClickedSpan>
                <ClickedDown />
                No
              </ClickedSpan>
            </ClickThumbs>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (this.state.clickDown === true && this.state.hoverUp === false) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <A value="thumbsUp" onMouseEnter={() => this.handleHoverUp()}>
              <Span>
                <IconThumbsUp />
                Yes
              </Span>
            </A>
            <ClickThumbs value="thumbsDown">
              <ClickedSpan>
                <ClickedDown />
                No
              </ClickedSpan>
            </ClickThumbs>
          </VoteControls>
        </LeftReviewControls>
      );
    } else if (
      this.state.clickDown === true &&
      this.state.hoverUp === true &&
      this.state.clickUp === false
    ) {
      return (
        <LeftReviewControls>
          <Recommended>Do you recommend this game?</Recommended>
          <VoteControls>
            <A
              value="thumbsUp"
              onMouseLeave={() => this.handleHoverLeaveUp()}
              onClick={e => this.handleClickUp(e)}
            >
              <Span>
                <HoverThumbsUp />
                Yes
              </Span>
            </A>
            <ClickThumbs value="thumbsDown">
              <ClickedSpan>
                <ClickedDown />
                No
              </ClickedSpan>
            </ClickThumbs>
          </VoteControls>
        </LeftReviewControls>
      );
    }
  }
}
