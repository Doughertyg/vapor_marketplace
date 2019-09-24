import React from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

const SelectContainer = styled.div`
  position: static;
`;

const DropDownList = styled.ul`
  list-style-type: none;
  line-height: 22px;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: auto;
  z-index: 900;
  overflow: auto;
  overflow-x: hidden;
  box-shadow: 0 0 5px 0 #000000;
  background: #417a9b;
  padding: 0;
`;

const DropDownListItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
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

class VisibilityDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: 'Public',
      clickedOutside: false
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleClickOutside() {
    this.toggle();
    console.log('clicked outside');
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
        <SelectContainer>
          <DropDownList>
            {this.props.visibilityOptions.map((visibility, key) => (
              <DropDownListItem key={key}>
                <DropDownListA
                  onClick={() => this.props.updateVisibility(visibility)}
                  key={key}
                >
                  {visibility}
                </DropDownListA>
              </DropDownListItem>
            ))}
          </DropDownList>
        </SelectContainer>
      );
    } else {
      return null;
    }
  }
}

export default onClickOutside(VisibilityDropDown);
