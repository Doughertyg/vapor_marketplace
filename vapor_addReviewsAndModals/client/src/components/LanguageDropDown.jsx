import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
// const SelectContainer = styled.div`
//   position: static;
// `;

const DropDownList = styled.ul`
  padding: 0;
  display: block;
  list-style-type: none;
  line-height: 22px;
  margin: 0;
  position: absolute;
  top: 0;
  left: auto;
  right: 0;
  z-index: 900;
  overflow: auto;
  overflow-x: hidden;
  box-shadow: 0 0 5px 0 #000000;
  background: #417a9b;
`;

const DropDownListItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  padding: 0;
  margin: 0;
`;

const DropDownListA = styled.a`
  padding: 0 10px;
  display: block;
  text-decoration: none;
  color: #e5e4dc;
  white-space: nowrap;
  &:hover {
    color: #ffffff;
    background-color: #67c1f5;
    background: -webkit-linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;
class LanguageDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Language: '',
      clickedOutside: false
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleClickOutside() {
    this.toggle();
  }

  toggle() {
    const clickedOutside = !this.state.clickedOutside;
    this.setState({
      clickedOutside
    });
  }

  render() {
    if (!this.state.clickedOutside) {
      return (
        <DropDownList>
          {this.props.languages.map((language, key) => (
            <DropDownListItem key={key}>
              <DropDownListA
                onClick={() => this.props.updateLanguage(language)}
                key={key}
              >
                {language}
              </DropDownListA>
            </DropDownListItem>
          ))}
        </DropDownList>
      );
    } else {
      return null;
    }
  }
}

export default onClickOutside(LanguageDropDown);
