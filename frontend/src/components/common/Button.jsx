import React from 'react';
import styled from 'styled-components';
import palette from '../../config/paletteConstants'
import FontIcon from 'material-ui/FontIcon';
import PropTypes from 'prop-types';

const hoverOptions = {
  darken: "filter: brightness(0.9);",
  brighten: "filter: brightness(1.1);"
};

const borderRadii = {
  box: "0px",
  round: "3px",
  pill: "20px"
};

const Wrapper = styled.div`
    font-size: 2rem;
    background-color: ${({backgroundColor}) => palette[backgroundColor]};
    color: ${({color}) => palette[color]};
    border-radius: ${({borderRadius}) => borderRadii[borderRadius]}
    display: inline-block;
    padding: 1rem 2rem;
    
    &:hover{
      cursor: pointer;
      ${({onHover}) => hoverOptions[onHover] || hoverOptions["darken"]}
    }
    
    span{
      vertical-align: middle;
      display: inline-block;
    }
`;

const Button = (color, backgroundColor, borderRadius, onHover, icon, text) => {

  const iconStyles = {
    display: icon ? "inline-block" : "none",
    fontSize: "2rem",
    verticalAlign: "middle",
    color,
    backgroundColor
  };

  return(
    <Wrapper color={color}
             backgroundColor={backgroundColor}
             borderRadius={borderRadius}
             onHover={onHover}>
      <FontIcon classname="material-icons" style={iconStyles}>{icon}</FontIcon>
      <span>{text}</span>
    </Wrapper>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  onHover: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  color: "navy",
  backgroundColor: "slate",
  borderRadius: "round",
  onHover: "darken"
};

export default Button;
