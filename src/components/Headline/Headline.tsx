import styled, { StyledComponentClass } from 'styled-components';

import {
    colors,
    fonts
} from '../../constants';

export const H1: StyledComponentClass<React.HTMLProps<HTMLHeadingElement>, {}> = styled.h1`
    color: ${colors.PRIMARY};
    padding: 10px 0;
    font-size: ${fonts.LARGE};
    margin: 0;
`;