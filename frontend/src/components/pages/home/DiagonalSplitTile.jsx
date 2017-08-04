import React from 'react'
import styled from 'styled-components'
import Tile from '../../common/Tile'
import palette from '../../../config/paletteConstants'
import PropTypes from 'prop-types'

const Wrapper = styled(Tile)`
  padding: 0;
`

const Section = styled(Tile)`
  display: inline-block;
  width: 40%;
  position: relative;
  vertical-align: top;
  
  &:first-of-type{
    z-index: 2;
  }
`

const TriangleWrapper = styled.div`
  display: inline-block;
  width: 15%;
`

const Triangle = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  ${({color, height}) =>
  `border-width: ${height}px ${height}px 0 0;
  border-color: ${palette[color]} transparent transparent transparent;`
  }
`

class DiagonalSplitTile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      triangleHeight: null
    }
  }

  componentDidMount(){
    this.setState({triangleHeight: Math.max(this.leftSection.offsetHeight, this.rightSection.offsetHeight)})
  }

  render(){
    return (
      <Wrapper backgroundColor={this.props.rightTileColor}>
        <Section innerRef={(element) => this.leftSection = element}
                 backgroundColor={this.props.leftTileColor}>
          {this.props.children ? this.props.children[0] : ""}
        </Section>
        <TriangleWrapper>
          <Triangle color={this.props.leftTileColor}
                    height={this.state.triangleHeight-2}/>
        </TriangleWrapper>
        <Section innerRef={(element) => this.rightSection = element}
                 backgroundColor={this.props.rightTileColor}>
          {this.props.children ? this.props.children[1] : ""}
        </Section>
      </Wrapper>
    )
  }

}

DiagonalSplitTile.propTypes = {
  rightTileColor: PropTypes.string,
  leftTileColor: PropTypes.string
}

DiagonalSplitTile.defaultProps = {
  rightTileColor: "aegean",
  leftTileColor: "sky"
}

export default DiagonalSplitTile