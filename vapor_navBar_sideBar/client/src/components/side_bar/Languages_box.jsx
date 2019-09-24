import React from "react";
const styled = window.styled;

const Languages_layout = styled.div`
  display: flex;
  flex-direction: column;
  background-image: -webkit-linear-gradient(left, #15202c, #0e141d);
  padding: 16px;
`;

const Title = styled.div`
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: #8d969d;
  padding: 0px 10px 10px 0px;
`;

const Table = styled.table`
  border-collapse: collapse;
  display: table;
  color: #b0aeac;
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
  border-color: grey;
`;

const THeader = styled.th`
  max-width: 40px;
  font-size: 12px;
  color: #b0aeac;
  font-weight: normal;
  text-align: center;
  /* padding: 5px 5px 0px 5px; */
  border-spacing: 2px;
  border-bottom: 1px solid #626366;
  margin-left: 10px;
`;

const SubTd = styled.td`
  display: table-cell;
  color: #b0aeac;
  padding: 3px 0px 3px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const SubCheck = styled.td`
  display: table-cell;
  color: #b0aeac;
  padding: 3px 0px 3px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

const TRow = styled.tr`
  display: table-row;
  width: 24px;
  font-size: 12px;
  color: #b0aeac;
  font-weight: normal;
  text-align: left;
  padding: 0px 0px 0px 0px;
  border-bottom: 1px solid #626366;
`;

const Check = styled.span`
  color: #67c1f5;
  font-weight: bold;
  text-align: center;
`;

const Supported = styled.div`
  color: #67c1f5;
  font-size: 12px;
  cursor: pointer;
  margin-top: 5px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: white;
  }
`;

class Languages_box extends React.Component {
  constructor() {
    super();

    this.state = {
      languages: false
    };
    this.handleLanguages = this.handleLanguages.bind(this);
  }

  handleLanguages(e) {
    e.preventDefault();
    console.log("show languages");
    this.setState({
      languages: true
    });
  }

  render() {
    if (this.state.languages === false) {
      return (
        <Languages_layout>
          <Title>Languages:</Title>
          <Table>
            <tbody>
              <THeader />
              <THeader>Interface</THeader>
              <THeader>Full Audio</THeader>
              <THeader>Subtitles</THeader>
              <TRow>
                <SubTd>English</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Bulgarian</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Czech</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Danish</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Dutch</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
            </tbody>
          </Table>
          <Supported onClick={this.handleLanguages}>
            See all 26 supported languages
          </Supported>
        </Languages_layout>
      );
    } else {
      return (
        <Languages_layout>
          <Title>Languages:</Title>
          <Table>
            <tbody>
              <THeader />
              <THeader>Interface</THeader>
              <THeader>Full Audio</THeader>
              <THeader>Subtitles</THeader>
              <TRow>
                <SubTd>English</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Bulgarian</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Czech</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Danish</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Dutch</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Finnish</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>French</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>German</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Greek</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Hungarian</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Italian</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Japanese</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Korean</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Norwegian</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Polish</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Portugese</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Portugese-Brazil</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Romanian</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Russian</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Simplified Chinese</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Spanish - Spain</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Swedish</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Thai</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Traditional Chinese</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Turkish</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
              <TRow>
                <SubTd>Ukranian</SubTd>
                <SubCheck>
                  <Check>✔</Check>
                </SubCheck>
                <SubTd />
                <SubTd />
              </TRow>
            </tbody>
          </Table>
        </Languages_layout>
      );
    }
  }
}

export default Languages_box;
