import { Component } from 'react';
import readNfcTag from '../helpers/readNfcTag';

export default class Nfc extends Component {
  componentDidMount() {
    readNfcTag();
  }

  render() {
    return null;
  }
}
