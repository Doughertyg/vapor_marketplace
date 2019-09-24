import React from "react";
const styled = window.styled;

const VR_layout = styled.div`
  display: flex;
  flex-direction: column;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  padding: 16px;
`;

const Title = styled.div`
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: #868f96;
  padding: 0px 10px 10px 0px;
`;

const Subtitle = styled.div`
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: #8f98a0;
  padding: 5px 0px 10px 0px;
`;

const VR_rows = styled.div`
  display: flex;
  background-color: #172631;
  color: #63baec;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  padding: 4px 8px 0px;
  margin: 0px 0px 2px 37px;
  width: 223px;
  height: 22px;
  cursor: pointer;
  &:hover {
    color: white;
    background: #63baec;
  }
`;

const Frame = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 16px;
  background-image: url(https://store.steampowered.com/public/images/v6/ico/ico_vr_headset_htc.png);
  background-size: 34px;
`;

const Frame2 = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 18px;
  background-image: url(https://store.steampowered.com/public/images/v6/ico/ico_vr_input_motion.png);
  background-size: 36px;
`;

const Frame3 = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 17px;
  background-image: url(https://store.steampowered.com/public/images/v6/ico/ico_vr_area_seated.png);
  background-size: 36px;
`;

const Frame4 = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 17px;
  background-image: url(https://store.steampowered.com/public/images/v6/ico/ico_vr_area_standing.png);
  background-size: 36px;
`;

const Frame5 = styled.div`
  align-self: flex-start;
  position: absolute;
  background: #111923;
  width: 30px;
  padding-top: 5px;
  padding-left: 6px;
  width: 31px;
  height: 17px;
  background-image: url(https://store.steampowered.com/public/images/v6/ico/ico_vr_area_roomscale.png);
  background-size: 36px;
`;

class VR_box extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <VR_layout>
        <Title>VR Support</Title>
        <Subtitle>Headsets</Subtitle>
        <div>
          <Frame />
          <VR_rows>HTC Vive</VR_rows>
        </div>
        <Subtitle>Input</Subtitle>
        <div>
          <Frame2 />
          <VR_rows>Tracked Motion Controllers</VR_rows>
        </div>
        <Subtitle>Play Area</Subtitle>
        <div>
          <Frame3 />
          <VR_rows>Seated</VR_rows>
        </div>
        <div>
          <Frame4 />
          <VR_rows>Standing</VR_rows>
        </div>
        <div>
          <Frame5 />
          <VR_rows>Room-Scale</VR_rows>
        </div>
      </VR_layout>
    );
  }
}

export default VR_box;
