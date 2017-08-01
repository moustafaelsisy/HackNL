import styled from 'styled-components';
import palette from '../../config/paletteConstants';

const Tile = styled.div`
    padding: 2rem;
    margin: 0;
    text-align: justify;
    color: ${({color}) => palette[color] || palette["white"]};
    background-color: ${({backgroundColor}) => palette[backgroundColor] || palette["sky"]};
`;

export default Tile;