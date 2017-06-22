import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { H1 } from './Headline';

storiesOf('Headline', module)
    .add('H1', () => (
        <H1>I'am a headline</H1>
    ));