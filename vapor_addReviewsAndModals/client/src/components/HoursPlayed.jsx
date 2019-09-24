import React from 'react';
import styled from 'styled-components';

const Bg = styled.div`
  color: #8f98a0;
  font-size: 12px;
  margin-bottom: 1px;
  margin-top: 3px;
  font-family: Arial, Helvetica, sans-serif;
`;

const HoursPlayed = () => {
  return (
    <Bg>
      <div className="hours_played">3,140.2 hrs on record </div>
    </Bg>
  );
};

export default HoursPlayed;
