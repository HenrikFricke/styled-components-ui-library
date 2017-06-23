import styled, { StyledComponentClass } from 'styled-components';

import {
    colors,
    fonts
} from '../../constants';

const paragraph: StyledComponentClass<React.HTMLProps<HTMLParagraphElement>, {}> = styled.p`
    color: ${colors.BLACK};
    padding: 5px;
    font-size: ${fonts.STANDARD};
    line-height: 1.5;
    text-align: justify;
`;

export default paragraph;