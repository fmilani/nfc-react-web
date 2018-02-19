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
 *   <Nfc write='some_data' />
 * )
 *
 */
class Nfc extends Component {
  componentDidMount() {
    const { timeout, read, write } = this.props;
    if (read && write) {
      throw new Error(
        'It is not possible to read and write at the same time :(',
      );
    }
    if (read) {
      readNfcTag(timeout, read);
    } else if (write) {
      writeNfcTag(timeout, write);
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
