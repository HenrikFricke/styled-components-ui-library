import * as React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import 'jest-styled-components';

import { H1 } from './Headline';

describe('Headline', () => {
    let tree: ReactTestRenderer.ReactTestRendererJSON;

    beforeEach(() => {
        tree = ReactTestRenderer.create(
            <H1>I'm a healdine</H1>
        ).toJSON();
    });

    it('should render correctly', () => {
        expect(tree).toMatchStyledComponentsSnapshot();
    });
});