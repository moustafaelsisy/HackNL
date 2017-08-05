import React from 'react'
import styled from 'styled-components'
import palette from '../../config/paletteConstants'
import Tile from './Tile'
import PropTypes from 'prop-types'

const LinksList = styled.ul`
  list-style: none;
  color: white;
`

const NavigateSection = styled.div`
  display: inline-block;
  text-align: center;
  width: 50%;
  height: 60%;
  color: white;
  ${({color}) =>
    `
      background-color: ${palette[color]}
    `
  }
`;

// const SocialSection = styled.div`
//   display: inline-block;
//   text-align: center;
//   width: 50%;
//   height: 60%;
//   color: white;
//   list-style: none;
//   ${({color}) =>
//     `
//       background-color: ${palette[color]}
//     `
//   }
// `;

const LegalSection = styled.div`
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 40%;
  color: white;
  ${({color}) =>
    `
      background-color: ${palette[color]}
    `
  }
`;

// const SocialSection = styled.div``

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavigateSection color={this.props.navigationColor}>
          <LinksList>
            <h2>Navigate</h2>
            <li><a href="">Mission & Vision</a></li>
            <li><a href="">Buy Tickets</a></li>
            <li><a href="">Sponsor Us!</a></li>
            <li><a href="">Volunteer</a></li>
            <li><a href="">Event Organisers</a></li>
            <li><a href="">Event Sponsors</a></li>
          </LinksList>
        </NavigateSection>
        <NavigateSection color={this.props.navigationColor}>
          <LinksList>
            <h2>Social</h2>
            <li><a href="">Mission & Vision</a></li>
            <li><a href="">Buy Tickets</a></li>
            <li><a href="">Sponsor Us!</a></li>
            <li><a href="">Volunteer</a></li>
            <li><a href="">Event Organisers</a></li>
            <li><a href="">Event Sponsors</a></li>
          </LinksList>
        </NavigateSection>
        <LegalSection color={this.props.legalColor}>
          <LinksList>
            <h2>Legal</h2>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Code of Conduct</a></li>
            <li><a href="">Official Rules</a></li>
            <li><a href="">FAQs</a></li>
            <li><a href="">Volunteering for SVB programs</a></li>
          </LinksList>
          <br/>
          <p>&copy; 2017 HackNL - All Rights Reserved</p>
        </LegalSection>
      </div>
    );
  }
}

Footer.propTypes = {
  navigationColor: PropTypes.string,
  legalColor: PropTypes.string
}

Footer.defaultProps = {
  navigationColor: "grey",
  legalColor: "slate"
  // socialLogos
}

export default Footer
