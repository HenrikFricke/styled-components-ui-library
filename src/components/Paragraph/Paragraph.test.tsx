import * as React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import 'jest-styled-components';

import Paragrah from './Paragraph';

describe('Paragrah', () => {
    let tree: ReactTestRenderer.ReactTestRendererJSON;

    beforeEach(() => {
        tree = ReactTestRenderer.create(
            <Paragrah>I'am a small text</Paragrah>
        ).toJSON();
    });

    it('should render correctly', () => {
        expect(tree).toMatchStyledComponentsSnapshot();
    });
});