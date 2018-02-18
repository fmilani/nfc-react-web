import React from 'react';
import { Nfc } from '../lib';

const App = () => (
  <div>
    Test App
    <Nfc
      read={records => {
        alert(records[0].data);
      }}
    />
  </div>
);

export default App;
