import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  border: 1px solid #233c51;
  border-radius: 3px;
  height: 132px;
  max-width: 800px;
  min-width: 730px;
  background-color: #222b35;
  color: #d6d7d8;
  padding: 10px 11px;
  font-size: 13px;
  font-family: 'Motiva Sans', Sans-serif;
  font-weight: normal;
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.5);
`;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: ''
    };
    this.writeReview = this.writeReview.bind(this);
  }

  writeReview(e) {
    const review = e.target.value;
    this.setState({
      review
    });
    this.props.handleReview(review);
  }

  render() {
    return (
      <TextArea
        className="input_box"
        maxLength="8000"
        onChange={e => this.writeReview(e)}
      />
    );
  }
}
export default Content;
