import * as React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import 'jest-styled-components';

import Modal from './Modal';

describe('Modal', () => {
    let tree: ReactTestRenderer.ReactTestRendererJSON;

    beforeEach(() => {
        tree = ReactTestRenderer.create(
            <Modal
                title="Dialog"
                text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus risus. 
                Mauris pulvinar tellus vitae purus mollis, in finibus sapien eleifend.`}
            />
        ).toJSON();
    });

    it('should render correctly', () => {
        expect(tree).toMatchStyledComponentsSnapshot();
    });
});