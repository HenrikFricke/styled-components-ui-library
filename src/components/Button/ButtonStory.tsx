import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { PrimaryButton, SecondaryButton } from './Button';

storiesOf('Button', module)
  .add('primary', () => (
    <PrimaryButton>I'm a button</PrimaryButton>
  ))
  .add('secondary', () => (
    <SecondaryButton>I'm a button</SecondaryButton>
  ));