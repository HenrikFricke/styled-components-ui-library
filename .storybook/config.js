import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src/components', true, /Story\.tsx$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
