import * as React from 'react';
import styled from 'styled-components';

import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import Paragraph from '../Paragraph/Paragraph';

import {
    colors
} from '../../constants';

interface ModalProps {
    className?: string;
    title: string;
    text: string;
}

const Modal: React.StatelessComponent<ModalProps> = props => {
    return (
        <div className={props.className}>
            <ModalHeader title={props.title} />
            <Paragraph>{props.text}</Paragraph>
            <ModalFooter />
        </div>
    );
};

export default styled(Modal) `
    border: 1px solid ${colors.GRAY};
    border-radius: 5px;
    box-shadow: 0 0 10px -2px ${colors.GRAY};
    width: 600px;
    padding: 20px;
    box-sizing: border-box;
    background-color: ${colors.WHITE};
`;