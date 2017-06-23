import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';

import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import Paragraph from '../Paragraph/Paragraph';

import {
    colors
} from '../../constants';

export interface ModalProps {
    className?: string;
    title: string;
    text: string;
    saveButtonClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
}

const Modal: React.StatelessComponent<ModalProps> = props => {
    return (
        <div className={props.className}>
            <ModalHeader title={props.title} />
            <Paragraph>{props.text}</Paragraph>
            <ModalFooter
                saveButtonClickHandler={props.saveButtonClickHandler}
            />
        </div>
    );
};

const styledModal: StyledComponentClass<ModalProps, {}> = styled(Modal) `
    border: 1px solid ${colors.GRAY};
    border-radius: 5px;
    box-shadow: 0 0 10px -2px ${colors.GRAY};
    width: 600px;
    padding: 20px;
    box-sizing: border-box;
    background-color: ${colors.WHITE};
`;

export default styledModal;