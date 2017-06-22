import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Paragraph from './Paragraph';

storiesOf('Paragraph', module)
    .add('Default', () => (
        <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus risus.
            Mauris pulvinar tellus vitae purus mollis, in finibus sapien eleifend. Sed enim
            velit, iaculis ultricies tellus vitae, vehicula pulvinar nibh. Fusce at diam
            vehicula, luctus enim vel, ullamcorper erat. Nullam ac tortor at augue dapibus
            iaculis non in magna. Integer bibendum sit amet lacus ac sollicitudin. Aliquam
            erat volutpat. Ut justo orci, auctor sit amet mollis quis, vehicula et justo.
            Praesent ac faucibus sapien. Integer eget posuere augue, sed rhoncus elit.
        </Paragraph>
    ));