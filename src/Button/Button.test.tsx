import * as React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import 'jest-styled-components';

import { PrimaryButton, SecondaryButton } from './Button';

describe('PrimaryButton', () => {
    let tree: ReactTestRenderer.ReactTestRendererJSON;

    beforeEach(() => {
        tree = ReactTestRenderer.create(
            <PrimaryButton>I'am a button</PrimaryButton>
        ).toJSON();
    });

    it('should render correctly', () => {
        expect(tree).toMatchStyledComponentsSnapshot();
    });
});

describe('SecondaryButton', () => {
    let tree: ReactTestRenderer.ReactTestRendererJSON;

    beforeEach(() => {
        tree = ReactTestRenderer.create(
            <SecondaryButton>I'am a button</SecondaryButton>
        ).toJSON();
    });

    it('should render correctly', () => {
        expect(tree).toMatchStyledComponentsSnapshot();
    });
});
