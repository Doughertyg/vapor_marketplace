import React from "react";
const styled = window.styled;

const Break = styled.hr`
  margin-top: 10px;
  margin-bottom: 1px;
  background: "#273747";
  color: #263647;
`;

const Game_relevance = styled.div`
  display: flex;
  flex: 1;
  background-color: #0c1119;
  color: #dcdddd;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 18px;
`;

const Hours_played = styled.div`
  color: #969696;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 9px 18px 10px 30px;
`;

const Recommended = styled.div`
  color: #969696;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px 18px 49px 18px;
`;

const User_reviews = styled.span`
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  color: #66c0f4;
`;

const Avatar = styled.span`
  position: absolute;
  margin-top: 26px;
  margin-left: 19px;
  height: 22px;
  width: 24px;
  padding: 10px 7px 2px 10px;
  background-image: url(https://i.imgur.com/hHVjPbv.jpg);
  background-size: 40px;
  cursor: pointer;
`;

const Check = styled.span`
  /* right: 540px; */
  /* top: 289px; */
  position: absolute;
  margin-top: 10px;
  margin-left: 6px;
  float: left;
  height: 10px;
  width: 9px;
  padding: 10px 0px 0px 10px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/app/game_reasons_for.png);
  background-size: 18px;
`;

const Check2 = styled.span`
  position: absolute;
  margin-top: 10px;
  margin-left: 6px;
  float: left;
  height: 10px;
  width: 9px;
  padding: 10px 0px 0px 10px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/app/game_reasons_for.png);
  background-size: 18px;
`;

const Check3 = styled.span`
  position: absolute;
  margin-top: 10px;
  margin-left: 6px;
  float: left;
  height: 10px;
  width: 9px;
  padding: 10px 0px 0px 10px;
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/app/game_reasons_for.png);
  background-size: 18px;
`;

class Friends_box extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Game_relevance>Is this game relevant to you?</Game_relevance>
        <Check />
        <Hours_played>
          100 hours played
          <span>
            <Break />
          </span>
        </Hours_played>
        <Check2 />
        <Hours_played>
          User reviews:
          <User_reviews>
            Very Positive
            <span>
              <Break />
            </span>
          </User_reviews>
        </Hours_played>
        <Check3 />
        <Hours_played>
          In the Top Sellers
          <span>
            <Break />
          </span>
        </Hours_played>
        <Avatar />
        <Recommended>Recommended By 1 Friend</Recommended>
      </div>
    );
  }
}

export default Friends_box;
