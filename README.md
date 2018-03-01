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
    timeout={15} // time to keep trying to read tags, in seconds
  />
);
```

_Note: The component will only read a tag successfully once, no matter if it isn't timed out._

To write to a tag:

```jsx
import Nfc from 'nfc-react-web';

const App = () => (
  <Nfc
    write="Written with nfc-react-web"
    writeCallback={error => {
      if (error) {
        console.log('An error occurred while writing to tag: ', error);
      } else {
        console.log('Data written to tag! :)');
      }
    }}
    timeout={15} // time to keep trying to write to tags, in seconds
  />
);
```

_Note: Even when an error happens, the write process will still try to write to a tag._

## Caveat

The web nfc api is [_still experimental_](https://whatwebcando.today/nfc.html). To enable it on Chrome in your android device, open a new tab and navigate to `chrome://flags`, search form `WebNFC` and enable it.
