# styled components ui library
> concept to create an UI library with styled components and [Storybook](https://storybook.js.org)

## Features

- UI Hub to preview the UI components
- Jest snapshot testing to figure out dependencies between UI components. This works for the Markup as well as for the CSS
- native TypeScript support, because the UI library is written in TypeScript
- Stylelint for SCSS of the styled components

## Usage

Add the UI library to your project:

```bash
npm i styled-components-ui-library
# OR
yarn add styled-components-ui-library
````

Use it in your React components (example written in TypeScript):

```typescript
import * as React from 'react';

import { Modal } from 'styled-components-ui-library';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
          <Modal
            title="Do you like this demo?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            saveButtonClickHandler={() => null}
          />
      </div>
    );
  }
}

export default App;
```

You can find a simple example here (bootstrapped with react-create-app):
https://github.com/HenrikFricke/styled-components-ui-lib-consumer

## Contribute

```bash
# clone repo
git clone git@github.com:HenrikFricke/styled-components-ui-library.git
cd styled-components-ui-library

# install dependencies
yarn

# fire up storybook
yarn start
```

Visit: http://localhost:6006/

## Deployment

Push your changes to master and create a new GitHub release (based on [semver](http://semver.org/)). CircleCI is in place to push a new version to npm.
