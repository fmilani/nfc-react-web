import { Component } from 'react';
import readNfcTag from '../helpers/readNfcTag';
import writeNfcTag from '../helpers/writeNfcTag';

/**
 * API:
 * const App = () => (
 *   // reading
 *   <div>Tap to a tag to read it</div>
 *   <Nfc read={(data) => {console.log(data)}} />
 *
 *   // writing
 *   <div>Tap to a tag to write to it</div>
 *   <Nfc write='some_data' writeCallback={(error) => {}} />
 * )
 *
 */
class Nfc extends Component {
  constructor(props) {
    super(props);
    if (typeof navigator.nfc === 'undefined') {
      throw new Error('Sorry, your device does not support NFC');
    }
  }
  componentDidMount() {
    const { timeout, read, write, writeCallback } = this.props;
    if (read && write) {
      throw new Error(
        'It is not possible to read and write at the same time :(',
      );
    }
    if (read) {
      readNfcTag(timeout, read);
    } else if (write) {
      writeNfcTag(timeout, write, writeCallback);
    }
  }

  render() {
    return null;
  }
}

Nfc.defaultProps = {
  timeout: 10,
};

export default Nfc;
