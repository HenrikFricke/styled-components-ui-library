import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';

import { H1 } from '../Headline/Headline';

import {
    colors
} from '../../constants';

export interface ModalHeaderProps {
    className?: string;
    title: string;
}

const ModalHeader: React.StatelessComponent<ModalHeaderProps> = props => {
    return (
        <div className={props.className}>
            <H1>{props.title}</H1>
        </div>
    );
};

const styledModalHeader: StyledComponentClass<ModalHeaderProps, {}> = styled(ModalHeader) `
    border-bottom: 1px solid ${colors.PRIMARY};
`;

export default styledModalHeader;