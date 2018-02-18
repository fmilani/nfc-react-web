import { Component } from 'react';
import readNfcTag from '../helpers/readNfcTag';

/**
 * API:
 * const App = () => (
 *   <div>Tap to a tag to read it</div>
 *   <Nfc read={(data) => {console.log(data)}} />
 * )
 *
 */
class Nfc extends Component {
  componentDidMount() {
    const { timeout, read } = this.props;
    readNfcTag(timeout, read);
  }

  render() {
    return null;
  }
}

Nfc.defaultProps = {
  timeout: 10,
};

export default Nfc;
