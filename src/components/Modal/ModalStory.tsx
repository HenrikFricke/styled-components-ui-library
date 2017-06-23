import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from './Modal';

storiesOf('Modal', module)
    .add('default', () => (
        <Modal
            title="Dialog"
            text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a maximus risus. 
                Mauris pulvinar tellus vitae purus mollis, in finibus sapien eleifend.`}
            saveButtonClickHandler={() => null}
        />
    ));