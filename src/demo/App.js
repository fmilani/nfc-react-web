import React from 'react';
import ReactDOM from 'react-dom';
import Nfc from '../lib/';

const buttonStyle = {
  fontSize: 50,
  margin: 20,
};
const ReadButton = () => (
  <button
    style={buttonStyle}
    onClick={() => {
      ReactDOM.unmountComponentAtNode(document.getElementById('nfc-container'));
      ReactDOM.render(
        <Nfc
          read={records => {
            alert(records[0].data);
          }}
        />,
        document.getElementById('nfc-container'),
      );
    }}
  >
    Read
  </button>
);

const WriteButton = () => (
  <button
    style={buttonStyle}
    onClick={() => {
      ReactDOM.unmountComponentAtNode(document.getElementById('nfc-container'));
      ReactDOM.render(
        <Nfc write="Written with nfc-react-web" />,
        document.getElementById('nfc-container'),
      );
    }}
  >
    Write
  </button>
);

const App = () => (
  <div>
    Test App
    <div>
      <ReadButton />
      <WriteButton />
    </div>
    <div id="nfc-container" />
  </div>
);

export default App;
