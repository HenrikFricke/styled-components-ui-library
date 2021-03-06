import * as React from 'react';
import styled, { StyledComponentClass } from 'styled-components';

import { PrimaryButton, SecondaryButton } from '../Button/Button';

export interface ModalFooterProps {
    className?: string;
    saveButtonClickHandler: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
}

const ModalFooter: React.StatelessComponent<ModalFooterProps> = props => {
    return (
        <div className={props.className}>
            <PrimaryButton onClick={props.saveButtonClickHandler}>Save</PrimaryButton>
            <SecondaryButton>Cancel</SecondaryButton>
        </div>
    );
};

const styledModalFooter: StyledComponentClass<ModalFooterProps, {}> = styled(ModalFooter) `
    display: flex;
    flex-direction: row-reverse;

    > ${PrimaryButton} {
        margin-left: 10px;
    }
`;

export default styledModalFooter;