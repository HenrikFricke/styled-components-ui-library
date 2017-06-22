import * as React from 'react';
import styled from 'styled-components';

import { H1 } from '../Headline/Headline';

import {
    colors
} from '../../constants';

interface ModalHeaderProps {
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

export default styled(ModalHeader) `
    border-bottom: 1px solid ${colors.PRIMARY};
`;