import React from 'react';
import Content from './Content.jsx';
import Controls from './Controls.jsx';
import LeftControls from './LeftControls.jsx';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

const ReviewCreate = styled.div`
  max-width: 908px;
  position: relative;
  overflow: visible;
  padding-top: 16px;
`;

const H1 = styled.h1`
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 3px;
  margin-top: 12.06px;
  color: #66c0f4;
  font-family: 'Motiva Sans', Sans-serif;
  font-weight: 300;
  width: 100%;
  border-top: 1px solid #212c3d;
  padding-top: 10px;
`;

const P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 13px;
  margin-bottom: 15px;
  line-height: 17px;
  color: #8f98a0;
  font-family: Arial, Helvetica, sans-serif;
`;
const A = styled.a`
  text-decoration: none;
  color: #ffffff;
  &:hover {
    text-decoration: none;
    color: #66c0f4;
  }
`;

const Avatar = styled.div`
  width: 94px;
  height: 94px;
  background-repeat: no-repeat;
  padding: 1px;
  margin-right: 16px;
  border-radius: 0px;
  float: left;
`;

const Img = styled.img`
  width: 92px;
  height: 92px;
  padding: 1px;
`;

const InputBox = styled.div`
  width: auto;
  float: none;
  display:grid;
  position: static;
  `;
  // overflow: hidden;

const Submit = styled.div`
  display: block;
  clear: right;
  float: right;
`;

const Post = styled.a`
  margin-left: 2px;
  border-radius: 4px;
  border: 2px solid #17202f;
  padding: 1px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none !important;
  color: #2b5066 !important;
  float: right;
  background: linear-gradient(
    to bottom,
    rgba(193, 228, 249, 1) 5%,
    rgba(148, 183, 202, 1) 95%
  );
  &:hover {
    text-decoration: none !important;
    color: #ffffff !important;
    background: linear-gradient(
      to bottom,
      rgba(102, 192, 244, 1) 5%,
      rgba(47, 137, 188, 1) 95%
    );
  }
`;

const Span = styled.span`
  display: block;
  background: transparent;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.1);
  padding: 0 15px;
  line-height: 30px;
  border-radius: 3px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
`;

const ReviewControlRight = styled.div`
`;
// padding-top: 14px;
// padding-right: 7px;
class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'English',
      visibility: 'Public',
      allowComments: false,
      review: '',
      recommended: '',
      visibilityActive: false,
      languageActive: false
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.handleAllowComments = this.handleAllowComments.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleRecommend = this.handleRecommend.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLanguageChange(language) {
    this.setState({
      language
    });
  }

  handleVisibilityChange(visibility) {
    this.setState({
      visibility
    });
  }

  handleAllowComments(allowComments) {
    this.setState({
      allowComments
    });
  }

  handleReview(review) {
    this.setState({
      review
    });
    console.log(`Review Container has new review: ${review}`);
  }

  handleRecommend(recommended) {
    this.setState({
      recommended
    });
    console.log(`Review Container has new recommend: ${recommended}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = this.state;
    console.log('Data in RC', data);
    this.props.handlePost(data);
  }

  render() {
    return (
      <ReviewCreate>
        <H1>Write a review for Dota 2</H1>
        <P id="review_describe">
          Please describe what you liked or disliked about this game and whether
          you recommend it to others. <br />
          Please remember to be polite and follow the &nbsp;
          <A href="https://support.steampowered.com/kb_article.php?ref=4045-USHJ-3810">
            Rules and Guidelines
          </A>
        </P>
        <Avatar>
          <Img src="https://i.imgur.com/hHVjPbv.jpg" />
        </Avatar>
        <InputBox>
          <Content handleReview={this.handleReview} />
          <Controls
            handleLanguageChange={this.handleLanguageChange}
            handleVisibilityChange={this.handleVisibilityChange}
            handleAllowComments={this.handleAllowComments}
          />
          <LeftControls handleRecommend={this.handleRecommend}/>
          <ReviewControlRight>
            <Submit>
              <Post>
                <Span onClick={e => this.handleSubmit(e)}>Post Review</Span>
              </Post>
            </Submit>
          </ReviewControlRight>
        </InputBox>
      </ReviewCreate>
    );
  }
}

export default ReviewContainer;
