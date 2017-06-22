import styled from 'styled-components';

import {
    colors,
    transitions,
    fonts
} from '../../constants';

export const PrimaryButton = styled.button`
    border: 2px solid ${colors.PRIMARY};
    background-color: transparent;
    color: ${colors.PRIMARY};
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: ${transitions.STANDARD} all;
    font-size: ${fonts.STANDARD};

    &:hover {
        background-color: ${colors.PRIMARY};
        color: ${colors.SECONDARY};
    }
`;

export const SecondaryButton = PrimaryButton.extend`
    background-color: ${colors.PRIMARY};
    color: ${colors.SECONDARY};

    &:hover {
        background-color: transparent;
        color: ${colors.PRIMARY};
    }
`;