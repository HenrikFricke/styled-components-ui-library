import * as React from 'react';
import styled from 'styled-components';

import { PrimaryButton, SecondaryButton } from '../Button/Button';

interface ModalFooterProps {
    className?: string;
}

const ModalFooter: React.StatelessComponent<ModalFooterProps> = props => {
    return (
        <div className={props.className}>
            <PrimaryButton>Save</PrimaryButton>
            <SecondaryButton>Cancel</SecondaryButton>
        </div>
    );
};

export default styled(ModalFooter) `
    display: flex;
    flex-direction: row-reverse;

    > ${PrimaryButton} {
        margin-left: 10px;
    }
`;