# Nfc React Web

React component for the web nfc api.

## Installation

```bash
yarn add nfc-react-web

# or

npm install nfc-react-web
```

## Quickstart

To read a tag:

```jsx
import Nfc from 'nfc-react-web';

const App = () => (
  <Nfc
    read={data => {
      console.log(`Data read from tag: ${JSON.stringify(data)}`);
    }}
  />
);
```

To write to a tag:

```jsx
import Nfc from 'nfc-react-web';

const App = () => <Nfc write="Written with nfc-react-web" />;
```

## Caveat

The web nfc api is [_still experimental_](https://whatwebcando.today/nfc.html). To enable it on Chrome in your android device, open a new tab and navigate to `chrome://flags`, search form `WebNFC` and enable it.
