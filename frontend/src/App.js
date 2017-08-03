import React, { Component } from 'react';
import Tile from './components/common/Tile'
import Button from './components/common/Button'
import styled from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const CenterDiv = styled.div`
  margin: 10rem auto;
  text-align: center;
`

const DemoTile = styled(Tile)`
  background: linear-gradient(rgba(37, 39, 77, 0.95), rgba(37, 39, 77, 0.95)),
   url("https://ak5.picdn.net/shutterstock/videos/19941295/thumb/1.jpg");
`

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div>
        <DemoTile color="white" backgroundColor="navy">
          <CenterDiv>
            <h1>St. John's<br/>AI Hackathon<br/>2017</h1>
            <h2>Powered by</h2>
            <h3>MUN CS Society</h3>
            <p>Rocket Launch</p>
            <a href="www.hacknl.ca">hacknl.ca</a>
            <div><Button text="CLICK" onHover="brighten" icon="edit"/></div>
          </CenterDiv>
        </DemoTile>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
