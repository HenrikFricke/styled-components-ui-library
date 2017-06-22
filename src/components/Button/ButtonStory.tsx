import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { PrimaryButton, SecondaryButton } from './Button';

storiesOf('Button', module)
  .add('primary', () => (
    <PrimaryButton onClick={() => alert('toll')}>I'am a button</PrimaryButton>
  ))
  .add('secondary', () => (
    <SecondaryButton>I'am a button</SecondaryButton>
  ));