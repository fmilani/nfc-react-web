import { Component } from 'react';
import readNfcTag from '../helpers/readNfcTag';

class Nfc extends Component {
  componentDidMount() {
    const { timeout } = this.props;
    readNfcTag(timeout);
  }

  render() {
    return null;
  }
}

Nfc.defaultProps = {
  timeout: 10,
};

export default Nfc;
