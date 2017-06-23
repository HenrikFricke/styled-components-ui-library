import * as React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { shallow, ShallowWrapper } from 'enzyme';

import 'jest-styled-components';

import { PrimaryButton } from '../Button/Button';
import Modal from './Modal';
import ModalFooter, { ModalFooterProps } from './ModalFooter';

describe('Modal', () => {
    let tree: ReactTestRenderer.ReactTestRendererJSON;

    beforeEach(() => {
        tree = ReactTestRenderer.create(
            <Modal
                title="Dialog"
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus risus. 
                Mauris pulvinar tellus vitae purus mollis, in finibus sapien eleifend.`}
                saveButtonClickHandler={() => null}
            />
        ).toJSON();
    });

    it('should render correctly', () => {
        expect(tree).toMatchStyledComponentsSnapshot();
    });
});

describe('ModalFooter', () => {
    let component: ShallowWrapper<ModalFooterProps, {}>;
    let saveButtonClickHandler: jest.Mock<React.EventHandler<React.MouseEvent<HTMLButtonElement>>>;

    beforeEach(() => {
        saveButtonClickHandler = jest.fn<React.EventHandler<React.MouseEvent<HTMLButtonElement>>>();

        component = shallow<ModalFooterProps, {}>(
            <ModalFooter
                saveButtonClickHandler={saveButtonClickHandler}
            />
        ).dive<ModalFooterProps, {}>();
    });

    describe('save button', () => {
        it('should call click handler', () => {
            const saveButton = component.find(PrimaryButton);
            saveButton.simulate('click');
            expect(saveButtonClickHandler).toHaveBeenCalled();
        });
    });
});