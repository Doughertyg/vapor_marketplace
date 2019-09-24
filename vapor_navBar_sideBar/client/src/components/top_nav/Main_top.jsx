import React from "react";
import Wrapper from "./Wrapper.jsx";
import Styled_store from "./SubStore.jsx";
import Styled_community from "./SubCommunity.jsx";
import Styled_user from "./SubUser.jsx";
const styled = window.styled;

const Store = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: relative;
  bottom: 17px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
const Margin = styled.div`
  margin: 0 auto;
  width: 940px;
`;

const Community = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: relative;
  bottom: 17px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const User = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: relative;
  bottom: 17px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
///555
const Chat = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: relative;
  bottom: 17px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Support = styled.div`
  color: #b8b6b4;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  padding: 45px 7px 7px;
  position: relative;
  bottom: 17px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Install = styled.button`
  color: #e5efdc;
  font-family: "Motiva Sans", Sans-serif;
  font-size: 11px;
  text-align: center;
  background: #616a72;
  padding: 4px 9px 4px 30px;
  position: relative;
  bottom: 45px;
  margin-left: -20px;
  left: 200px;
  height: 19px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const Install_icon = styled.span`
  right: 83px;
  top: 5px;
  position: absolute;
  height: 10px;
  width: 10px;
  padding: 0px 4px 0px 0px;
  background-image: url(https://steamstore-a.akamaihd.net/public/shared/images/header/btn_header_installsteam_download.png?v=1);
  background-size: 14px;
`;

const Notif = styled.span`
  background: #262625;
  right: 345px;
  top: 7px;
  margin-right: 50px;
  position: absolute;
  height: 12px;
  width: 4px;
  padding: 0px 5px 0px 7px;
  background-image: url(https://steamstore-a.akamaihd.net/public/shared/images/responsive/header_menu_notifications.png);
  background-size: 16px;
  cursor: pointer;
`;

const Info = styled.span`
  top: 3px;
  right: 288px;
  margin-left: 2px;
  margin-right: 50px;
  position: absolute;
  color: #b8b6b4;
  font-size: 11px;
  font-family: "Motiva Sans", Sans-serif;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const Currency = styled.span`
  top: 28px;
  right: 307px;
  margin-top: 3px;
  position: absolute;
  padding: 2px 0px 0px 0px;
  color: #b8b6b4;
  font-size: 11px;
  font-family: "Motiva Sans", Sans-serif;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const Avatar = styled.span`
  /* background: #262625;
   */
  border: 1px black;
  right: 245px;
  top: 7px;
  margin-right: 50px;
  position: absolute;
  height: 22px;
  width: 24px;
  padding: 10px 7px 2px 10px;
  background-image: url(https://i.imgur.com/hHVjPbv.jpg);
  background-size: 40px;
  cursor: pointer;
`;

class Main_top extends React.Component {
  constructor() {
    super();
    this.state = {
      displayStore: false,
      displayCommunity: false,
      displayUser: false
    };
    this.showStore = this.showStore.bind(this);
    this.hideStore = this.hideStore.bind(this);
    this.showCommunity = this.showCommunity.bind(this);
    this.hideCommunity = this.hideCommunity.bind(this);
    this.showUser = this.showUser.bind(this);
    this.hideUser = this.hideUser.bind(this);
  }

  showStore() {
    this.setState({
      displayStore: true
    });
  }

  hideStore() {
    this.setState({
      displayStore: false
    });
  }

  showCommunity() {
    this.setState({
      displayCommunity: true
    });
  }

  hideCommunity() {
    this.setState({
      displayCommunity: false
    });
  }

  showUser() {
    this.setState({
      displayUser: true
    });
  }

  hideUser() {
    this.setState({
      displayUser: false
    });
  }

  render() {
    return (
      <nav>
        <Wrapper>
          <Margin>
            <img
              src="/images/vapor_logo.png"
              width="176"
              height="44"
              position="absolute"
            />
            <div
              onMouseLeave={this.hideStore}
              style={{ display: "inline-block" }}
            >
              <Store
                style={{ display: "inline-block" }}
                onMouseEnter={this.showStore}
              >
                STORE
              </Store>
              {this.state.displayStore && <Styled_store />}
            </div>
            <div
              onMouseLeave={this.hideCommunity}
              style={{ display: "inline-block" }}
            >
              <Community
                style={{ display: "inline-block" }}
                onMouseEnter={this.showCommunity}
              >
                COMMUNITY
              </Community>
              {this.state.displayCommunity && <Styled_community />}
            </div>
            <div
              onMouseLeave={this.hideUser}
              style={{ display: "inline-block" }}
            >
              <User
                style={{ display: "inline-block" }}
                onMouseEnter={this.showUser}
              >
                USER
              </User>
              {this.state.displayUser && <Styled_user />}
            </div>
            <Chat style={{ display: "inline-block" }}>CHAT</Chat>
            <Support style={{ display: "inline-block" }}>SUPPORT</Support>
            <Install
              as="a"
              href="https://store.steampowered.com/about/"
              style={{ textDecoration: "none" }}
            >
              <Install_icon />
              Install Vapor
            </Install>
            <Notif />
            <Info>
              User
              <span>
                <img src="https://store.steampowered.com/public/images/v6/ico/ico_arrow_dn_for_select.png" />
              </span>
            </Info>
            <Currency>$1.00</Currency>
            <Avatar />
          </Margin>
        </Wrapper>
      </nav>
    );
  }
}

export default Main_top;
