import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
  font-size: 18px;
  font-family: 'Motiva Sans', Sans-serif;
  font-weight: 300;
  line-height: 40px;
  color: #a3cf06;
`;

const Wrapper = styled.div`
  height: 40px;
  padding: 0px 15px 0px 0px;
  position: relative;
  background: -webkit-linear-gradient(
    left,
    rgba(163, 207, 6, 0.6) 0%,
    rgba(75, 106, 33, 0.6) 100%
  );
`;

const OwnedFlag = styled.div`
  position: relative;
  float: left;
  top: 10px;
  left: -8px;
  box-shadow: 1px 1px 2px #000000;
  background: no-repeat 4px 4px #a3cf06;
  font-size: 10px;
  color: #111111;
  height: 18px;
  line-height: 19px;
  padding: 0 0 0 18px;
  white-space: nowrap;
  z-index: 5;
  font-family: 'Motiva Sans', Sans-serif;
  font-weight: 300;
`;

const Title = () => {
  return (
    <Wrapper>
      <OwnedFlag className="ds_owned_flag ds_flag">
        IN LIBRARY&nbsp;&nbsp;
      </OwnedFlag>
      <TitleDiv className="already_in_library">
        Dota 2 is already in your Steam library
      </TitleDiv>
    </Wrapper>
  );
};

export default Title;
